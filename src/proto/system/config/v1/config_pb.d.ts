import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as gorm_options_gorm_pb from '../../../gorm/options/gorm_pb';
import * as gorm_types_types_pb from '../../../gorm/types/types_pb';
import * as user_oauth_v1_oauth_pb from '../../../user/oauth/v1/oauth_pb';


export class Config extends jspb.Message {
  getId(): number;
  setId(value: number): Config;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Config;
  hasCreatedAt(): boolean;
  clearCreatedAt(): Config;

  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Config;
  hasUpdatedAt(): boolean;
  clearUpdatedAt(): Config;

  getDeletedAt(): gorm_types_types_pb.DeletedAt | undefined;
  setDeletedAt(value?: gorm_types_types_pb.DeletedAt): Config;
  hasDeletedAt(): boolean;
  clearDeletedAt(): Config;

  getType(): Type;
  setType(value: Type): Config;

  getValue(): string;
  setValue(value: string): Config;

  getContent(): string;
  setContent(value: string): Config;

  getDesc(): string;
  setDesc(value: string): Config;

  getTokenInfo(): user_oauth_v1_oauth_pb.TokenInfo | undefined;
  setTokenInfo(value?: user_oauth_v1_oauth_pb.TokenInfo): Config;
  hasTokenInfo(): boolean;
  clearTokenInfo(): Config;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Config.AsObject;
  static toObject(includeInstance: boolean, msg: Config): Config.AsObject;
  static serializeBinaryToWriter(message: Config, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Config;
  static deserializeBinaryFromReader(message: Config, reader: jspb.BinaryReader): Config;
}

export namespace Config {
  export type AsObject = {
    id: number,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    deletedAt?: gorm_types_types_pb.DeletedAt.AsObject,
    type: Type,
    value: string,
    content: string,
    desc: string,
    tokenInfo?: user_oauth_v1_oauth_pb.TokenInfo.AsObject,
  }
}

export class DeleteType extends jspb.Message {
  getId(): number;
  setId(value: number): DeleteType;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): DeleteType;
  hasCreatedAt(): boolean;
  clearCreatedAt(): DeleteType;

  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): DeleteType;
  hasUpdatedAt(): boolean;
  clearUpdatedAt(): DeleteType;

  getDeletedAt(): gorm_types_types_pb.DeletedAt | undefined;
  setDeletedAt(value?: gorm_types_types_pb.DeletedAt): DeleteType;
  hasDeletedAt(): boolean;
  clearDeletedAt(): DeleteType;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteType.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteType): DeleteType.AsObject;
  static serializeBinaryToWriter(message: DeleteType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteType;
  static deserializeBinaryFromReader(message: DeleteType, reader: jspb.BinaryReader): DeleteType;
}

export namespace DeleteType {
  export type AsObject = {
    id: number,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    deletedAt?: gorm_types_types_pb.DeletedAt.AsObject,
  }
}

export class CreateRequest extends jspb.Message {
  getConfig(): Config | undefined;
  setConfig(value?: Config): CreateRequest;
  hasConfig(): boolean;
  clearConfig(): CreateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRequest): CreateRequest.AsObject;
  static serializeBinaryToWriter(message: CreateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRequest;
  static deserializeBinaryFromReader(message: CreateRequest, reader: jspb.BinaryReader): CreateRequest;
}

export namespace CreateRequest {
  export type AsObject = {
    config?: Config.AsObject,
  }
}

export class CreateResponse extends jspb.Message {
  getConfig(): Config | undefined;
  setConfig(value?: Config): CreateResponse;
  hasConfig(): boolean;
  clearConfig(): CreateResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateResponse): CreateResponse.AsObject;
  static serializeBinaryToWriter(message: CreateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateResponse;
  static deserializeBinaryFromReader(message: CreateResponse, reader: jspb.BinaryReader): CreateResponse;
}

export namespace CreateResponse {
  export type AsObject = {
    config?: Config.AsObject,
  }
}

