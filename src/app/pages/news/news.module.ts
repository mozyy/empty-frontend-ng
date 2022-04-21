import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './news.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { MaterialModule } from '../../shared/material.module';

@NgModule({
  declarations: [
    NewsComponent,
    ListComponent,
    DetailComponent,
  ],
  imports: [
    CommonModule,
    NewsRoutingModule,
    MaterialModule,
  ],
})
export class NewsModule { }
