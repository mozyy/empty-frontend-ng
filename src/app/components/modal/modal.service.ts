import { Inject, Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalComponent, ModalData } from './modal.component';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor(@Inject(MatDialog) private dialog: MatDialog) {
    console.log(1111111111, 'ModalService');
  }

  open(data: ModalData, config?: MatDialogConfig<ModalData>) {
    return this.dialog.open<ModalComponent, ModalData>(
      ModalComponent,
      {
        data,
        ...config,
      },
    );
  }
}
