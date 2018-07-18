import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {AppComponent} from '../app.component';


@Component({
  selector: 'app-dialog-delete',
  templateUrl: './dialog-delete.component.html',
  styleUrls: ['./dialog-delete.component.css']
})
export class DialogDeleteComponent implements OnInit {

  constructor(public thisDialogRef: MatDialogRef<AppComponent> , @Inject(MAT_DIALOG_DATA) public data: string) { }

  ngOnInit() {
  }
OnDeleteConfirm() {
    this.thisDialogRef.close('yes');
  }
OnDeleteCancel() {
    this.thisDialogRef.close('no');
  }
}
