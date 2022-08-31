import { DmmService } from './../../../services/dmm.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IInstallPayload, IRunPayload, OpCode } from 'src/app/types/dmm';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-install',
  templateUrl: './install.component.html',
  styleUrls: ['./install.component.sass', '../dialog.sass'],
})
export class InstallComponent implements OnInit {
  public notification: boolean = true;
  public myapp: boolean = true;
  public requesting: boolean = false;

  constructor(
    private dmm: DmmService,
    private dialogRef: MatDialogRef<InstallComponent>,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: IRunPayload,
  ) { }

  public async install() {
    this.requesting = true;
    const payload: IInstallPayload = {
      app_name: this.data.app_name,
      app_base: this.data.app_base,
      notification: this.notification ? 1 : 0,
      myapp: this.myapp ? 1 : 0,
    };
    const response = await firstValueFrom(this.dmm.install(payload));
    this.requesting = false;
    this.dialogRef.close(response);
  }

  back(): void {
    this.dialogRef.close();
    this.router.navigate(['/game-list']);
  }

  ngOnInit() {
  }

}
