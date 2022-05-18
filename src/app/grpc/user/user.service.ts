import { Injectable } from '@angular/core';
import {
  from, map, tap,
} from 'rxjs';
import { OAuthToken } from '../../../proto/user/oauth_pb';
import { UserClient } from '../../../proto/user/UserServiceClientPb';
import { LoginRequest } from '../../../proto/user/user_pb';
import { GrpcConfigService } from '../../services/grpc-config.service';
import { HandleErrorService } from '../../services/handle-error.service';
import { OauthService } from '../../services/oauth.service';
import { protobufAssign } from '../../utils/grpc';

export type ParamsLogin = LoginRequest.AsObject;

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private client:UserClient;

  constructor(
    config:GrpcConfigService,
    private handleError: HandleErrorService,
    private oauthService: OauthService,
  ) {
    this.client = new UserClient(config.hostname, config.credentials, config.options);
  }

  login(params: ParamsLogin) {
    const req = new LoginRequest();
    protobufAssign(params, req);
    return from(this.client.login(req, null)).pipe(
      tap((resp) => {
        this.oauthService.createToken(resp);
      }),
      map((resp) => resp.toObject()),
      this.handleError.handleCatchError<OAuthToken.AsObject>(new OAuthToken().toObject(), 'login'),
    );
  }
}
