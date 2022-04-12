import { Injectable } from '@angular/core';
import { enc } from 'crypto-js';
import { Message } from 'google-protobuf';
import { OAuthToken } from '../../proto/model/oauth_pb';
import { NewsItem } from '../../proto/news/news_pb';
import { CryptoService } from './crypto.service';

@Injectable({
  providedIn: 'root',
})
export class StorageService extends CryptoService {
  override key = enc.Utf8.parse('2a4ac92b8217a77a');

  private map = {
    userInfo: {
      storage: localStorage,
      storageKey: this.encAES('userInfo'),
      decode: NewsItem,
    },
    oauthToken: {
      storage: localStorage,
      storageKey: this.encAES('oauthToken'),
      decode: OAuthToken,
    },
  };

  setItem<T extends keyof typeof this.map>(key: T, value: string | Message) {
    const item = this.map[key];
    const valueEnc = this.encAES(value);
    item.storage.setItem(item.storageKey, valueEnc);
  }

  getItem<M extends Message | string = string>(key:keyof typeof this.map):M | null {
    const item = this.map[key];
    const valueEnc = item.storage.getItem(item.storageKey);
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
