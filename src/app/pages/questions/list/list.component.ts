import { APP_BASE_HREF, isPlatformBrowser } from '@angular/common';
import { APP_ID, Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { CrateService, GetResp, Question } from '../../../openapi/questions';

const STATE_KEY_ITEMS = makeStateKey<GetResp[]>('items');

@Component({
  selector: 'efn-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  newsList:GetResp[] = []
  constructor(
    private crateService:CrateService,
    private state: TransferState,
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string,
  ) { }

  ngOnInit(): void {
    this.getNews();
  }

  private getNews() {
    const platform = isPlatformBrowser(this.platformId)
      ? 'in the browser' : 'on the server';
    this.newsList = this.state.get(STATE_KEY_ITEMS, []);
    console.log(`getNews : Running ${platform} with appId=${this.appId}, ${this.newsList?.length}`,this.newsList);
    if (!this.newsList?.length) {
      this.crateService.get().subscribe(resp => {
        console.log(`getNews : Running ${platform} with appId=${this.appId}, resp.length=${resp.length}`);
        this.newsList = resp;
        this.state.set(STATE_KEY_ITEMS, resp);
      })
    }
  }

}
