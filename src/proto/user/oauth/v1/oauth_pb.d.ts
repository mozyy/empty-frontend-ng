import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as gorm_options_gorm_pb from '../../../gorm/options/gorm_pb';
import * as gorm_types_types_pb from '../../../gorm/types/types_pb';


export class AuthorizeRequest extends jspb.Message {
  getRedirecturi(): string;
  setRedirecturi(value: string): AuthorizeRequest;

  getResponseType(): ResponseType;
  setResponseType(value: ResponseType): AuthorizeRequest;

  getClientid(): string;
  setClientid(value: string): AuthorizeRequest;

  getScope(): string;
  setScope(value: string): AuthorizeRequest;

  getState(): string;
  setState(value: string): AuthorizeRequest;

  getCodeChallenge(): string;
  setCodeChallenge(value: string): AuthorizeRequest;

  getCodeChallengeMethod(): CodeChallengeMethod;
  setCodeChallengeMethod(value: CodeChallengeMethod): AuthorizeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthorizeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AuthorizeRequest): AuthorizeRequest.AsObject;
  static serializeBinaryToWriter(message: AuthorizeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthorizeRequest;
  static deserializeBinaryFromReader(message: AuthorizeRequest, reader: jspb.BinaryReader): AuthorizeRequest;
}

export namespace AuthorizeRequest {
  export type AsObject = {
    redirecturi: string,
    responseType: ResponseType,
    clientid: string,
    scope: string,
    state: string,
    codeChallenge: string,
    codeChallengeMethod: CodeChallengeMethod,
  }
}

export class AuthorizeResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthorizeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AuthorizeResponse): AuthorizeResponse.AsObject;
  static serializeBinaryToWriter(message: AuthorizeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthorizeResponse;
  static deserializeBinaryFromReader(message: AuthorizeResponse, reader: jspb.BinaryReader): AuthorizeResponse;
}

export namespace AuthorizeResponse {
  export type AsObject = {
  }
}

export class TokenRequest extends jspb.Message {
  getGrantType(): GrantType;
  setGrantType(value: GrantType): TokenRequest;

  getTokenGenerateRequest(): TokenGenerateRequest | undefined;
  setTokenGenerateRequest(value?: TokenGenerateRequest): TokenRequest;
  hasTokenGenerateRequest(): boolean;
  clearTokenGenerateRequest(): TokenRequest;

  getUsername(): string;
  setUsername(value: string): TokenRequest;

  getPassword(): string;
  setPassword(value: string): TokenRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokenRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TokenRequest): TokenRequest.AsObject;
  static serializeBinaryToWriter(message: TokenRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokenRequest;
  static deserializeBinaryFromReader(message: TokenRequest, reader: jspb.BinaryReader): TokenRequest;
}

export namespace TokenRequest {
  export type AsObject = {
    grantType: GrantType,
    tokenGenerateRequest?: TokenGenerateRequest.AsObject,
    username: string,
    password: string,
  }
}

export class TokenResponse extends jspb.Message {
  getTokenInfo(): TokenInfo | undefined;
  setTokenInfo(value?: TokenInfo): TokenResponse;
  hasTokenInfo(): boolean;
  clearTokenInfo(): TokenResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokenResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TokenResponse): TokenResponse.AsObject;
  static serializeBinaryToWriter(message: TokenResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokenResponse;
  static deserializeBinaryFromReader(message: TokenResponse, reader: jspb.BinaryReader): TokenResponse;
}

export namespace TokenResponse {
  export type AsObject = {
    tokenInfo?: TokenInfo.AsObject,
  }
}

export class TokenInfo extends jspb.Message {
  getId(): number;
  setId(value: number): TokenInfo;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): TokenInfo;
  hasCreatedAt(): boolean;
  clearCreatedAt(): TokenInfo;

  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): TokenInfo;
  hasUpdatedAt(): boolean;
  clearUpdatedAt(): TokenInfo;

  getDeletedAt(): gorm_types_types_pb.DeletedAt | undefined;
  setDeletedAt(value?: gorm_types_types_pb.DeletedAt): TokenInfo;
  hasDeletedAt(): boolean;
  clearDeletedAt(): TokenInfo;

  getClientid(): string;
  setClientid(value: string): TokenInfo;

  getUserid(): string;
  setUserid(value: string): TokenInfo;

  getRedirecturi(): string;
  setRedirecturi(value: string): TokenInfo;

  getScope(): string;
  setScope(value: string): TokenInfo;

  getCode(): string;
  setCode(value: string): TokenInfo;

  getCodeCreateAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCodeCreateAt(value?: google_protobuf_timestamp_pb.Timestamp): TokenInfo;
  hasCodeCreateAt(): boolean;
  clearCodeCreateAt(): TokenInfo;

  getCodeExpiresIn(): number;
  setCodeExpiresIn(value: number): TokenInfo;

  getCodeChallenge(): string;
  setCodeChallenge(value: string): TokenInfo;

  getCodeChallengeMethod(): CodeChallengeMethod;
  setCodeChallengeMethod(value: CodeChallengeMethod): TokenInfo;

  getAccess(): string;
  setAccess(value: string): TokenInfo;

  getAccessCreateAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setAccessCreateAt(value?: google_protobuf_timestamp_pb.Timestamp): TokenInfo;
  hasAccessCreateAt(): boolean;
  clearAccessCreateAt(): TokenInfo;

  getAccessExpiresIn(): number;
  setAccessExpiresIn(value: number): TokenInfo;

  getRefresh(): string;
  setRefresh(value: string): TokenInfo;

  getRefreshCreateAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setRefreshCreateAt(value?: google_protobuf_timestamp_pb.Timestamp): TokenInfo;
  hasRefreshCreateAt(): boolean;
  clearRefreshCreateAt(): TokenInfo;

  getRefreshExpiresIn(): number;
  setRefreshExpiresIn(value: number): TokenInfo;

  getTokenType(): string;
  setTokenType(value: string): TokenInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokenInfo.AsObject;
  static toObject(includeInstance: boolean, msg: TokenInfo): TokenInfo.AsObject;
  static serializeBinaryToWriter(message: TokenInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokenInfo;
  static deserializeBinaryFromReader(message: TokenInfo, reader: jspb.BinaryReader): TokenInfo;
}

