import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionsRoutingModule } from './questions-routing.module';
import { QuestionsComponent } from './questions.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [
    QuestionsComponent,
    ListComponent,
    EditComponent,
  ],
  imports: [
    CommonModule,
    QuestionsRoutingModule,
  ],
})
export class QuestionsModule { }
