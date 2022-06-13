import { Injectable } from '@angular/core';
import ClientOAuth2 from 'client-oauth2';
import {
  from, map, Observable, of, switchMap, tap, throwError,
} from 'rxjs';
import { LoginResponse } from '../../../proto/user/login/v1/login_pb';
import { OAuthServiceClient } from '../../../proto/user/oauth/v1/OauthServiceClientPb';
import {
  GrantType, TokenGenerateRequest, TokenInfo, TokenRequest, TokenResponse,
} from '../../../proto/user/oauth/v1/oauth_pb';
// eslint-disable-next-line import/no-cycle
import { GrpcConfigService } from '../../services/grpc-config.service';
import { StorageService } from '../../services/storage.service';

@Injectable({
  providedIn: 'root',
})
export class OauthService {
  private client: OAuthServiceClient;

  private tokenInfo :TokenInfo | null;

  private refreshing: Observable<string> | null = null;

  constructor(config:GrpcConfigService, private storageService:StorageService) {
    this.client = new OAuthServiceClient(config.hostname, config.credentials, config.options);
    this.tokenInfo = this.storageService.getItem<TokenInfo>('oauthToken');
  }

  token(req: TokenRequest) {
    return from(this.client.token(req, null));
  }

  refresh() {
    if (!this.tokenInfo) {
      return throwError(() => Error('no tokenInfo'));
    }
    const req = new TokenRequest();
    req.setGrantType(GrantType.REFRESH_TOKEN);
    const tokenGenerateRequest = new TokenGenerateRequest();
    tokenGenerateRequest.setRefresh(this.tokenInfo!.getRefresh());
    req.setTokenGenerateRequest(tokenGenerateRequest);
    return this.token(req);
  }

  getAccessToken() {
    if (!this.tokenInfo) {
      return of('');
    }

    // if (!this.oAuth2Token.expired()) {
    // 从已过期再刷新token, 改为还有5分钟过期就刷新
    if (this.tokenInfo.getAccessExpiresIn() > Date.now() - 1000 * 60 * 5) {
      return of(this.tokenInfo.getAccess());
    }
    if (!this.refreshing) {
      this.refreshing = this.refresh().pipe(
        tap((res) => {
          this.createToken(res.getTokenInfo()!);
          this.refreshing = null;
        }),
        map((res) => res.getTokenInfo()!.getAccess()),
      );
    }
    return this.refreshing;
  }

  createToken(token: TokenInfo) {
    this.tokenInfo = token;
    this.storageService.setItem('oauthToken', token);
  }
}