export namespace TokenInfo {
  export type AsObject = {
    id: number,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    deletedAt?: gorm_types_types_pb.DeletedAt.AsObject,
    clientid: string,
    userid: string,
    redirecturi: string,
    scope: string,
    code: string,
    codeCreateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    codeExpiresIn: number,
    codeChallenge: string,
    codeChallengeMethod: CodeChallengeMethod,
    access: string,
    accessCreateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    accessExpiresIn: number,
    refresh: string,
    refreshCreateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    refreshExpiresIn: number,
    tokenType: string,
  }
}

export class ClientStore extends jspb.Message {
  getId(): number;
  setId(value: number): ClientStore;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): ClientStore;
  hasCreatedAt(): boolean;
  clearCreatedAt(): ClientStore;

  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): ClientStore;
  hasUpdatedAt(): boolean;
  clearUpdatedAt(): ClientStore;

  getDeletedAt(): gorm_types_types_pb.DeletedAt | undefined;
  setDeletedAt(value?: gorm_types_types_pb.DeletedAt): ClientStore;
  hasDeletedAt(): boolean;
  clearDeletedAt(): ClientStore;

  getSecret(): string;
  setSecret(value: string): ClientStore;

  getDomain(): string;
  setDomain(value: string): ClientStore;

  getUserid(): string;
  setUserid(value: string): ClientStore;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientStore.AsObject;
  static toObject(includeInstance: boolean, msg: ClientStore): ClientStore.AsObject;
  static serializeBinaryToWriter(message: ClientStore, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientStore;
  static deserializeBinaryFromReader(message: ClientStore, reader: jspb.BinaryReader): ClientStore;
}

export namespace ClientStore {
  export type AsObject = {
    id: number,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    deletedAt?: gorm_types_types_pb.DeletedAt.AsObject,
    secret: string,
    domain: string,
    userid: string,
  }
}

export class TokenGenerateRequest extends jspb.Message {
  getClientid(): string;
  setClientid(value: string): TokenGenerateRequest;

  getClientSecret(): string;
  setClientSecret(value: string): TokenGenerateRequest;

  getUserid(): string;
  setUserid(value: string): TokenGenerateRequest;

  getRedirecturi(): string;
  setRedirecturi(value: string): TokenGenerateRequest;

  getScope(): string;
  setScope(value: string): TokenGenerateRequest;

  getCode(): string;
  setCode(value: string): TokenGenerateRequest;

  getCodeChallenge(): string;
  setCodeChallenge(value: string): TokenGenerateRequest;

  getCodeChallengeMethod(): CodeChallengeMethod;
  setCodeChallengeMethod(value: CodeChallengeMethod): TokenGenerateRequest;

  getRefresh(): string;
  setRefresh(value: string): TokenGenerateRequest;

  getCodeVerifier(): string;
  setCodeVerifier(value: string): TokenGenerateRequest;

  getAccessTokenExp(): number;
  setAccessTokenExp(value: number): TokenGenerateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokenGenerateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TokenGenerateRequest): TokenGenerateRequest.AsObject;
  static serializeBinaryToWriter(message: TokenGenerateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokenGenerateRequest;
  static deserializeBinaryFromReader(message: TokenGenerateRequest, reader: jspb.BinaryReader): TokenGenerateRequest;
}

export namespace TokenGenerateRequest {
  export type AsObject = {
    clientid: string,
    clientSecret: string,
    userid: string,
    redirecturi: string,
    scope: string,
    code: string,
    codeChallenge: string,
    codeChallengeMethod: CodeChallengeMethod,
    refresh: string,
    codeVerifier: string,
    accessTokenExp: number,
  }
}

export enum ResponseType { 
  CODE = 0,
  TOKEN = 1,
}
export enum CodeChallengeMethod { 
  PLAIN = 0,
  S256 = 1,
}
export enum GrantType { 
  AUTHORIZATION_CODE = 0,
  PASSWORD = 1,
  CLIENT_CREDENTIALS = 2,
  REFRESH_TOKEN = 3,
  __IMPLICIT = 4,
}
