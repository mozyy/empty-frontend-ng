import { Injectable } from '@angular/core';
import {
  from, map, Observable, tap,
} from 'rxjs';
import { environment } from 'src/environments/environment';
import { OAuthToken } from 'src/proto/model/oauth_pb';
import { UserClient } from 'src/proto/user/UserServiceClientPb';
import { LoginRequest } from 'src/proto/user/user_pb';
import { HandleErrorService } from '../services/handle-error.service';

@Injectable({
  providedIn: 'root',
})
export class UserService extends UserClient {
  oauthToken:OAuthToken | null = null;

  constructor(private handleError: HandleErrorService) {
    super(environment.grpcHost);
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
