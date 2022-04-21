import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { ManageRoutingModule } from './manage-routing.module';
import { ManageComponent } from './manage.component';
import { SourceComponent } from './source/source.component';

@NgModule({
  declarations: [
    ManageComponent,
    SourceComponent,
  ],
  imports: [
    CommonModule,
    ManageRoutingModule,
    MatTableModule,
    MatButtonModule,
  ],
})
export class ManageModule { }
