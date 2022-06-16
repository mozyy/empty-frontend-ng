import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { EditDialogComponent } from './edit-dialog.component';

@NgModule({
  declarations: [EditDialogComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
  ],
  exports: [
    EditDialogComponent,
  ],
})
export class EditDialogModule { }
