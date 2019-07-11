import { Component, OnInit, Inject } from '@angular/core';
import { IResponsePaymentDetail, IRequestPaymentPayload, IPaymentCancelPayload } from 'src/app/types/dmm';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DmmService } from 'src/app/services/dmm.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.sass', '../dialog.sass'],
})
export class PaymentComponent implements OnInit {

  public detail: IResponsePaymentDetail;
  public paymentPayload: IRequestPaymentPayload | IPaymentCancelPayload;
  public requesting: boolean = false;
  constructor(
    private dmm: DmmService,
    private dialogRef: MatDialogRef<PaymentComponent>,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: [IResponsePaymentDetail, IRequestPaymentPayload | IPaymentCancelPayload],
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
    const result = await this.dmm.paymentCommit(this.paymentPayload);
    this.requesting = false;
    this.dialogRef.close(result);
  }

  public async cancel() {
    this.requesting = true;
    const result = await this.dmm.paymentCancel(this.paymentPayload);
    this.requesting = false;
    this.dialogRef.close(result);
  }

}
