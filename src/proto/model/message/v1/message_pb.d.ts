import * as jspb from 'google-protobuf'



export class Message extends jspb.Message {
  getState(): STATUS;
  setState(value: STATUS): Message;

  getMessage(): string;
  setMessage(value: string): Message;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Message.AsObject;
  static toObject(includeInstance: boolean, msg: Message): Message.AsObject;
  static serializeBinaryToWriter(message: Message, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Message;
  static deserializeBinaryFromReader(message: Message, reader: jspb.BinaryReader): Message;
}

export namespace Message {
  export type AsObject = {
    state: STATUS,
    message: string,
  }
}

export enum STATUS { 
  STATUS_SUCCESS_UNSPECIFIED = 0,
  STATUS_INFO = 1,
  STATUS_WARNING = 2,
  STATUS_ERROR = 3,
}
