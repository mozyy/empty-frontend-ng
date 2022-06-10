import { Injectable } from '@angular/core';
import {
  from, map, tap,
} from 'rxjs';
import { UserServiceClient } from '../../../proto/user/login/v1/LoginServiceClientPb';
import { LoginRequest, LoginResponse } from '../../../proto/user/login/v1/login_pb';
import { GrpcConfigService } from '../../services/grpc-config.service';
import { HandleErrorService } from '../../services/handle-error.service';
import { OauthService } from '../../services/oauth.service';

export type ParamsLogin = LoginRequest.AsObject;

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private client:UserServiceClient;

  constructor(
    config:GrpcConfigService,
    private handleError: HandleErrorService,
    private oauthService: OauthService,
  ) {
    this.client = new UserServiceClient(config.hostname, config.credentials, config.options);
  }

  login(req: LoginRequest) {
    return from(this.client.login(req, null)).pipe(
      tap((resp) => {
        this.oauthService.createToken(resp.getOAuthToken()!);
      }),
      map((resp) => resp.toObject()),
      this.handleError.handleCatchError<LoginResponse.AsObject>(new LoginResponse().toObject(), 'login'),
    );
  }
}
