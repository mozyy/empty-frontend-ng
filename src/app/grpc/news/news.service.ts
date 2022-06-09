import { Injectable } from '@angular/core';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import {
  from, map,
} from 'rxjs';
import { NewsServiceClient } from '../../../proto/news/news/v1/NewsServiceClientPb';
import { DetailRequest, DetailResponse, News } from '../../../proto/news/news/v1/news_pb';
import { GrpcConfigService } from '../../services/grpc-config.service';
import { HandleErrorService } from '../../services/handle-error.service';
import { protobufAssign } from '../../utils/grpc';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  client: NewsServiceClient;

  constructor(
    config: GrpcConfigService,
    private handleError: HandleErrorService,
  ) {
    this.client = new NewsServiceClient(config.hostname, config.credentials, config.options);
  }

  getNews() {
    return from(this.client.list(new Empty(), null)).pipe(
      map((resp) => resp.toObject().listList),
      this.handleError.handleCatchError<News.AsObject[]>([], 'get news list'),
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
