import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as gorm_options_gorm_pb from '../../../gorm/options/gorm_pb';
import * as gorm_types_types_pb from '../../../gorm/types/types_pb';


export class Resource extends jspb.Message {
  getId(): number;
  setId(value: number): Resource;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Resource;
  hasCreatedAt(): boolean;
  clearCreatedAt(): Resource;

  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Resource;
  hasUpdatedAt(): boolean;
  clearUpdatedAt(): Resource;

  getDeletedAt(): gorm_types_types_pb.DeletedAt | undefined;
  setDeletedAt(value?: gorm_types_types_pb.DeletedAt): Resource;
  hasDeletedAt(): boolean;
  clearDeletedAt(): Resource;

  getResourceItemid(): number;
  setResourceItemid(value: number): Resource;

  getChildrenList(): Array<Resource>;
  setChildrenList(value: Array<Resource>): Resource;
  clearChildrenList(): Resource;
  addChildren(value?: Resource, index?: number): Resource;

  getKey(): string;
  setKey(value: string): Resource;

  getType(): Resource.Type;
  setType(value: Resource.Type): Resource;

  getIndex(): boolean;
  setIndex(value: boolean): Resource;

  getPath(): string;
  setPath(value: string): Resource;

  getName(): string;
  setName(value: string): Resource;

  getMenu(): boolean;
  setMenu(value: boolean): Resource;

  getIcon(): string;
  setIcon(value: string): Resource;

  getDesc(): string;
  setDesc(value: string): Resource;

  getSort(): number;
  setSort(value: number): Resource;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Resource.AsObject;
  static toObject(includeInstance: boolean, msg: Resource): Resource.AsObject;
  static serializeBinaryToWriter(message: Resource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Resource;
  static deserializeBinaryFromReader(message: Resource, reader: jspb.BinaryReader): Resource;
}

export namespace Resource {
  export type AsObject = {
    id: number,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    deletedAt?: gorm_types_types_pb.DeletedAt.AsObject,
    resourceItemid: number,
    childrenList: Array<Resource.AsObject>,
    key: string,
    type: Resource.Type,
    index: boolean,
    path: string,
    name: string,
    menu: boolean,
    icon: string,
    desc: string,
    sort: number,
  }

  export enum Type { 
    TYPE_ROUTE_UNSPECIFIED = 0,
    TYPE_FUNCTION = 1,
    TYPE_API = 2,
  }
}

export class CreateRequest extends jspb.Message {
  getResource(): Resource | undefined;
  setResource(value?: Resource): CreateRequest;
  hasResource(): boolean;
  clearResource(): CreateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRequest): CreateRequest.AsObject;
  static serializeBinaryToWriter(message: CreateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRequest;
  static deserializeBinaryFromReader(message: CreateRequest, reader: jspb.BinaryReader): CreateRequest;
}

export namespace CreateRequest {
  export type AsObject = {
    resource?: Resource.AsObject,
  }
}

export class CreateResponse extends jspb.Message {
  getResource(): Resource | undefined;
  setResource(value?: Resource): CreateResponse;
  hasResource(): boolean;
  clearResource(): CreateResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateResponse): CreateResponse.AsObject;
  static serializeBinaryToWriter(message: CreateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateResponse;
  static deserializeBinaryFromReader(message: CreateResponse, reader: jspb.BinaryReader): CreateResponse;
}

export namespace CreateResponse {
  export type AsObject = {
    resource?: Resource.AsObject,
  }
}

export class UpdateRequest extends jspb.Message {
  getResource(): Resource | undefined;
  setResource(value?: Resource): UpdateRequest;
  hasResource(): boolean;
  clearResource(): UpdateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRequest): UpdateRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRequest;
  static deserializeBinaryFromReader(message: UpdateRequest, reader: jspb.BinaryReader): UpdateRequest;
}

export namespace UpdateRequest {
  export type AsObject = {
    resource?: Resource.AsObject,
  }
}

export class UpdateResponse extends jspb.Message {
  getResource(): Resource | undefined;
  setResource(value?: Resource): UpdateResponse;
  hasResource(): boolean;
  clearResource(): UpdateResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateResponse): UpdateResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateResponse;
  static deserializeBinaryFromReader(message: UpdateResponse, reader: jspb.BinaryReader): UpdateResponse;
}

export namespace UpdateResponse {
  export type AsObject = {
    resource?: Resource.AsObject,
  }
}

export class ListRequest extends jspb.Message {
  getResource(): Resource | undefined;
  setResource(value?: Resource): ListRequest;
  hasResource(): boolean;
  clearResource(): ListRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListRequest): ListRequest.AsObject;
  static serializeBinaryToWriter(message: ListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRequest;
  static deserializeBinaryFromReader(message: ListRequest, reader: jspb.BinaryReader): ListRequest;
}

export namespace ListRequest {
  export type AsObject = {
    resource?: Resource.AsObject,
  }
}

export class ListResponse extends jspb.Message {
  getResourcesList(): Array<Resource>;
  setResourcesList(value: Array<Resource>): ListResponse;
  clearResourcesList(): ListResponse;
  addResources(value?: Resource, index?: number): Resource;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListResponse): ListResponse.AsObject;
  static serializeBinaryToWriter(message: ListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListResponse;
  static deserializeBinaryFromReader(message: ListResponse, reader: jspb.BinaryReader): ListResponse;
}

export namespace ListResponse {
  export type AsObject = {
    resourcesList: Array<Resource.AsObject>,
  }
}

export class DeleteRequest extends jspb.Message {
  getResource(): Resource | undefined;
  setResource(value?: Resource): DeleteRequest;
  hasResource(): boolean;
  clearResource(): DeleteRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRequest): DeleteRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRequest;
  static deserializeBinaryFromReader(message: DeleteRequest, reader: jspb.BinaryReader): DeleteRequest;
}

export namespace DeleteRequest {
  export type AsObject = {
    resource?: Resource.AsObject,
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

