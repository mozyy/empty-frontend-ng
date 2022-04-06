import { Injectable } from '@angular/core';
import { AES, lib } from 'crypto-js';
import { Message } from 'google-protobuf';

interface Deserialize<T> {
  deserializeBinary(bytes: Uint8Array): T;
}

@Injectable({
  providedIn: 'root',
})

export class CryptoService {
  protected key = '2a4ac92b8217a77a';

  setKey(key:string) {
    this.key = key;
  }

  encAES(
    message: string | lib.WordArray,
  ) {
    return AES.encrypt(message, this.key).toString();
  }

  encProtoAES(message: Message) {
    const wordArray = lib.WordArray.create(Array.from(message.serializeBinary()));
    const encryptValue = this.encAES(wordArray);
    return encryptValue;
  }

  dncAES(
    message: string,
  ) {
    return AES.decrypt(message, this.key);
  }

  dncProtoAES<T>(
    str:string,
    decode: Deserialize<T>,
  ) {
    const dnc = this.dncAES(str);
    const arr = new Uint8Array(dnc.words);
    const message = decode.deserializeBinary(arr);
    return message;
  }
}
