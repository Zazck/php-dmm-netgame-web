import { UpdateStComponent } from './../../components/dialogs/update-st/update-st.component';
import { PaymentComponent } from './../../components/dialogs/payment/payment.component';
import { SettingService } from './../../services/setting.service';
import { OpCode, IResponseData, IResponseGameFrame, IInstallPayload, IResponseError, IRPCPayloadRaw, IRPCPayload, IRPCRequestPaymentPayload, IPaymentPayload, IResponsePaymentAction, IResponseMessage } from './../../types/dmm';
import { Component, OnInit } from '@angular/core';
import { IGadgetInfo, IRunPayload } from 'src/app/types/dmm';
import { MatDialog } from '@angular/material/dialog';
import { InstallComponent } from 'src/app/components/dialogs/install/install.component';
import { DmmService } from 'src/app/services/dmm.service';
import { Router, ActivatedRoute } from '@angular/router';
import { RegistComponent } from 'src/app/components/dialogs/regist/regist.component';
import { BehaviorSubject, firstValueFrom, fromEvent, of, ReplaySubject, Subject } from 'rxjs';
import { filter, take, takeUntil, tap, map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.sass'],
})
export class PlayComponent implements OnInit {
  public iframeWidth: number = 1200;
  public iframeHeight: number = 1200;
  public loading: boolean = false;
  public pure: boolean = false;
  private osapi: string = '';
  private frameOrigin: string = '';
  private category: 'general' | 'adult';
  private name: string = '';
  private notification: boolean = true;
  private myapp: boolean = true;
  private updateStTimer: number = null;
  private destroyed$ = new ReplaySubject<void>(1);
  private response$ = new Subject<IResponseData<any> | IResponseMessage>();

  private gadgetInfo: IGadgetInfo = {} as IGadgetInfo;
  private rpcToken: string = '';
  private readonly newTransactionHost = 'pc-play.games.dmm.com';
  private readonly oldTransactionHost = 'www.dmm.com';

