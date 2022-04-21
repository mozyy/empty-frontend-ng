import { Inject, Injectable } from '@angular/core';
import {
  from, map, tap,
} from 'rxjs';
import { OAuthToken } from '../../../proto/model/oauth_pb';
import { UserClient } from '../../../proto/user/UserServiceClientPb';
import { LoginRequest } from '../../../proto/user/user_pb';
import { AppConfig, APP_CONFIG } from '../../app.config';
import { GrpcInterceptorService } from '../../services/grpc-interceptor.service';
import { HandleErrorService } from '../../services/handle-error.service';
import { OauthService } from '../../services/oauth.service';
import { protobufAssign } from '../../utils/grpc';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private client:UserClient;

  constructor(
    interceptor:GrpcInterceptorService,
    @Inject(APP_CONFIG) config: AppConfig,
    private handleError: HandleErrorService,
    private oauthService: OauthService,
  ) {
    this.client = new UserClient(config.grpcHost, null, { unaryInterceptors: [interceptor] });
  }

  login(params: LoginRequest.AsObject) {
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
