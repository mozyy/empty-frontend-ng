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
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { LayoutModule } from '@angular/cdk/layout';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { SystemRoutingModule } from './system-routing.module';
import { SystemComponent } from './system.component';
import { ResourceComponent } from './resource/resource.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DocsComponent } from './docs/docs.component';
import { RoleComponent } from './role/role.component';
import { EditDialogModule } from '../../components/edit-dialog/edit-dialog.module';
import { ResourceEditComponent } from './resource/components/resource-edit/resource-edit.component';
import { RoleEditComponent } from './role/components/role-edit/role-edit.component';
import { EditDialogComponent } from '../../components/edit-dialog/edit-dialog.component';

@NgModule({
  declarations: [
    SystemComponent,
    ResourceComponent,
    DashboardComponent,
    DocsComponent,
    RoleComponent,
    ResourceEditComponent,
    RoleEditComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SystemRoutingModule,
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
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatPaginatorModule,
    LayoutModule,
    EditDialogModule,
  ],
})
export class SystemModule { }
