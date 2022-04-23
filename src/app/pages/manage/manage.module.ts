import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ManageRoutingModule } from './manage-routing.module';
import { ManageComponent } from './manage.component';
import { SourceComponent } from './source/source.component';
import { EditDialogComponent } from './source/components/edit-dialog/edit-dialog.component';
import { SourcesComponent } from './sources/sources.component';

@NgModule({
  declarations: [
    ManageComponent,
    SourceComponent,
    EditDialogComponent,
    SourcesComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ManageRoutingModule,
    // MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule,
    MatTreeModule,
    MatIconModule,
    DragDropModule,
  ],
})
export class ManageModule { }
