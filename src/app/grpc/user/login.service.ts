import { Injectable } from '@angular/core';
import {
  from, map, tap,
} from 'rxjs';
import { LoginServiceClient } from '../../../proto/user/login/v1/LoginServiceClientPb';
import { LoginRequest, LoginResponse } from '../../../proto/user/login/v1/login_pb';
import { GrpcConfigService } from '../../services/grpc-config.service';
import { HandleErrorService } from '../../services/handle-error.service';
import { OauthService } from './oauth.service';

export type ParamsLogin = LoginRequest.AsObject;

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private client:LoginServiceClient;

  constructor(
    config:GrpcConfigService,
    private handleError: HandleErrorService,
    private oauthService: OauthService,
  ) {
    this.client = new LoginServiceClient(config.hostname, config.credentials, config.options);
  }

  login(req: LoginRequest) {
    return from(this.client.login(req, null)).pipe(
      this.handleError.handleCatchError<LoginResponse>(new LoginResponse(), 'login'),
      tap((resp) => {
        this.oauthService.createToken(resp.getTokenInfo()!);
      }),
      map((resp) => resp.toObject()),
    );
  }
}
