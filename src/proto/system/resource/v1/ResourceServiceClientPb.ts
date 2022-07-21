/**
 * @fileoverview gRPC-Web generated client stub for system.resource.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as system_resource_v1_resource_pb from '../../../system/resource/v1/resource_pb';


export class ResourceServiceClient {
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
    '/system.resource.v1.ResourceService/Create',
    grpcWeb.MethodType.UNARY,
    system_resource_v1_resource_pb.CreateRequest,
    system_resource_v1_resource_pb.CreateResponse,
    (request: system_resource_v1_resource_pb.CreateRequest) => {
      return request.serializeBinary();
    },
    system_resource_v1_resource_pb.CreateResponse.deserializeBinary
  );

  create(
    request: system_resource_v1_resource_pb.CreateRequest,
    metadata: grpcWeb.Metadata | null): Promise<system_resource_v1_resource_pb.CreateResponse>;

  create(
    request: system_resource_v1_resource_pb.CreateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: system_resource_v1_resource_pb.CreateResponse) => void): grpcWeb.ClientReadableStream<system_resource_v1_resource_pb.CreateResponse>;

  create(
    request: system_resource_v1_resource_pb.CreateRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: system_resource_v1_resource_pb.CreateResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/system.resource.v1.ResourceService/Create',
        request,
        metadata || {},
        this.methodDescriptorCreate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/system.resource.v1.ResourceService/Create',
    request,
    metadata || {},
    this.methodDescriptorCreate);
  }

  methodDescriptorUpdate = new grpcWeb.MethodDescriptor(
    '/system.resource.v1.ResourceService/Update',
    grpcWeb.MethodType.UNARY,
    system_resource_v1_resource_pb.UpdateRequest,
    system_resource_v1_resource_pb.UpdateResponse,
    (request: system_resource_v1_resource_pb.UpdateRequest) => {
      return request.serializeBinary();
    },
    system_resource_v1_resource_pb.UpdateResponse.deserializeBinary
  );

  update(
    request: system_resource_v1_resource_pb.UpdateRequest,
    metadata: grpcWeb.Metadata | null): Promise<system_resource_v1_resource_pb.UpdateResponse>;

  update(
    request: system_resource_v1_resource_pb.UpdateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: system_resource_v1_resource_pb.UpdateResponse) => void): grpcWeb.ClientReadableStream<system_resource_v1_resource_pb.UpdateResponse>;

  update(
    request: system_resource_v1_resource_pb.UpdateRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: system_resource_v1_resource_pb.UpdateResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/system.resource.v1.ResourceService/Update',
        request,
        metadata || {},
        this.methodDescriptorUpdate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/system.resource.v1.ResourceService/Update',
    request,
    metadata || {},
    this.methodDescriptorUpdate);
  }

  methodDescriptorList = new grpcWeb.MethodDescriptor(
    '/system.resource.v1.ResourceService/List',
    grpcWeb.MethodType.UNARY,
    system_resource_v1_resource_pb.ListRequest,
    system_resource_v1_resource_pb.ListResponse,
    (request: system_resource_v1_resource_pb.ListRequest) => {
      return request.serializeBinary();
    },
    system_resource_v1_resource_pb.ListResponse.deserializeBinary
  );

  list(
    request: system_resource_v1_resource_pb.ListRequest,
    metadata: grpcWeb.Metadata | null): Promise<system_resource_v1_resource_pb.ListResponse>;

  list(
    request: system_resource_v1_resource_pb.ListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: system_resource_v1_resource_pb.ListResponse) => void): grpcWeb.ClientReadableStream<system_resource_v1_resource_pb.ListResponse>;

  list(
    request: system_resource_v1_resource_pb.ListRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: system_resource_v1_resource_pb.ListResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/system.resource.v1.ResourceService/List',
        request,
        metadata || {},
        this.methodDescriptorList,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/system.resource.v1.ResourceService/List',
    request,
    metadata || {},
    this.methodDescriptorList);
  }

  methodDescriptorDelete = new grpcWeb.MethodDescriptor(
    '/system.resource.v1.ResourceService/Delete',
    grpcWeb.MethodType.UNARY,
    system_resource_v1_resource_pb.DeleteRequest,
    system_resource_v1_resource_pb.DeleteResponse,
    (request: system_resource_v1_resource_pb.DeleteRequest) => {
      return request.serializeBinary();
    },
    system_resource_v1_resource_pb.DeleteResponse.deserializeBinary
  );

  delete(
    request: system_resource_v1_resource_pb.DeleteRequest,
    metadata: grpcWeb.Metadata | null): Promise<system_resource_v1_resource_pb.DeleteResponse>;

  delete(
    request: system_resource_v1_resource_pb.DeleteRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: system_resource_v1_resource_pb.DeleteResponse) => void): grpcWeb.ClientReadableStream<system_resource_v1_resource_pb.DeleteResponse>;

  delete(
    request: system_resource_v1_resource_pb.DeleteRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: system_resource_v1_resource_pb.DeleteResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/system.resource.v1.ResourceService/Delete',
        request,
        metadata || {},
        this.methodDescriptorDelete,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/system.resource.v1.ResourceService/Delete',
    request,
    metadata || {},
    this.methodDescriptorDelete);
  }

}

