import { Injectable } from '@angular/core';
import * as ClientOAuth2 from 'client-oauth2';
import {
  from, map, of, tap, throttle, throttleTime,
} from 'rxjs';
import { OAuthToken } from '../../proto/model/oauth_pb';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class OauthService {
  private oAuth2Token?:ClientOAuth2.Token;

  private client = new ClientOAuth2({
    clientId: '1',
    accessTokenUri: 'http://localhost:50052/i/oauth/oauth/token',
    authorizationUri: '/oauth/authorize',
    scopes: ['base'],
  });

  constructor(private storageService:StorageService) {
    const storage = this.storageService.getItem<OAuthToken>('oauthToken');
    if (storage) {
      this.createToken(storage, false);
    }
  }

  createToken(req: OAuthToken, storage:boolean = true) {
    const token = this.client.createToken(
      req.getAccessToken(),
      req.getRefreshToken(),
      req.getTokenType(),
      { },
    );
    token.expiresIn(req.getExpiresSeconds());
    this.oAuth2Token = token;
    console.log(1111, token);
    if (storage) {
      this.setToken(req);
    }
  }

  setToken(req: OAuthToken) {
    this.storageService.setItem('oauthToken', req);
  }

  get accessToken() {
    if (!this.oAuth2Token) {
      return of('');
    }
    if (!this.oAuth2Token.expired()) {
      return of(this.oAuth2Token.accessToken);
    }
    return from(this.oAuth2Token.refresh())
      .pipe(
        throttleTime(5000),
        map((token) => {
          this.oAuth2Token = token;
          const req = new OAuthToken();
          req.setAccessToken(token.accessToken);
          req.setRefreshToken(token.refreshToken);
          req.setTokenType(token.tokenType);
          req.setExpiresSeconds(((token as any).expires - Date.now()) / 1000);
          this.setToken(req);
          return token.accessToken;
        }),
      );
  }
}
