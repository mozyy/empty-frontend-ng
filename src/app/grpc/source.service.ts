import { Injectable } from '@angular/core';
import { from, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SourcesClient } from 'src/proto/manage/SourcesServiceClientPb';
import { SourcesItem } from 'src/proto/manage/sources_pb';
import { HandleErrorService } from './handle-error.service';

@Injectable({
  providedIn: 'root',
})
export class SourceService extends SourcesClient {
  constructor(private handleError: HandleErrorService) {
    super(environment.grpcHost);
  }

  getSource(source: SourcesItem):Observable<SourcesItem[]> {
    return from(this.list(source, null)).pipe(
      map((resp) => resp.getListList()),
      this.handleError.handleCatchError<SourcesItem[]>([], 'getSource'),
    );
  }
}
