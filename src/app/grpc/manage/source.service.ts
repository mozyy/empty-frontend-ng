import { Inject, Injectable } from '@angular/core';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import {
  EMPTY,
  from, map, merge, Observable, of, scan, Subject, Subscriber, switchMap, TeardownLogic,
} from 'rxjs';
import { SourcesClient } from '../../../proto/manage/SourcesServiceClientPb';
import { SourcesItem } from '../../../proto/manage/sources_pb';
import { AppConfig, APP_CONFIG } from '../../app.config';
import { GrpcInterceptorService } from '../../services/grpc-interceptor.service';
import { HandleErrorService } from '../../services/handle-error.service';
import { protobufAssign } from '../../utils/grpc';

export type ParamsList = Partial<SourcesItem.AsObject>;

@Injectable({
  providedIn: 'root',
})
export class SourceService {
  private client: SourcesClient;

  private refreshObservable:Subject<null>;

  constructor(
    interceptor:GrpcInterceptorService,
    @Inject(APP_CONFIG) config: AppConfig,
    private handleError: HandleErrorService,
  ) {
    this.client = new SourcesClient(config.grpcHost, null, { unaryInterceptors: [interceptor] });
    this.refreshObservable = new Subject();
  }

  create(params: ParamsList) {
    const req = new SourcesItem();
    protobufAssign(params, req);
    return from(this.client.create(req, null)).pipe(
      map((resp) => resp.toObject()),
      this.handleError.handleCatchError<SourcesItem.AsObject>(new SourcesItem().toObject(), 'create'),
    );
  }

  update(params: ParamsList) {
    const req = new SourcesItem();
    protobufAssign(params, req);
    return from(this.client.update(req, null)).pipe(
      map((resp) => resp.toObject()),
      this.handleError.handleCatchError<SourcesItem.AsObject>(new SourcesItem().toObject(), 'create'),
    );
  }

  delete(params: ParamsList) {
    const req = new SourcesItem();
    protobufAssign(params, req);
    return from(this.client.delete(req, null)).pipe(
      map((resp) => resp.toObject()),
      this.handleError.handleCatchError<Empty.AsObject>(new Empty().toObject(), 'create'),
    );
  }

  source() {
    return this.sourcesTree({})
      .pipe(
        map((resp) => resp[0]?.childrenList || []),
      );
  }

  refresh() {
    this.refreshObservable.next(null);
  }

  static generateTree(sources:SourcesItem.AsObject[]) {
    sources.forEach((source) => {
      if (source.sourcesItemid) {
        const parent = sources.find((item) => item.id === source.sourcesItemid);
        if (parent) {
          parent.childrenList.push(source);
        }
      }
    });
    return sources.filter((source) => source.id === 7);
  }

  sourcesTree(params: ParamsList) {
    const req = new SourcesItem();
    protobufAssign(params, req);
    return merge(this.refreshObservable, of(null))
      .pipe(
        switchMap(() => this.client.list(req, null)),
        map((resp) => resp.toObject().listList),
        this.handleError.handleCatchError<SourcesItem.AsObject[]>([], 'getSource'),
        map(SourceService.generateTree),
      );
  }
}
