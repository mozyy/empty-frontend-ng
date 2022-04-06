import { Injectable } from '@angular/core';
import { CryptoService } from './crypto.service';

type StroageName = 'userInfo' | 'oauthToken';

type Items = {
  [key in StroageName]: {
    storage: Storage;
    storageKey: string;
  };
};

@Injectable({
  providedIn: 'root',
})
export class StorageService extends CryptoService {
  override key = '2a4ac92b8217a77b';

  private map: Items = {
    userInfo: {
      storage: localStorage,
      storageKey: this.encAES('userInfo'),
    },
    oauthToken: {
      storage: localStorage,
      storageKey: this.encAES('oauthToken'),
    },
  };

  setItem(key: StroageName, value:string) {
    const item = this.map[key];
    const valueEnc = this.encAES(value);
    item.storage.setItem(item.storageKey, valueEnc);
  }

  getItem(key:StroageName):string | null {
    const item = this.map[key];
    const valueEnc = item.storage.getItem(item.storageKey);
    const value = valueEnc ? this.dncAES(valueEnc).toString() : null;
    return value;
  }
}
