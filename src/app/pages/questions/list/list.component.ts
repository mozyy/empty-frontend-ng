import { APP_BASE_HREF, isPlatformBrowser } from '@angular/common';
import {
  APP_ID, Component, Inject, OnInit, PLATFORM_ID,
} from '@angular/core';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { QuestionsService, QuestionResp } from '../../../openapi/questions';

const STATE_KEY_ITEMS = makeStateKey<QuestionResp[]>('items');

@Component({
  selector: 'efn-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  questions:QuestionResp[] = [];

  constructor(
    private questionsService:QuestionsService,
    private state: TransferState,
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string,
  ) { }

  ngOnInit(): void {
    this.getQuestions();
  }

  private getQuestions() {
    const platform = isPlatformBrowser(this.platformId)
      ? 'in the browser' : 'on the server';
    this.questions = this.state.get(STATE_KEY_ITEMS, []);
    console.log(`getNews : Running ${platform} with appId=${this.appId}, ${this.questions?.length}`, this.questions);
    if (!this.questions?.length) {
      this.questionsService.indexGet().subscribe((resp) => {
        console.log(`getNews : Running ${platform} with appId=${this.appId}, resp.length=${resp.length}`);
        this.questions = resp;
        this.state.set(STATE_KEY_ITEMS, resp);
      });
    }
  }
}
