import { Injectable } from '@angular/core';
import { from, map } from 'rxjs';
import {
  CreateRequest, DeleteRequest, ListRequest, UpdateRequest,
} from '../../../proto/system/role/v1/role_pb';
import { RoleServiceClient } from '../../../proto/system/role/v1/RoleServiceClientPb';
import { GrpcConfigService } from '../../services/grpc-config.service';
import { HandleErrorService } from '../../services/handle-error.service';

@Injectable({
  providedIn: 'root',
})
export class RoleService {
  private client:RoleServiceClient;

  constructor(
    config: GrpcConfigService,
    private handleError: HandleErrorService,
  ) {
    this.client = new RoleServiceClient(config.hostname, config.credentials, config.options);
  }

  create(req:CreateRequest) {
    return from(this.client.create(req, null)).pipe(
      map((resp) => resp.toObject()),
    );
  }

  update(req:UpdateRequest) {
    return from(this.client.update(req, null)).pipe(
      map((resp) => resp.toObject()),
    );
  }

  list(req:ListRequest) {
    return from(this.client.list(req, null)).pipe(
      map((resp) => resp.toObject()),
    );
  }

  delete(req:DeleteRequest) {
    return from(this.client.delete(req, null)).pipe(
      map((resp) => resp.toObject()),
    );
  }
}
