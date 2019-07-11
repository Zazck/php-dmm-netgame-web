import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-st',
  templateUrl: './update-st.component.html',
  styleUrls: ['./update-st.component.sass', '../dialog.sass'],
})
export class UpdateStComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<UpdateStComponent>,
    private router: Router,
  ) { }
  back(): void {
    this.dialogRef.close();
  }
  refresh(): void {
    this.dialogRef.close(true);
  }
  ngOnInit() {
  }

}
