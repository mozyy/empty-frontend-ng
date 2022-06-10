import { Injectable } from '@angular/core';
import ClientOAuth2 from 'client-oauth2';
import { TokenInfo } from '../../proto/user/oauth/v1/oauth_pb';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class OauthService {
  private oAuth2Token?:ClientOAuth2.Token;

  private refreshing: Promise<string> | null = null;

  private client = new ClientOAuth2({
    clientId: '1',
    accessTokenUri: 'http://localhost:50052/i/oauth/oauth/token',
    authorizationUri: '/oauth/authorize',
    scopes: ['base'],
  });

  constructor(private storageService:StorageService) {
    const storage = this.storageService.getItem<TokenInfo>('oauthToken');
    if (storage) {
      this.convertToken(storage);
    }
  }

  private convertToken(req: TokenInfo) {
    const token = this.client.createToken(
      req.getAccess(),
      req.getRefresh(),
      req.getTokenType(),
      { },
    );
    token.expiresIn(req.getAccessExpiresIn());
    this.oAuth2Token = token;
    return token;
  }

  createToken(req: TokenInfo) {
    this.convertToken(req);
    this.setToken(req);
  }

  private setToken(req: TokenInfo) {
    this.storageService.setItem('oauthToken', req);
  }

  private async refreshToken() {
    if (!this.oAuth2Token) {
      return Promise.reject(Error('no oAuth2Token'));
    }
    const token = await this.oAuth2Token.refresh();
    this.oAuth2Token = token;
    const req = new TokenInfo();
    req.setAccess(token.accessToken);
    req.setRefresh(token.refreshToken);
    req.setTokenType(token.tokenType);
    req.setAccessExpiresIn(((token as any).expires - Date.now()) / 1000);
    this.setToken(req);
    return token.accessToken;
  }

  getAccessToken() {
    if (!this.oAuth2Token) {
      return Promise.resolve('');
    }

    // if (!this.oAuth2Token.expired()) {
    // 从已过期再刷新token, 改为还有5分钟过期就刷新
    if ((this.oAuth2Token as any).expires.getTime() > Date.now() - 1000 * 60 * 5) {
      return Promise.resolve(this.oAuth2Token.accessToken);
    }
    if (!this.refreshing) {
      this.refreshing = this.refreshToken().finally(() => {
        this.refreshing = null;
      });
    }
    return this.refreshing;
  }
}
