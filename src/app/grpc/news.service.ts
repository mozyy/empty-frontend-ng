import { Injectable } from '@angular/core';
import { lib } from 'crypto-js';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import {
  catchError, from, map, Observable, of, tap,
} from 'rxjs';
import { environment } from 'src/environments/environment';
import { NewsClient } from 'src/proto/news/NewsServiceClientPb';
import { DetailRequest, DetailResponse, NewsItem } from 'src/proto/news/news_pb';
import { CryptoService } from '../services/crypto.service';
import { HandleErrorService } from '../services/handle-error.service';

@Injectable({
  providedIn: 'root',
})
export class NewsService extends NewsClient {
  constructor(private handleError: HandleErrorService, private crypto:CryptoService) {
    super(environment.grpcHost);
  }

  getNews() {
    return from(this.list(new Empty(), null)).pipe(
      map((resp) => resp.getListList()),
      tap((resp) => console.log(resp)),
      this.handleError.handleCatchError<NewsItem[]>([], 'get news list'),
    );
  }

  getDetail(link:string) {
    const req = new DetailRequest();
    req.setUrl(link);
    return from(this.detail(req, null)).pipe(
      this.handleError.handleCatchError(new DetailResponse(), 'get news detail'),
    );
  }
}
