import * as jspb from 'google-protobuf'



export class RefreshRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RefreshRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RefreshRequest): RefreshRequest.AsObject;
  static serializeBinaryToWriter(message: RefreshRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RefreshRequest;
  static deserializeBinaryFromReader(message: RefreshRequest, reader: jspb.BinaryReader): RefreshRequest;
}

export namespace RefreshRequest {
  export type AsObject = {
  }
}

export class RefreshResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RefreshResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RefreshResponse): RefreshResponse.AsObject;
  static serializeBinaryToWriter(message: RefreshResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RefreshResponse;
  static deserializeBinaryFromReader(message: RefreshResponse, reader: jspb.BinaryReader): RefreshResponse;
}

export namespace RefreshResponse {
  export type AsObject = {
  }
}

export class ValidRequest extends jspb.Message {
  getScopesList(): Array<string>;
  setScopesList(value: Array<string>): ValidRequest;
  clearScopesList(): ValidRequest;
  addScopes(value: string, index?: number): ValidRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ValidRequest): ValidRequest.AsObject;
  static serializeBinaryToWriter(message: ValidRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidRequest;
  static deserializeBinaryFromReader(message: ValidRequest, reader: jspb.BinaryReader): ValidRequest;
}

export namespace ValidRequest {
  export type AsObject = {
    scopesList: Array<string>,
  }
}

export class ValidResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ValidResponse): ValidResponse.AsObject;
  static serializeBinaryToWriter(message: ValidResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidResponse;
  static deserializeBinaryFromReader(message: ValidResponse, reader: jspb.BinaryReader): ValidResponse;
}

export namespace ValidResponse {
  export type AsObject = {
  }
}

