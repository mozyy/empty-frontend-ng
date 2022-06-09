import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { enc } from 'crypto-js';
import { Message } from 'google-protobuf';
import { isPlatformBrowser } from '@angular/common';
import { CryptoService } from './crypto.service';
import { News } from '../../proto/news/news/v1/news_pb';
import { OAuthToken } from '../../proto/user/oauth/v1/oauth_pb';

@Injectable({
  providedIn: 'root',
})
export class StorageService extends CryptoService {
  override key = enc.Utf8.parse('2a4ac92b8217a77a');

  private isBrowser: boolean;

  private map = {
    userInfo: {
      storage: 'localStorage' as const,
      storageKey: this.encAES('userInfo'),
      decode: News,
    },
    oauthToken: {
      storage: 'localStorage' as const,
      storageKey: this.encAES('oauthToken'),
      decode: OAuthToken,
    },
  };

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {
    super();
    this.isBrowser = isPlatformBrowser(platformId);
  }

  setItem<T extends keyof typeof this.map>(key: T, value: string | Message) {
    if (!this.isBrowser) {
      return;
    }
    const item = this.map[key];
    const valueEnc = this.encAES(value);
    window[item.storage].setItem(item.storageKey, valueEnc);
  }

  getItem<M extends Message | string = string>(key:keyof typeof this.map):M | null {
    if (!this.isBrowser) {
      return null;
    }
    const item = this.map[key];
    const valueEnc = window[item.storage].getItem(item.storageKey);
    if (!valueEnc) {
      return null;
    }
    const { decode } = item as any;
    if (decode) {
      return this.dncAES(valueEnc, decode) as M;
    }
    return this.dncAES(valueEnc).toString() as M;
  }
}
