/**
 * @fileoverview gRPC-Web generated client stub for system.config.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as system_config_v1_config_pb from '../../../system/config/v1/config_pb';


export class ConfigServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'binary';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorCreate = new grpcWeb.MethodDescriptor(
    '/system.config.v1.ConfigService/Create',
    grpcWeb.MethodType.UNARY,
    system_config_v1_config_pb.CreateRequest,
    system_config_v1_config_pb.CreateResponse,
    (request: system_config_v1_config_pb.CreateRequest) => {
      return request.serializeBinary();
    },
    system_config_v1_config_pb.CreateResponse.deserializeBinary
  );

  create(
    request: system_config_v1_config_pb.CreateRequest,
    metadata: grpcWeb.Metadata | null): Promise<system_config_v1_config_pb.CreateResponse>;

  create(
    request: system_config_v1_config_pb.CreateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: system_config_v1_config_pb.CreateResponse) => void): grpcWeb.ClientReadableStream<system_config_v1_config_pb.CreateResponse>;

  create(
    request: system_config_v1_config_pb.CreateRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: system_config_v1_config_pb.CreateResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/system.config.v1.ConfigService/Create',
        request,
        metadata || {},
        this.methodDescriptorCreate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/system.config.v1.ConfigService/Create',
    request,
    metadata || {},
    this.methodDescriptorCreate);
  }

  methodDescriptorUpdate = new grpcWeb.MethodDescriptor(
    '/system.config.v1.ConfigService/Update',
    grpcWeb.MethodType.UNARY,
    system_config_v1_config_pb.UpdateRequest,
    system_config_v1_config_pb.UpdateResponse,
    (request: system_config_v1_config_pb.UpdateRequest) => {
      return request.serializeBinary();
    },
    system_config_v1_config_pb.UpdateResponse.deserializeBinary
  );

  update(
    request: system_config_v1_config_pb.UpdateRequest,
    metadata: grpcWeb.Metadata | null): Promise<system_config_v1_config_pb.UpdateResponse>;

  update(
    request: system_config_v1_config_pb.UpdateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: system_config_v1_config_pb.UpdateResponse) => void): grpcWeb.ClientReadableStream<system_config_v1_config_pb.UpdateResponse>;

  update(
    request: system_config_v1_config_pb.UpdateRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: system_config_v1_config_pb.UpdateResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/system.config.v1.ConfigService/Update',
        request,
        metadata || {},
        this.methodDescriptorUpdate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/system.config.v1.ConfigService/Update',
    request,
    metadata || {},
    this.methodDescriptorUpdate);
  }

  methodDescriptorRead = new grpcWeb.MethodDescriptor(
    '/system.config.v1.ConfigService/Read',
    grpcWeb.MethodType.UNARY,
    system_config_v1_config_pb.ReadRequest,
    system_config_v1_config_pb.ReadResponse,
    (request: system_config_v1_config_pb.ReadRequest) => {
      return request.serializeBinary();
    },
    system_config_v1_config_pb.ReadResponse.deserializeBinary
  );

  read(
    request: system_config_v1_config_pb.ReadRequest,
    metadata: grpcWeb.Metadata | null): Promise<system_config_v1_config_pb.ReadResponse>;

  read(
    request: system_config_v1_config_pb.ReadRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: system_config_v1_config_pb.ReadResponse) => void): grpcWeb.ClientReadableStream<system_config_v1_config_pb.ReadResponse>;

  read(
    request: system_config_v1_config_pb.ReadRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: system_config_v1_config_pb.ReadResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/system.config.v1.ConfigService/Read',
        request,
        metadata || {},
        this.methodDescriptorRead,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/system.config.v1.ConfigService/Read',
    request,
    metadata || {},
    this.methodDescriptorRead);
  }

  methodDescriptorList = new grpcWeb.MethodDescriptor(
    '/system.config.v1.ConfigService/List',
    grpcWeb.MethodType.UNARY,
    system_config_v1_config_pb.ListRequest,
    system_config_v1_config_pb.ListResponse,
    (request: system_config_v1_config_pb.ListRequest) => {
      return request.serializeBinary();
    },
    system_config_v1_config_pb.ListResponse.deserializeBinary
  );

  list(
    request: system_config_v1_config_pb.ListRequest,
    metadata: grpcWeb.Metadata | null): Promise<system_config_v1_config_pb.ListResponse>;

  list(
    request: system_config_v1_config_pb.ListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: system_config_v1_config_pb.ListResponse) => void): grpcWeb.ClientReadableStream<system_config_v1_config_pb.ListResponse>;

  list(
    request: system_config_v1_config_pb.ListRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: system_config_v1_config_pb.ListResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/system.config.v1.ConfigService/List',
        request,
        metadata || {},
        this.methodDescriptorList,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/system.config.v1.ConfigService/List',
    request,
    metadata || {},
    this.methodDescriptorList);
  }

  methodDescriptorDelete = new grpcWeb.MethodDescriptor(
    '/system.config.v1.ConfigService/Delete',
    grpcWeb.MethodType.UNARY,
    system_config_v1_config_pb.DeleteRequest,
    system_config_v1_config_pb.DeleteResponse,
    (request: system_config_v1_config_pb.DeleteRequest) => {
      return request.serializeBinary();
    },
    system_config_v1_config_pb.DeleteResponse.deserializeBinary
  );

  delete(
    request: system_config_v1_config_pb.DeleteRequest,
    metadata: grpcWeb.Metadata | null): Promise<system_config_v1_config_pb.DeleteResponse>;

  delete(
    request: system_config_v1_config_pb.DeleteRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: system_config_v1_config_pb.DeleteResponse) => void): grpcWeb.ClientReadableStream<system_config_v1_config_pb.DeleteResponse>;

  delete(
    request: system_config_v1_config_pb.DeleteRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: system_config_v1_config_pb.DeleteResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/system.config.v1.ConfigService/Delete',
        request,
        metadata || {},
        this.methodDescriptorDelete,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/system.config.v1.ConfigService/Delete',
    request,
    metadata || {},
    this.methodDescriptorDelete);
  }

}

