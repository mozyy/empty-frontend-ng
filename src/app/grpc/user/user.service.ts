import { Injectable } from '@angular/core';
import {
  from, map, Observable, tap,
} from 'rxjs';
import { environment } from '../../../environments/environment';
import { OAuthToken } from '../../../proto/model/oauth_pb';
import { UserClient } from '../../../proto/user/UserServiceClientPb';
import { LoginRequest } from '../../../proto/user/user_pb';
import { GrpcInterceptorService } from '../../services/grpc-interceptor.service';
import { HandleErrorService } from '../../services/handle-error.service';

@Injectable({
  providedIn: 'root',
})
export class UserService extends UserClient {
  oauthToken:OAuthToken | null = null;

  constructor(private handleError: HandleErrorService, interceptor:GrpcInterceptorService) {
    super(environment.grpcHost, null, { unaryInterceptors: [interceptor] });
  }

  loginHandle(reqObj: LoginRequest.AsObject) {
    const req = new LoginRequest();
    req.setMobile(reqObj.mobile);
    req.setPassword(reqObj.password);
    return from(this.login(req, null)).pipe(
      tap((token) => this.oauthToken = token),
      this.handleError.handleCatchError<OAuthToken | null>(null, 'login'),
    );
  }
}
