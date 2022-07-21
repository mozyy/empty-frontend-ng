import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './news.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [
    NewsComponent,
    ListComponent,
    DetailComponent,
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatListModule,
    MatCardModule,
    NewsRoutingModule,
  ],
})
export class NewsModule { }
