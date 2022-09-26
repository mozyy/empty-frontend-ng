import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface ModalData {
  title?: string
  content: string
  showCancel?: boolean
}

@Component({
  selector: 'efn-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  title:string;

  showCancel:boolean;

  content:string;

  constructor(
    private dialogRef: MatDialogRef<ModalComponent, boolean>,
    @Inject(MAT_DIALOG_DATA) {
      title = '提示',
      showCancel = true, content,
    }: ModalData,
  ) {
    this.title = title;
    this.showCancel = showCancel;
    this.content = content;
  }
}
