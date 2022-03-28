import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as gorm_options_gorm_pb from '../../gorm/options/gorm_pb';
import * as gorm_types_types_pb from '../../gorm/types/types_pb';


export class Conf extends jspb.Message {
  getId(): number;
  setId(value: number): Conf;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Conf;
  hasCreatedAt(): boolean;
  clearCreatedAt(): Conf;

  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Conf;
  hasUpdatedAt(): boolean;
  clearUpdatedAt(): Conf;

  getDeletedAt(): gorm_types_types_pb.DeletedAt | undefined;
  setDeletedAt(value?: gorm_types_types_pb.DeletedAt): Conf;
  hasDeletedAt(): boolean;
  clearDeletedAt(): Conf;

  getType(): string;
  setType(value: string): Conf;

  getValue(): string;
  setValue(value: string): Conf;

  getContent(): string;
  setContent(value: string): Conf;

  getDesc(): string;
  setDesc(value: string): Conf;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Conf.AsObject;
  static toObject(includeInstance: boolean, msg: Conf): Conf.AsObject;
  static serializeBinaryToWriter(message: Conf, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Conf;
  static deserializeBinaryFromReader(message: Conf, reader: jspb.BinaryReader): Conf;
}

export namespace Conf {
  export type AsObject = {
    id: number,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    deletedAt?: gorm_types_types_pb.DeletedAt.AsObject,
    type: string,
    value: string,
    content: string,
    desc: string,
  }
}

export class ConfApi extends jspb.Message {
  getId(): number;
  setId(value: number): ConfApi;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): ConfApi;
  hasCreatedAt(): boolean;
  clearCreatedAt(): ConfApi;

  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): ConfApi;
  hasUpdatedAt(): boolean;
  clearUpdatedAt(): ConfApi;

  getDeletedAt(): gorm_types_types_pb.DeletedAt | undefined;
  setDeletedAt(value?: gorm_types_types_pb.DeletedAt): ConfApi;
  hasDeletedAt(): boolean;
  clearDeletedAt(): ConfApi;

  getApi(): string;
  setApi(value: string): ConfApi;

  getScope(): string;
  setScope(value: string): ConfApi;

  getDesc(): string;
  setDesc(value: string): ConfApi;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfApi.AsObject;
  static toObject(includeInstance: boolean, msg: ConfApi): ConfApi.AsObject;
  static serializeBinaryToWriter(message: ConfApi, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfApi;
  static deserializeBinaryFromReader(message: ConfApi, reader: jspb.BinaryReader): ConfApi;
}

export namespace ConfApi {
  export type AsObject = {
    id: number,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    deletedAt?: gorm_types_types_pb.DeletedAt.AsObject,
    api: string,
    scope: string,
    desc: string,
  }
}

