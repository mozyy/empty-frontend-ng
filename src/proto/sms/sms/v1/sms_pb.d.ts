import * as jspb from 'google-protobuf'

import * as gorm_options_gorm_pb from '../../../gorm/options/gorm_pb';


export class SendRequest extends jspb.Message {
  getMobile(): string;
  setMobile(value: string): SendRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SendRequest): SendRequest.AsObject;
  static serializeBinaryToWriter(message: SendRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendRequest;
  static deserializeBinaryFromReader(message: SendRequest, reader: jspb.BinaryReader): SendRequest;
}

export namespace SendRequest {
  export type AsObject = {
    mobile: string,
  }
}

export class SendResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SendResponse): SendResponse.AsObject;
  static serializeBinaryToWriter(message: SendResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendResponse;
  static deserializeBinaryFromReader(message: SendResponse, reader: jspb.BinaryReader): SendResponse;
}

export namespace SendResponse {
  export type AsObject = {
  }
}

export class ValidationRequest extends jspb.Message {
  getMobile(): string;
  setMobile(value: string): ValidationRequest;

  getCode(): string;
  setCode(value: string): ValidationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ValidationRequest): ValidationRequest.AsObject;
  static serializeBinaryToWriter(message: ValidationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidationRequest;
  static deserializeBinaryFromReader(message: ValidationRequest, reader: jspb.BinaryReader): ValidationRequest;
}

export namespace ValidationRequest {
  export type AsObject = {
    mobile: string,
    code: string,
  }
}

export class ValidationResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ValidationResponse): ValidationResponse.AsObject;
  static serializeBinaryToWriter(message: ValidationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidationResponse;
  static deserializeBinaryFromReader(message: ValidationResponse, reader: jspb.BinaryReader): ValidationResponse;
}

export namespace ValidationResponse {
  export type AsObject = {
  }
}

