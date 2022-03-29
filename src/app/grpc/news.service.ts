import { Injectable } from '@angular/core';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import {
  catchError, from, map, Observable, of, tap,
} from 'rxjs';
import { NewsClient } from 'src/proto/news/NewsServiceClientPb';
import { DetailRequest, DetailResponse, NewsItem } from 'src/proto/news/news_pb';
import { HandleErrorService } from './handle-error.service';

@Injectable({
  providedIn: 'root',
})
export class NewsService extends NewsClient {
  constructor(private handleError: HandleErrorService) {
    super('http://localhost:50052/i/api');
  }

  getNews() {
    return from(this.list(new Empty(), null)).pipe(
      map((resp) => resp.getListList()),
      tap((resp) => console.log(resp)),
      this.handleError.handleCatchError<NewsItem[]>([]),
    );
  }

  getDetail(link:string) {
    const req = new DetailRequest();
    req.setUrl(link);
    return from(this.detail(req, null)).pipe(
      this.handleError.handleCatchError(new DetailResponse()),
    );
  }
}
