import { SettingService } from './setting.service';
import { Injectable, EventEmitter } from '@angular/core';
import { IResponseError, OpCode, IResponseData, IResponseMessage, ILoginPayload, IResponseST, IUpdateSTPayload, IResponseGameFrame, IRunPayload, IInstallPayload, IRegistPayload, IResponsePaymentDetail, IPaymentPayload, IResponsePaymentAction } from '../types/dmm';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { of, Subject, throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DmmService {
  private responseText = {
    // tslint:disable-next-line: object-literal-key-quotes
    '0': '载入成功',
    '-1': '似乎输入了错误的数据',
    '-2': '服务器网络通信故障',
    '-10': '没找到DMM验证信息',
    '-11': '没找到验证信息',
    '-12': '似乎DMM修改了数据格式',
    '-13': 'DMM要求更改用户密码',
    '-14': '对DMM输入了错误的数据',
    '-15': '需要先安装这个游戏',
    '-16': '这个游戏已经安装过了',
    '-17': '验证信息已经过期',
    '-18': '无效的用户名和密码',
    '-19': 'DMM强制要求页面重定向',
    '-20': '需要完善账号信息',
    '-100': '浏览器与服务器通信失败',
    '-101': '丢失了登录凭据, 需重新登录',
    '-110': '登录器服务端回报了无效的数据',
  };
  private readonly url = 'http://zazck.s1001.xrea.com/services/1562817725000/api.php';
  public emiter = new Subject<string>();
  constructor(
    private setting: SettingService,
    private http: HttpClient,
  ) { }

  private createFormData(input?: object) {
    const result = new FormData();
    if (input) {
      Object.keys(input).forEach((k) => {
        const v = input[k];
        result.append(k, ((v === true) || (v === false)) ? +v : v);
      });
    }
    const cookies = this.setting.cookies;
    if (cookies) {
      result.append('cookies', JSON.stringify(cookies));
    } else {
      result.append('cookies', '[]');
    }
    return result;
  }

  private request(input: string, init?: {
    body: any,
    method: Exclude<keyof HttpClient, "request" | "jsonp" | "head" | "get" | "options" | "delete">,
  }): Observable<IResponseMessage>;
  private request<T>(input: string, init?: {
    body: any,
    method: Exclude<keyof HttpClient, "request" | "jsonp" | "head" | "get" | "options" | "delete">,
  }): Observable<IResponseData<T>>;
  private request(input: string, init?: {
    body: any,
    method: Exclude<keyof HttpClient, "request" | "jsonp" | "head" | "get" | "options" | "delete">,
  }) {
    const { body, method } = init;
    this.http.post
    return (this.http[method])(input, body)
      .pipe(
        catchError(() => {
          return throwError(<IResponseError>{
            code: OpCode.CLIENT_NETWORK_ERROR,
            data: this.responseText[OpCode.CLIENT_NETWORK_ERROR],
            cookies: [],
          });
        }),
        tap((result) => {
          if (result.cookies) {
            this.setting.cookies = result.cookies;
          }
          this.emiter.next(this.responseText[result.code]);
          if (result.code === OpCode.DMM_TOKEN_EXPIRED) {
            this.setting.cookies = [];
            this.setting.authenticated = false;
          }
        })
      ) as Observable<any>;
  }

  public login(payload: ILoginPayload, exchange?: boolean): Observable<IResponseMessage> {
    const data = this.createFormData(payload);
    data.append('method', exchange ? 'login_exchange' : 'login');
    return this.request(this.url, {
      method: 'post',
      body: data,
    }).pipe(
      tap((result) => {
        if (result.code !== OpCode.OK) {
          return;
        }
        if (payload.save_login_id) {
          this.setting.loginID = payload.login_id;
        } else {
          this.setting.loginID = null;
        }
        if (payload.save_password) {
          this.setting.password = payload.password;
        } else {
          this.setting.password = null;
        }
        if (payload.use_auto_login) {
          this.setting.autoLogin = true;
        } else {
          this.setting.autoLogin = null;
        }
        if (exchange) {
          this.setting.category = 'exchange';
        } else {
          this.setting.category = 'general';
        }
        this.setting.authenticated = true;
      })
    );
  }

  public logout(): Observable<IResponseMessage> {
    const data = this.createFormData();
    data.append('method', 'logout');
    return this.request(this.url, {
      method: 'post',
      body: data,
    }).pipe(
      tap((result) => {
        if (result.code === OpCode.OK) {
          this.setting.authenticated = false;
        }
      })
    );
  }

  public install(payload: IInstallPayload): Observable<IResponseData<IResponseGameFrame>> {
    if (!this.setting.cookies) {
      return;
    }
    const data = this.createFormData(payload);
    data.append('method', 'install');
    return this.request<IResponseGameFrame>(this.url, {
      method: 'post',
      body: data,
    });
  }

  public run(payload: IRunPayload): Observable<IResponseData<IResponseGameFrame>> {
    if (!this.setting.cookies) {
      return;
    }
    const data = this.createFormData(payload);
    data.append('method', 'run');
    return this.request<IResponseGameFrame>(this.url, {
      method: 'post',
      body: data,
    });
  }

  public updateST(payload: IUpdateSTPayload): Observable<IResponseData<IResponseST>> {
    if (!this.setting.cookies) {
      return;
    }
    const data = this.createFormData(payload);
    data.append('method', 'update_st');
    return this.request<IResponseST>(this.url, {
      method: 'post',
      body: data,
    });
  }

  public regist(payload: IRegistPayload): Observable<IResponseData<null>> {
    if (!this.setting.cookies) {
      return;
    }
    const data = this.createFormData(payload);
    data.append('method', 'regist');
    return this.request<null>(this.url, {
      method: 'post',
      body: data,
    });
  }

  public requestPayment(payload: IPaymentPayload): Observable<IResponseData<IResponsePaymentDetail>> {
    if (!this.setting.cookies) {
      return;
    }
    const data = this.createFormData(payload);
    data.append('method', 'request_payment');
    return this.request<IResponsePaymentDetail>(this.url, {
      method: 'post',
      body: data,
    });
  }

  public paymentCommit(payload: IPaymentPayload): Observable<IResponseData<IResponsePaymentAction>> {
    if (!this.setting.cookies) {
      return;
    }
    const data = this.createFormData(payload);
    data.append('method', 'payment_commit');
    return this.request<IResponsePaymentAction>(this.url, {
      method: 'post',
      body: data,
    });
  }

  public paymentCancel(payload: IPaymentPayload): Observable<IResponseData<IResponsePaymentAction>> {
    if (!this.setting.cookies) {
      return;
    }
    const data = this.createFormData(payload);
    data.append('method', 'payment_cancel');
    return this.request<IResponsePaymentAction>(this.url, {
      method: 'post',
      body: data,
    });
  }
}
