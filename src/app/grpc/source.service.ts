import { Injectable } from '@angular/core';
import { from, map, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { SourcesClient } from '../../proto/manage/SourcesServiceClientPb';
import { SourcesItem } from '../../proto/manage/sources_pb';
import { GrpcInterceptorService } from '../services/grpc-interceptor.service';
import { HandleErrorService } from '../services/handle-error.service';

@Injectable({
  providedIn: 'root',
})
export class SourceService extends SourcesClient {
  constructor(private handleError: HandleErrorService, interceptor: GrpcInterceptorService) {
    super(environment.grpcHost, null, { unaryInterceptors: [interceptor] });
  }

  getSource(source: SourcesItem):Observable<SourcesItem[]> {
    return from(this.list(source, null)).pipe(
      map((resp) => resp.getListList()),
      this.handleError.handleCatchError<SourcesItem[]>([], 'getSource'),
    );
  }
}
