import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as gorm_options_gorm_pb from '../../../gorm/options/gorm_pb';
import * as gorm_types_types_pb from '../../../gorm/types/types_pb';


export class News extends jspb.Message {
  getId(): number;
  setId(value: number): News;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): News;
  hasCreatedAt(): boolean;
  clearCreatedAt(): News;

  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): News;
  hasUpdatedAt(): boolean;
  clearUpdatedAt(): News;

  getDeletedAt(): gorm_types_types_pb.DeletedAt | undefined;
  setDeletedAt(value?: gorm_types_types_pb.DeletedAt): News;
  hasDeletedAt(): boolean;
  clearDeletedAt(): News;

  getLink(): string;
  setLink(value: string): News;

  getImage(): string;
  setImage(value: string): News;

  getTitle(): string;
  setTitle(value: string): News;

  getTime(): string;
  setTime(value: string): News;

  getView(): number;
  setView(value: number): News;

  getComment(): number;
  setComment(value: number): News;

  getType(): Type;
  setType(value: Type): News;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): News.AsObject;
  static toObject(includeInstance: boolean, msg: News): News.AsObject;
  static serializeBinaryToWriter(message: News, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): News;
  static deserializeBinaryFromReader(message: News, reader: jspb.BinaryReader): News;
}

export namespace News {
  export type AsObject = {
    id: number,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    deletedAt?: gorm_types_types_pb.DeletedAt.AsObject,
    link: string,
    image: string,
    title: string,
    time: string,
    view: number,
    comment: number,
    type: Type,
  }
}

export class ListRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListRequest): ListRequest.AsObject;
  static serializeBinaryToWriter(message: ListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRequest;
  static deserializeBinaryFromReader(message: ListRequest, reader: jspb.BinaryReader): ListRequest;
}

export namespace ListRequest {
  export type AsObject = {
  }
}

export class ListResponse extends jspb.Message {
  getListList(): Array<News>;
  setListList(value: Array<News>): ListResponse;
  clearListList(): ListResponse;
  addList(value?: News, index?: number): News;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListResponse): ListResponse.AsObject;
  static serializeBinaryToWriter(message: ListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListResponse;
  static deserializeBinaryFromReader(message: ListResponse, reader: jspb.BinaryReader): ListResponse;
}

export namespace ListResponse {
  export type AsObject = {
    listList: Array<News.AsObject>,
  }
}

export class DetailRequest extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): DetailRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DetailRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DetailRequest): DetailRequest.AsObject;
  static serializeBinaryToWriter(message: DetailRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DetailRequest;
  static deserializeBinaryFromReader(message: DetailRequest, reader: jspb.BinaryReader): DetailRequest;
}

export namespace DetailRequest {
  export type AsObject = {
    url: string,
  }
}

export class DetailResponse extends jspb.Message {
  getId(): number;
  setId(value: number): DetailResponse;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): DetailResponse;
  hasCreatedAt(): boolean;
  clearCreatedAt(): DetailResponse;

  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): DetailResponse;
  hasUpdatedAt(): boolean;
  clearUpdatedAt(): DetailResponse;

  getDeletedAt(): gorm_types_types_pb.DeletedAt | undefined;
  setDeletedAt(value?: gorm_types_types_pb.DeletedAt): DetailResponse;
  hasDeletedAt(): boolean;
  clearDeletedAt(): DetailResponse;

  getTitle(): string;
  setTitle(value: string): DetailResponse;

  getFrom(): string;
  setFrom(value: string): DetailResponse;

  getTime(): string;
  setTime(value: string): DetailResponse;

  getSummary(): string;
  setSummary(value: string): DetailResponse;

  getContentList(): Array<DetailResponse.DetailContent>;
  setContentList(value: Array<DetailResponse.DetailContent>): DetailResponse;
  clearContentList(): DetailResponse;
  addContent(value?: DetailResponse.DetailContent, index?: number): DetailResponse.DetailContent;

  getNo(): string;
  setNo(value: string): DetailResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DetailResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DetailResponse): DetailResponse.AsObject;
  static serializeBinaryToWriter(message: DetailResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DetailResponse;
  static deserializeBinaryFromReader(message: DetailResponse, reader: jspb.BinaryReader): DetailResponse;
}

export namespace DetailResponse {
  export type AsObject = {
    id: number,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    deletedAt?: gorm_types_types_pb.DeletedAt.AsObject,
    title: string,
    from: string,
    time: string,
    summary: string,
    contentList: Array<DetailResponse.DetailContent.AsObject>,
    no: string,
  }

  export class DetailContent extends jspb.Message {
    getId(): number;
    setId(value: number): DetailContent;

    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): DetailContent;
    hasCreatedAt(): boolean;
    clearCreatedAt(): DetailContent;

    getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): DetailContent;
    hasUpdatedAt(): boolean;
    clearUpdatedAt(): DetailContent;

    getDeletedAt(): gorm_types_types_pb.DeletedAt | undefined;
    setDeletedAt(value?: gorm_types_types_pb.DeletedAt): DetailContent;
    hasDeletedAt(): boolean;
    clearDeletedAt(): DetailContent;

    getType(): number;
    setType(value: number): DetailContent;

    getContent(): string;
    setContent(value: string): DetailContent;

    getNewsDetailid(): number;
    setNewsDetailid(value: number): DetailContent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DetailContent.AsObject;
    static toObject(includeInstance: boolean, msg: DetailContent): DetailContent.AsObject;
    static serializeBinaryToWriter(message: DetailContent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DetailContent;
    static deserializeBinaryFromReader(message: DetailContent, reader: jspb.BinaryReader): DetailContent;
  }

  export namespace DetailContent {
    export type AsObject = {
      id: number,
      createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      deletedAt?: gorm_types_types_pb.DeletedAt.AsObject,
      type: number,
      content: string,
      newsDetailid: number,
    }
  }

}

export enum Type { 
  TYPE_INDUSTRY_UNSPECIFIED = 0,
  TYPE_SCIENCE = 1,
  TYPE_FILM = 2,
  TYPE_GAME = 3,
}
