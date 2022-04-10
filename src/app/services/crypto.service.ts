import { Injectable } from '@angular/core';
import { AES, lib } from 'crypto-js';
import { Message } from 'google-protobuf';

export interface Deserialize<T extends Message = Message> {
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

  encAES<T extends Message>(
    message: T | string,
  ) {
    console.log('enc', message, (message as any).serializeBinary(), Array.from((message as any).serializeBinary()));
    const value = message instanceof Message
      ? lib.WordArray.create(Array.from(message.serializeBinary())) : message;
    return AES.encrypt(value, this.key).toString();
  }

  dncAES(message: string):string;
  dncAES<T extends Message>(message: string, decode:Deserialize<T>):T;
  dncAES<T extends Message>(
    message: string,
    decode?: Deserialize<T>,
  ) {
    const dnc = AES.decrypt(message, this.key);
    if (!decode) {
      return dnc.toString();
    }
    const arr = new Uint8Array(dnc.words);
    const res = decode.deserializeBinary(arr);
    console.log('dnc', res, arr, dnc.words);
    return res;
  }
}
