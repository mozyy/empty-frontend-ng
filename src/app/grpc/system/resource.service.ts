import { Injectable } from '@angular/core';
import {
  from, map, merge, of, Subject, switchMap,
} from 'rxjs';
import { ResourceServiceClient } from '../../../proto/system/resource/v1/ResourceServiceClientPb';
import {
  CreateRequest, CreateResponse, DeleteRequest, DeleteResponse,
  ListRequest, Resource, UpdateRequest, UpdateResponse,
} from '../../../proto/system/resource/v1/resource_pb';
import { GrpcConfigService } from '../../services/grpc-config.service';
import { HandleErrorService } from '../../services/handle-error.service';

@Injectable({
  providedIn: 'root',
})
export class ResourceService {
  private client: ResourceServiceClient;

  private refreshObservable:Subject<null>;

  constructor(
    config: GrpcConfigService,
    private handleError: HandleErrorService,
  ) {
    this.client = new ResourceServiceClient(config.hostname, config.credentials, config.options);
    this.refreshObservable = new Subject();
  }

  create(req: CreateRequest) {
    return from(this.client.create(req, null)).pipe(
      map((resp) => resp.toObject()),
      this.handleError.handleCatchError<CreateResponse.AsObject>(new CreateResponse().toObject(), 'create'),
    );
  }

  update(req: UpdateRequest) {
    return from(this.client.update(req, null)).pipe(
      map((resp) => resp.toObject()),
      this.handleError.handleCatchError<UpdateResponse.AsObject>(new UpdateResponse().toObject(), 'create'),
    );
  }

  delete(req: DeleteRequest) {
    return from(this.client.delete(req, null)).pipe(
      map((resp) => resp.toObject()),
      this.handleError.handleCatchError<DeleteResponse.AsObject>(new DeleteResponse().toObject(), 'create'),
    );
  }

  source() {
    return this.sourcesTree(new ListRequest())
      .pipe(
        map((resp) => resp[0]?.childrenList || []),
      );
  }

  refresh() {
    this.refreshObservable.next(null);
  }

  static generateTree(sources:Resource.AsObject[]) {
    sources.forEach((source) => {
      if (source.resourceItemid) {
        const parent = sources.find((item) => item.id === source.resourceItemid);
        if (parent) {
          parent.childrenList.push(source);
        }
      }
    });
    return sources.filter((source) => source.id === 7);
  }

  sourcesTree(req: ListRequest) {
    return merge(this.refreshObservable, of(null))
      .pipe(
        switchMap(() => this.client.list(req, null)),
        map((resp) => resp.toObject().resourcesList),
        this.handleError.handleCatchError<Resource.AsObject[]>([], 'getSource'),
        map(ResourceService.generateTree),
      );
  }
}
