import { Injectable } from '@angular/core';
import * as ClientOAuth2 from 'client-oauth2';
import { OAuthToken } from '../../proto/model/oauth_pb';
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
    const storage = this.storageService.getItem<OAuthToken>('oauthToken');
    if (storage) {
      this.convertToken(storage);
    }
  }

  private convertToken(req: OAuthToken) {
    const token = this.client.createToken(
      req.getAccessToken(),
      req.getRefreshToken(),
      req.getTokenType(),
      { },
    );
    token.expiresIn(req.getExpiresSeconds());
    this.oAuth2Token = token;
    return token;
  }

  createToken(req: OAuthToken) {
    this.convertToken(req);
    this.setToken(req);
  }

  private setToken(req: OAuthToken) {
    this.storageService.setItem('oauthToken', req);
  }

  private async refreshToken() {
    if (!this.oAuth2Token) {
      return Promise.reject(Error('no oAuth2Token'));
    }
    const token = await this.oAuth2Token.refresh();
    this.oAuth2Token = token;
    const req = new OAuthToken();
    req.setAccessToken(token.accessToken);
    req.setRefreshToken(token.refreshToken);
    req.setTokenType(token.tokenType);
    req.setExpiresSeconds(((token as any).expires - Date.now()) / 1000);
    this.setToken(req);
    return token.accessToken;
  }

  getAccessToken() {
    if (!this.oAuth2Token) {
      return Promise.resolve('');
    }
    if (!this.oAuth2Token.expired()) {
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