  constructor(
    private dialog: MatDialog,
    private setting: SettingService,
    private dmm: DmmService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  public get frame() {
    const frame: HTMLIFrameElement = <HTMLIFrameElement>window.document.getElementById('game_frame');
    return frame || null;
  }

  public rpcMessage<T extends any[]>(event: string, ...data: T) {
    this.frame.contentWindow.postMessage(
      JSON.stringify(<IRPCPayloadRaw<T>>{
        s: event,
        a: data,
        t: this.rpcToken,
        c: 0,
        f: '..',
        l: false,
      }),
      this.frameOrigin,
    );
  }

  public tryCreateUrl(url: string, fallbackSchema: "http" | "https"): URL {
    try {
      return new URL(url);
    } catch (_) {
      return new URL(`${fallbackSchema}://${url}`);
    }
  }

  public handleOsapi(osapi: string) {
    const parser = document.createElement('textarea');
    parser.innerHTML = osapi;
    const params = this.tryCreateUrl(parser.value, "http");
    if (params.searchParams.has('parent')) {
      params.searchParams.set('parent', `${window.location.origin}${window.location.pathname}`);
    }
    const hashPair: string[] = params.hash.substr(1).split('=');
    if (hashPair[0] === 'rpctoken') {
      this.rpcToken = hashPair[1];
    }
    const result = params.toString();
    return result;
  }

  public updateST = async () => {
    const result = await firstValueFrom(this.dmm.updateST({
      app_name: this.name,
      app_id: this.gadgetInfo.app_id,
      app_base: this.category,
      st: encodeURIComponent(this.gadgetInfo.st),
      time: this.gadgetInfo.time,
      token: this.gadgetInfo.token,
    }).pipe(takeUntil(this.destroyed$)));
    if (result.code !== OpCode.OK || result.data.status !== 'ok') {
      clearInterval(this.updateStTimer);
      const dialog = this.dialog.open(UpdateStComponent, {
        disableClose: true,
        data: null,
      });
      dialog.afterClosed().subscribe((result: boolean | null) => {
        if (result) {
          this.osapi = '';
          this.run();
        }
      });
      return;
    }
    if (this.gadgetInfo.st !== result.data.result) {
      this.gadgetInfo.st = result.data.result;
    }
    this.gadgetInfo.time = result.data.time;
    this.rpcMessage('update_security_token', this.gadgetInfo.st);
  }

  public handleResponse = (response: any) => {
    switch (response.code) {
      case OpCode.OK:
        if (response.data && response.data.gadget_info) {
          this.gadgetInfo = (<IResponseData<IResponseGameFrame>>response).data.gadget_info;
          this.gadgetInfo.st = decodeURIComponent(this.gadgetInfo.st);
          this.osapi = this.handleOsapi(this.gadgetInfo.url);
          // dirty fix for POI
          if ('align' in window) {
            this.pure = true;
            // quick-dirty fix for kancolle
            if (this.name === 'kancolle') {
              setTimeout(() => this.frame.style.top = '-16px', 0);
            }
          }
          if (this.setting.autoRedirect) {
            this.setting.game = null;
            this.setting.gameCategory = null;
            window.location.href = this.osapi;
            return;
          }
          this.setting.game = this.name;
          this.setting.gameCategory = this.category;
          this.frameOrigin = new URL(this.osapi).origin;
          clearInterval(this.updateStTimer);
          this.updateStTimer = <number><unknown>setInterval(this.updateST, 60 * 30 * 1000);
          this.loading = true;
          if ('iframe_width' in response.data && response.data.iframe_width) {
            this.iframeWidth = response.data.iframe_width;
          }
        }
        break;
      case OpCode.DMM_GAME_INSTALL_NEEDED:
        const dialog = this.dialog.open(InstallComponent, {
          disableClose: true,
          data: <IRunPayload>{
            app_name: this.name,
            app_base: this.category,
          },
        });
        dialog.afterClosed().subscribe((result: IResponseData<IResponseGameFrame> | null) => {
          if (!result) {
            return;
          }
          this.response$.next(result);
        });
        break;
      case OpCode.DMM_REQUIRE_PROFILE:
        const registDialog = this.dialog.open(RegistComponent, {
          disableClose: true,
          data: this.category,
        });
        registDialog.afterClosed()
          .pipe(
            filter(result => !!result),
            switchMap((result: IResponseData<IResponseGameFrame>) => {
              if (result.code !== OpCode.OK) {
                return of(result);
              }
              const payload: IInstallPayload = {
                app_name: this.name,
                app_base: this.category,
                notification: this.notification ? 1 : 0,
                myapp: this.myapp ? 1 : 0,
              };
              return this.dmm.install(payload);
            }),
            take(1),
            takeUntil(this.destroyed$),
          )
          .subscribe((result) => this.response$.next(result));
        break;
      case OpCode.DMM_FORCE_REDIRECT:
      case OpCode.DMM_GAME_ALREADY_INSTALLED:
        if (this.setting.autoRetry) {
          this.run();
        }
        break;
      case OpCode.DMM_TOKEN_EXPIRED:
        this.setting.authenticated = false;
        this.router.navigate(['/auth']);
        break;
      default:
        this.router.navigate(['/game-list']);
    }
  }

  public run() {
    const payload = {
      app_name: this.name,
      app_base: this.category,
    };
    this.dmm.run(payload)
      .pipe(
        take(1),
        takeUntil(this.destroyed$)
      ).subscribe(response => this.handleResponse(response));
  }
  public async attached() {
    const searchParams = this.activatedRoute.snapshot.queryParams;
    if (searchParams.category && searchParams.name) {
      this.name = searchParams.name;
      this.category = searchParams.category;
    } else {
      if (this.setting.gameCategory && this.setting.game) {
        this.category = this.setting.gameCategory;
        this.name = this.setting.game;
        this.router.navigate(
          ['/play'],
          {
            queryParams: {
              name,
              category: this.setting.gameCategory,
            },
          },
        );
      } else {
        return this.router.navigate(['/game-list']);
      }
    }

    if (((this.category !== 'general') && (this.category !== 'adult'))
      || this.name.length > 64
      || (this.category !== 'general' && this.setting.category === 'general')) {
      return this.router.navigate(['/game-list']);
    }

    this.run();
  }

  public async requestPayment(payload: IRPCPayload<[IRPCRequestPaymentPayload]>) {
    const transactionUrl = new URL(payload.data[0].transactionUrl);
    const paymentPayload: IPaymentPayload = {
      app_name: this.name,
      app_base: this.category,
      app_id: this.gadgetInfo.app_id,
      version: transactionUrl.host === this.newTransactionHost ? 'new' : 'old',
      payment_id: payload.data[0].paymentId,
    };
    const result = await firstValueFrom(this.dmm.requestPayment(paymentPayload).pipe(takeUntil(this.destroyed$)));
    if (result.code !== OpCode.OK) {
      this.rpcMessage('dmm.requestPaymentCallback', 500, result.data);
      return;
    }
    const paymentDialog = this.dialog.open(PaymentComponent, {
      disableClose: true,
      width: '600px',
      data: [result.data, paymentPayload],
    });
    paymentDialog.afterClosed().subscribe(async (result: IResponseError | IResponseData<IResponsePaymentAction>) => {
      if (result.code !== OpCode.OK) {
        this.rpcMessage('dmm.requestPaymentCallback', 500, JSON.parse(result.data));
        return;
      }
      this.rpcMessage('dmm.requestPaymentCallback', 200, {
        amount: result.data.amount,
        response_code: result.data.response_code,
        payment_id: result.data.payment_id,
      });
      return;
    });
  }

  public handleMessage = (e: MessageEvent) => {
    if (e.origin === window.location.origin) {
      return;
    }
    const raw = <IRPCPayloadRaw>JSON.parse(e.data);
    const payload: IRPCPayload = {
      event: raw.s,
      data: raw.a,
    };
    switch (payload.event) {
      case 'resize_iframe':
        this.iframeHeight = payload.data[0];
        break;
      case '__ack':
        this.loading = false;
        break;
      case 'dmm.requestPayment':
        this.requestPayment(<IRPCPayload<[IRPCRequestPaymentPayload]>>payload);
        break;
      default:
        console.log(payload);
    }
  }

  ngOnInit() {
    fromEvent(window, 'message')
      .pipe(
        takeUntil(this.destroyed$),
      ).subscribe((e) => this.handleMessage(e as any));
    this.response$
      .pipe(
        takeUntil(this.destroyed$)
      ).subscribe(response => this.handleResponse(response));
    this.attached();
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
    clearInterval(this.updateStTimer);
  }

}
