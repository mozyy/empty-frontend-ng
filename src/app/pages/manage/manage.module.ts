import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageRoutingModule } from './manage-routing.module';
import { ManageComponent } from './manage.component';
import { MaterialModule } from '../../shared/material.module';
import { SourceComponent } from './source/source.component';

@NgModule({
  declarations: [
    ManageComponent,
    SourceComponent,
  ],
  imports: [
    CommonModule,
    ManageRoutingModule,
    MaterialModule,
  ],
})
export class ManageModule { }
