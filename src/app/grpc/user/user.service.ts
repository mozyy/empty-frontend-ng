import { Inject, Injectable } from '@angular/core';
import {
  from, map, Observable, tap,
} from 'rxjs';
import { environment } from '../../../environments/environment';
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
    private handleError: HandleErrorService,
    interceptor:GrpcInterceptorService,
    private oauthService: OauthService,
    @Inject(APP_CONFIG) config: AppConfig,
  ) {
    this.client = new UserClient(config.grpcHost, null, { unaryInterceptors: [interceptor] });
  }

  login(reqObj: LoginRequest.AsObject) {
    const req = new LoginRequest();
    protobufAssign(reqObj, req);
    return from(this.client.login(req, null)).pipe(
      tap((token) => {
        this.oauthService.createToken(token);
      }),
      this.handleError.handleCatchError<OAuthToken | null>(null, 'login'),
    );
  }
}
