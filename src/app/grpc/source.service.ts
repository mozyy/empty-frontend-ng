import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SourcesClient } from 'src/proto/manage/SourcesServiceClientPb';
import { SourcesItem } from 'src/proto/manage/sources_pb';

@Injectable({
  providedIn: 'root',
})
export class SourceService extends SourcesClient {
  constructor() {
    super('https:yyuck.com/i/api');
  }

  getSource(source: SourcesItem):Observable<SourcesItem[]> {
    return new Observable((subscribe) => {
      this.list(source, null).then((list) => {
        subscribe.next(list.getListList());
      });
    });
  }
}
