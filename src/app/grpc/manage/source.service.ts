import { Inject, Injectable } from '@angular/core';
import { from, map } from 'rxjs';
import { SourcesClient } from '../../../proto/manage/SourcesServiceClientPb';
import { SourcesItem } from '../../../proto/manage/sources_pb';
import { AppConfig, APP_CONFIG } from '../../app.config';
import { GrpcInterceptorService } from '../../services/grpc-interceptor.service';
import { HandleErrorService } from '../../services/handle-error.service';
import { protobufAssign } from '../../utils/grpc';

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

  getSource(params: Partial<SourcesItem.AsObject>) {
    const req = new SourcesItem();
    protobufAssign(params, req);
    return from(this.client.list(req, null)).pipe(
      map((resp) => resp.toObject().listList),
      this.handleError.handleCatchError<SourcesItem.AsObject[]>([], 'getSource'),
    );
  }
}
