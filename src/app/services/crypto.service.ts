import { Injectable } from '@angular/core';
import {
  AES, enc, lib, mode, pad,
} from 'crypto-js';
import { Message } from 'google-protobuf';
import { decodeStringToUint8Array, encodeByteArray } from 'src/app/utils/google-closure-library';

export interface Deserialize<T extends Message = Message> {
  deserializeBinary(bytes: Uint8Array): T;
}

@Injectable({
  providedIn: 'root',
})

export class CryptoService {
  protected key = enc.Utf8.parse('2a4ac92b8217a77a');

  protected iv = enc.Utf8.parse('44bf0314c4e1b101');

  encAES<T extends Message>(
    message: T | string,
  ) {
    const value = message instanceof Message
      ? encodeByteArray(message.serializeBinary()) : message;
    return AES.encrypt(value, this.key, {
      iv: this.iv,
      mode: mode.CBC,
      padding: pad.Pkcs7,
    }).toString();
  }

  dncAES(message: string):string;
  dncAES<T extends Message>(message: string, decode:Deserialize<T>):T;
  dncAES<T extends Message>(
    message: string,
    decode?: Deserialize<T>,
  ) {
    const dnc = AES.decrypt(message, this.key, { iv: this.iv, mode: mode.CBC, padding: pad.Pkcs7 })
      .toString(enc.Utf8);
    if (!decode) {
      return dnc;
    }
    const res = decode.deserializeBinary(decodeStringToUint8Array(dnc));
    return res;
  }
}