export class UpdateRequest extends jspb.Message {
  getConfig(): Config | undefined;
  setConfig(value?: Config): UpdateRequest;
  hasConfig(): boolean;
  clearConfig(): UpdateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRequest): UpdateRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRequest;
  static deserializeBinaryFromReader(message: UpdateRequest, reader: jspb.BinaryReader): UpdateRequest;
}

export namespace UpdateRequest {
  export type AsObject = {
    config?: Config.AsObject,
  }
}

export class UpdateResponse extends jspb.Message {
  getConfig(): Config | undefined;
  setConfig(value?: Config): UpdateResponse;
  hasConfig(): boolean;
  clearConfig(): UpdateResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateResponse): UpdateResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateResponse;
  static deserializeBinaryFromReader(message: UpdateResponse, reader: jspb.BinaryReader): UpdateResponse;
}

export namespace UpdateResponse {
  export type AsObject = {
    config?: Config.AsObject,
  }
}

export class ReadRequest extends jspb.Message {
  getConfig(): Config | undefined;
  setConfig(value?: Config): ReadRequest;
  hasConfig(): boolean;
  clearConfig(): ReadRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReadRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReadRequest): ReadRequest.AsObject;
  static serializeBinaryToWriter(message: ReadRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReadRequest;
  static deserializeBinaryFromReader(message: ReadRequest, reader: jspb.BinaryReader): ReadRequest;
}

export namespace ReadRequest {
  export type AsObject = {
    config?: Config.AsObject,
  }
}

export class ReadResponse extends jspb.Message {
  getConfig(): Config | undefined;
  setConfig(value?: Config): ReadResponse;
  hasConfig(): boolean;
  clearConfig(): ReadResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReadResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ReadResponse): ReadResponse.AsObject;
  static serializeBinaryToWriter(message: ReadResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReadResponse;
  static deserializeBinaryFromReader(message: ReadResponse, reader: jspb.BinaryReader): ReadResponse;
}

export namespace ReadResponse {
  export type AsObject = {
    config?: Config.AsObject,
  }
}

export class ListRequest extends jspb.Message {
  getConfig(): Config | undefined;
  setConfig(value?: Config): ListRequest;
  hasConfig(): boolean;
  clearConfig(): ListRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListRequest): ListRequest.AsObject;
  static serializeBinaryToWriter(message: ListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRequest;
  static deserializeBinaryFromReader(message: ListRequest, reader: jspb.BinaryReader): ListRequest;
}

export namespace ListRequest {
  export type AsObject = {
    config?: Config.AsObject,
  }
}

export class ListResponse extends jspb.Message {
  getConfigsList(): Array<Config>;
  setConfigsList(value: Array<Config>): ListResponse;
  clearConfigsList(): ListResponse;
  addConfigs(value?: Config, index?: number): Config;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListResponse): ListResponse.AsObject;
  static serializeBinaryToWriter(message: ListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListResponse;
  static deserializeBinaryFromReader(message: ListResponse, reader: jspb.BinaryReader): ListResponse;
}

export namespace ListResponse {
  export type AsObject = {
    configsList: Array<Config.AsObject>,
  }
}

export class DeleteRequest extends jspb.Message {
  getConfig(): Config | undefined;
  setConfig(value?: Config): DeleteRequest;
  hasConfig(): boolean;
  clearConfig(): DeleteRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRequest): DeleteRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRequest;
  static deserializeBinaryFromReader(message: DeleteRequest, reader: jspb.BinaryReader): DeleteRequest;
}

export namespace DeleteRequest {
  export type AsObject = {
    config?: Config.AsObject,
  }
}

export class DeleteResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteResponse): DeleteResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteResponse;
  static deserializeBinaryFromReader(message: DeleteResponse, reader: jspb.BinaryReader): DeleteResponse;
}

export namespace DeleteResponse {
  export type AsObject = {
  }
}

export enum Type { 
  TYPE_NORMAL_UNSPECIFIED = 0,
  TYPE_APISCOPE = 1,
}
