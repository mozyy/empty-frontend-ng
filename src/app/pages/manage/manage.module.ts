import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageComponent } from './manage.component';
import { SourceComponent } from './source/source.component';

@NgModule({
  declarations: [ManageComponent, SourceComponent],
  imports: [
    CommonModule,
  ],
})
export class ManageModule { }
