import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as gorm_options_gorm_pb from '../../../gorm/options/gorm_pb';
import * as gorm_types_types_pb from '../../../gorm/types/types_pb';
import * as system_resource_v1_resource_pb from '../../../system/resource/v1/resource_pb';


export class Role extends jspb.Message {
  getId(): number;
  setId(value: number): Role;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Role;
  hasCreatedAt(): boolean;
  clearCreatedAt(): Role;

  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Role;
  hasUpdatedAt(): boolean;
  clearUpdatedAt(): Role;

  getDeletedAt(): gorm_types_types_pb.DeletedAt | undefined;
  setDeletedAt(value?: gorm_types_types_pb.DeletedAt): Role;
  hasDeletedAt(): boolean;
  clearDeletedAt(): Role;

  getName(): string;
  setName(value: string): Role;

  getResourceItemsList(): Array<system_resource_v1_resource_pb.Resource>;
  setResourceItemsList(value: Array<system_resource_v1_resource_pb.Resource>): Role;
  clearResourceItemsList(): Role;
  addResourceItems(value?: system_resource_v1_resource_pb.Resource, index?: number): system_resource_v1_resource_pb.Resource;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Role.AsObject;
  static toObject(includeInstance: boolean, msg: Role): Role.AsObject;
  static serializeBinaryToWriter(message: Role, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Role;
  static deserializeBinaryFromReader(message: Role, reader: jspb.BinaryReader): Role;
}

export namespace Role {
  export type AsObject = {
    id: number,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    deletedAt?: gorm_types_types_pb.DeletedAt.AsObject,
    name: string,
    resourceItemsList: Array<system_resource_v1_resource_pb.Resource.AsObject>,
  }
}

export class CreateRequest extends jspb.Message {
  getRole(): Role | undefined;
  setRole(value?: Role): CreateRequest;
  hasRole(): boolean;
  clearRole(): CreateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRequest): CreateRequest.AsObject;
  static serializeBinaryToWriter(message: CreateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRequest;
  static deserializeBinaryFromReader(message: CreateRequest, reader: jspb.BinaryReader): CreateRequest;
}

export namespace CreateRequest {
  export type AsObject = {
    role?: Role.AsObject,
  }
}

export class CreateResponse extends jspb.Message {
  getRole(): Role | undefined;
  setRole(value?: Role): CreateResponse;
  hasRole(): boolean;
  clearRole(): CreateResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateResponse): CreateResponse.AsObject;
  static serializeBinaryToWriter(message: CreateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateResponse;
  static deserializeBinaryFromReader(message: CreateResponse, reader: jspb.BinaryReader): CreateResponse;
}

export namespace CreateResponse {
  export type AsObject = {
    role?: Role.AsObject,
  }
}

export class UpdateRequest extends jspb.Message {
  getRole(): Role | undefined;
  setRole(value?: Role): UpdateRequest;
  hasRole(): boolean;
  clearRole(): UpdateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRequest): UpdateRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRequest;
  static deserializeBinaryFromReader(message: UpdateRequest, reader: jspb.BinaryReader): UpdateRequest;
}

export namespace UpdateRequest {
  export type AsObject = {
    role?: Role.AsObject,
  }
}

export class UpdateResponse extends jspb.Message {
  getRole(): Role | undefined;
  setRole(value?: Role): UpdateResponse;
  hasRole(): boolean;
  clearRole(): UpdateResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateResponse): UpdateResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateResponse;
  static deserializeBinaryFromReader(message: UpdateResponse, reader: jspb.BinaryReader): UpdateResponse;
}

export namespace UpdateResponse {
  export type AsObject = {
    role?: Role.AsObject,
  }
}

export class ListRequest extends jspb.Message {
  getRole(): Role | undefined;
  setRole(value?: Role): ListRequest;
  hasRole(): boolean;
  clearRole(): ListRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListRequest): ListRequest.AsObject;
  static serializeBinaryToWriter(message: ListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRequest;
  static deserializeBinaryFromReader(message: ListRequest, reader: jspb.BinaryReader): ListRequest;
}

export namespace ListRequest {
  export type AsObject = {
    role?: Role.AsObject,
  }
}

export class ListResponse extends jspb.Message {
  getListList(): Array<Role>;
  setListList(value: Array<Role>): ListResponse;
  clearListList(): ListResponse;
  addList(value?: Role, index?: number): Role;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListResponse): ListResponse.AsObject;
  static serializeBinaryToWriter(message: ListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListResponse;
  static deserializeBinaryFromReader(message: ListResponse, reader: jspb.BinaryReader): ListResponse;
}

export namespace ListResponse {
  export type AsObject = {
    listList: Array<Role.AsObject>,
  }
}

export class DeleteRequest extends jspb.Message {
  getRole(): Role | undefined;
  setRole(value?: Role): DeleteRequest;
  hasRole(): boolean;
  clearRole(): DeleteRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRequest): DeleteRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRequest;
  static deserializeBinaryFromReader(message: DeleteRequest, reader: jspb.BinaryReader): DeleteRequest;
}

export namespace DeleteRequest {
  export type AsObject = {
    role?: Role.AsObject,
  }
}

export class DeleteResponse extends jspb.Message {
  getId(): number;
  setId(value: number): DeleteResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteResponse): DeleteResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteResponse;
  static deserializeBinaryFromReader(message: DeleteResponse, reader: jspb.BinaryReader): DeleteResponse;
}

export namespace DeleteResponse {
  export type AsObject = {
    id: number,
  }
}

