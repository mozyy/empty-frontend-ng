import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as gorm_options_gorm_pb from '../../../gorm/options/gorm_pb';
import * as gorm_types_types_pb from '../../../gorm/types/types_pb';
import * as system_role_v1_role_pb from '../../../system/role/v1/role_pb';
import * as user_oauth_v1_oauth_pb from '../../../user/oauth/v1/oauth_pb';


export class RegisterRequest extends jspb.Message {
  getMobile(): string;
  setMobile(value: string): RegisterRequest;

  getSmsCode(): string;
  setSmsCode(value: string): RegisterRequest;

  getPassword(): string;
  setPassword(value: string): RegisterRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterRequest): RegisterRequest.AsObject;
  static serializeBinaryToWriter(message: RegisterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterRequest;
  static deserializeBinaryFromReader(message: RegisterRequest, reader: jspb.BinaryReader): RegisterRequest;
}

export namespace RegisterRequest {
  export type AsObject = {
    mobile: string,
    smsCode: string,
    password: string,
  }
}

export class RegisterResponse extends jspb.Message {
  getOAuthToken(): user_oauth_v1_oauth_pb.OAuthToken | undefined;
  setOAuthToken(value?: user_oauth_v1_oauth_pb.OAuthToken): RegisterResponse;
  hasOAuthToken(): boolean;
  clearOAuthToken(): RegisterResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterResponse): RegisterResponse.AsObject;
  static serializeBinaryToWriter(message: RegisterResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterResponse;
  static deserializeBinaryFromReader(message: RegisterResponse, reader: jspb.BinaryReader): RegisterResponse;
}

export namespace RegisterResponse {
  export type AsObject = {
    oAuthToken?: user_oauth_v1_oauth_pb.OAuthToken.AsObject,
  }
}

export class LoginRequest extends jspb.Message {
  getMobile(): string;
  setMobile(value: string): LoginRequest;

  getPassword(): string;
  setPassword(value: string): LoginRequest;

  getSmsCode(): string;
  setSmsCode(value: string): LoginRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LoginRequest): LoginRequest.AsObject;
  static serializeBinaryToWriter(message: LoginRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginRequest;
  static deserializeBinaryFromReader(message: LoginRequest, reader: jspb.BinaryReader): LoginRequest;
}

export namespace LoginRequest {
  export type AsObject = {
    mobile: string,
    password: string,
    smsCode: string,
  }
}

export class LoginResponse extends jspb.Message {
  getOAuthToken(): user_oauth_v1_oauth_pb.OAuthToken | undefined;
  setOAuthToken(value?: user_oauth_v1_oauth_pb.OAuthToken): LoginResponse;
  hasOAuthToken(): boolean;
  clearOAuthToken(): LoginResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LoginResponse): LoginResponse.AsObject;
  static serializeBinaryToWriter(message: LoginResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginResponse;
  static deserializeBinaryFromReader(message: LoginResponse, reader: jspb.BinaryReader): LoginResponse;
}

export namespace LoginResponse {
  export type AsObject = {
    oAuthToken?: user_oauth_v1_oauth_pb.OAuthToken.AsObject,
  }
}

export class InfoRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: InfoRequest): InfoRequest.AsObject;
  static serializeBinaryToWriter(message: InfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InfoRequest;
  static deserializeBinaryFromReader(message: InfoRequest, reader: jspb.BinaryReader): InfoRequest;
}

export namespace InfoRequest {
  export type AsObject = {
  }
}

export class InfoResponse extends jspb.Message {
  getId(): number;
  setId(value: number): InfoResponse;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): InfoResponse;
  hasCreatedAt(): boolean;
  clearCreatedAt(): InfoResponse;

  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): InfoResponse;
  hasUpdatedAt(): boolean;
  clearUpdatedAt(): InfoResponse;

  getDeletedAt(): gorm_types_types_pb.DeletedAt | undefined;
  setDeletedAt(value?: gorm_types_types_pb.DeletedAt): InfoResponse;
  hasDeletedAt(): boolean;
  clearDeletedAt(): InfoResponse;

  getName(): string;
  setName(value: string): InfoResponse;

  getMobile(): string;
  setMobile(value: string): InfoResponse;

  getResourceItemsList(): Array<system_role_v1_role_pb.Role>;
  setResourceItemsList(value: Array<system_role_v1_role_pb.Role>): InfoResponse;
  clearResourceItemsList(): InfoResponse;
  addResourceItems(value?: system_role_v1_role_pb.Role, index?: number): system_role_v1_role_pb.Role;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: InfoResponse): InfoResponse.AsObject;
  static serializeBinaryToWriter(message: InfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InfoResponse;
  static deserializeBinaryFromReader(message: InfoResponse, reader: jspb.BinaryReader): InfoResponse;
}

export namespace InfoResponse {
  export type AsObject = {
    id: number,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    deletedAt?: gorm_types_types_pb.DeletedAt.AsObject,
    name: string,
    mobile: string,
    resourceItemsList: Array<system_role_v1_role_pb.Role.AsObject>,
  }
}

