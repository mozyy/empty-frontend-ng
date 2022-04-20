import { Inject, Injectable } from '@angular/core';
import { lib } from 'crypto-js';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import {
  catchError, from, map, Observable, of, tap,
} from 'rxjs';
import { environment } from '../../../environments/environment';
import { NewsClient } from '../../../proto/news/NewsServiceClientPb';
import { DetailRequest, DetailResponse, NewsItem } from '../../../proto/news/news_pb';
import { AppConfig, APP_CONFIG } from '../../app.config';
import { CryptoService } from '../../services/crypto.service';
import { GrpcInterceptorService } from '../../services/grpc-interceptor.service';
import { HandleErrorService } from '../../services/handle-error.service';
import { protobufAssign } from '../../utils/grpc';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  client: NewsClient;

  constructor(
    interceptor:GrpcInterceptorService,
    @Inject(APP_CONFIG) config: AppConfig,
    private handleError: HandleErrorService,
  ) {
    this.client = new NewsClient(config.grpcHost, null, { unaryInterceptors: [interceptor] });
  }

  getNews() {
    return from(this.client.list(new Empty(), null)).pipe(
      map((resp) => resp.toObject().listList),
      this.handleError.handleCatchError<NewsItem.AsObject[]>([], 'get news list'),
    );
  }

  getDetail(link:string) {
    const req = new DetailRequest();
    protobufAssign({ link }, req);
    return from(this.client.detail(req, null)).pipe(
      map((resp) => resp.toObject()),
      this.handleError.handleCatchError<DetailResponse.AsObject>(new DetailResponse().toObject(), 'get news detail'),
    );
  }
}
