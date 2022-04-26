import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as gorm_options_gorm_pb from '../../gorm/options/gorm_pb';
import * as gorm_types_types_pb from '../../gorm/types/types_pb';


export class OAuthToken extends jspb.Message {
  getId(): number;
  setId(value: number): OAuthToken;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): OAuthToken;
  hasCreatedAt(): boolean;
  clearCreatedAt(): OAuthToken;

  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): OAuthToken;
  hasUpdatedAt(): boolean;
  clearUpdatedAt(): OAuthToken;

  getDeletedAt(): gorm_types_types_pb.DeletedAt | undefined;
  setDeletedAt(value?: gorm_types_types_pb.DeletedAt): OAuthToken;
  hasDeletedAt(): boolean;
  clearDeletedAt(): OAuthToken;

  getClientid(): string;
  setClientid(value: string): OAuthToken;

  getUserid(): string;
  setUserid(value: string): OAuthToken;

  getRedirecturi(): string;
  setRedirecturi(value: string): OAuthToken;

  getScope(): string;
  setScope(value: string): OAuthToken;

  getCode(): string;
  setCode(value: string): OAuthToken;

  getCodeCreateAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCodeCreateAt(value?: google_protobuf_timestamp_pb.Timestamp): OAuthToken;
  hasCodeCreateAt(): boolean;
  clearCodeCreateAt(): OAuthToken;

  getCodeExpiresIn(): number;
  setCodeExpiresIn(value: number): OAuthToken;

  getCodeChallenge(): string;
  setCodeChallenge(value: string): OAuthToken;

  getCodeChallengeMethod(): string;
  setCodeChallengeMethod(value: string): OAuthToken;

  getAccess(): string;
  setAccess(value: string): OAuthToken;

  getAccessCreateAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setAccessCreateAt(value?: google_protobuf_timestamp_pb.Timestamp): OAuthToken;
  hasAccessCreateAt(): boolean;
  clearAccessCreateAt(): OAuthToken;

  getAccessExpiresIn(): number;
  setAccessExpiresIn(value: number): OAuthToken;

  getRefresh(): string;
  setRefresh(value: string): OAuthToken;

  getRefreshCreateAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setRefreshCreateAt(value?: google_protobuf_timestamp_pb.Timestamp): OAuthToken;
  hasRefreshCreateAt(): boolean;
  clearRefreshCreateAt(): OAuthToken;

  getRefreshExpiresIn(): number;
  setRefreshExpiresIn(value: number): OAuthToken;

  getTokenType(): string;
  setTokenType(value: string): OAuthToken;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OAuthToken.AsObject;
  static toObject(includeInstance: boolean, msg: OAuthToken): OAuthToken.AsObject;
  static serializeBinaryToWriter(message: OAuthToken, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OAuthToken;
  static deserializeBinaryFromReader(message: OAuthToken, reader: jspb.BinaryReader): OAuthToken;
}

export namespace OAuthToken {
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
    codeChallengeMethod: string,
    access: string,
    accessCreateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    accessExpiresIn: number,
    refresh: string,
    refreshCreateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    refreshExpiresIn: number,
    tokenType: string,
  }
}

export class OAuthClient extends jspb.Message {
  getId(): number;
  setId(value: number): OAuthClient;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): OAuthClient;
  hasCreatedAt(): boolean;
  clearCreatedAt(): OAuthClient;

  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): OAuthClient;
  hasUpdatedAt(): boolean;
  clearUpdatedAt(): OAuthClient;

  getDeletedAt(): gorm_types_types_pb.DeletedAt | undefined;
  setDeletedAt(value?: gorm_types_types_pb.DeletedAt): OAuthClient;
  hasDeletedAt(): boolean;
  clearDeletedAt(): OAuthClient;

  getClientid(): string;
  setClientid(value: string): OAuthClient;

  getSecret(): string;
  setSecret(value: string): OAuthClient;

  getDomain(): string;
  setDomain(value: string): OAuthClient;

  getUserid(): string;
  setUserid(value: string): OAuthClient;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OAuthClient.AsObject;
  static toObject(includeInstance: boolean, msg: OAuthClient): OAuthClient.AsObject;
  static serializeBinaryToWriter(message: OAuthClient, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OAuthClient;
  static deserializeBinaryFromReader(message: OAuthClient, reader: jspb.BinaryReader): OAuthClient;
}

export namespace OAuthClient {
  export type AsObject = {
    id: number,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    deletedAt?: gorm_types_types_pb.DeletedAt.AsObject,
    clientid: string,
    secret: string,
    domain: string,
    userid: string,
  }
}

