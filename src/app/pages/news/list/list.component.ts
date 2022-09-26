import { isPlatformBrowser } from '@angular/common';
import {
  APP_ID, Component, Inject, OnInit, PLATFORM_ID,
} from '@angular/core';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { News } from '../../../../proto/news/news/v1/news_pb';
import { NewsService } from '../../../grpc/news/news.service';

const STATE_KEY_ITEMS = makeStateKey('items');
@Component({
  selector: 'efn-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  newsList?:News.AsObject[];

  constructor(
    private state: TransferState,
    private news: NewsService,
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string,
  ) { }

  ngOnInit(): void {
    this.getNews();
  }

  private getNews() {
    const platform = isPlatformBrowser(this.platformId)
      ? 'in the browser' : 'on the server';
    this.newsList = this.state.get(STATE_KEY_ITEMS, <any> []);
    console.log(`getNews : Running ${platform} with appId=${this.appId}, ${this.newsList?.length}`);
    if (!this.newsList?.length) {
      this.news.getNews().subscribe((resp) => {
        console.log(`getNews : Running ${platform} with appId=${this.appId}`);
        this.newsList = resp;
        this.state.set(STATE_KEY_ITEMS, <any>resp);
      });
    }
  }
}
