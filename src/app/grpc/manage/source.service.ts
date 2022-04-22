import { Inject, Injectable } from '@angular/core';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import { from, map } from 'rxjs';
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

  constructor(
    interceptor:GrpcInterceptorService,
    @Inject(APP_CONFIG) config: AppConfig,
    private handleError: HandleErrorService,
  ) {
    this.client = new SourcesClient(config.grpcHost, null, { unaryInterceptors: [interceptor] });
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

  list(params: ParamsList) {
    const req = new SourcesItem();
    protobufAssign(params, req);
    return from(this.client.list(req, null)).pipe(
      map((resp) => resp.toObject().listList),
      this.handleError.handleCatchError<SourcesItem.AsObject[]>([], 'getSource'),
    );
  }
}
