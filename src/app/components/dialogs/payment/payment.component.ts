import { Component, OnInit, Inject } from '@angular/core';
import { IResponsePaymentDetail, IPaymentPayload, IResponseData, IResponsePaymentAction, IResponseError } from 'src/app/types/dmm';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DmmService } from 'src/app/services/dmm.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.sass', '../dialog.sass'],
})
export class PaymentComponent implements OnInit {
  public detail: IResponsePaymentDetail;
  public paymentPayload: IPaymentPayload;
  public requesting: boolean = false;
  constructor(
    private dmm: DmmService,
    private dialogRef: MatDialogRef<PaymentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: [IResponsePaymentDetail, IPaymentPayload],
  ) {
    this.detail = this.data[0];
    this.paymentPayload = this.data[1];
  }

  ngOnInit() {
    this.detail = this.data[0];
    this.paymentPayload = this.data[1];
  }

  public async commit() {
    this.requesting = true;
    const result: IResponseData<IResponsePaymentAction> | IResponseError | null = await firstValueFrom(this.dmm.paymentCommit(this.paymentPayload)).catch(() => {
      this.requesting = false;
      return null;
    });
    if (result !== null) {
      this.dialogRef.close(result);
    }
  }

  public async cancel() {
    this.requesting = true;
    const result: IResponseData<IResponsePaymentAction> | IResponseError | null = await firstValueFrom(this.dmm.paymentCancel(this.paymentPayload)).catch(() => {
      this.requesting = false;
      return null;
    });
    if (result !== null) {
      this.dialogRef.close(result);
    }
  }

}
