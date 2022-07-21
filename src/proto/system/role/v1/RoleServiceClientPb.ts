/**
 * @fileoverview gRPC-Web generated client stub for system.role.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as system_role_v1_role_pb from '../../../system/role/v1/role_pb';


export class RoleServiceClient {
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
    '/system.role.v1.RoleService/Create',
    grpcWeb.MethodType.UNARY,
    system_role_v1_role_pb.CreateRequest,
    system_role_v1_role_pb.CreateResponse,
    (request: system_role_v1_role_pb.CreateRequest) => {
      return request.serializeBinary();
    },
    system_role_v1_role_pb.CreateResponse.deserializeBinary
  );

  create(
    request: system_role_v1_role_pb.CreateRequest,
    metadata: grpcWeb.Metadata | null): Promise<system_role_v1_role_pb.CreateResponse>;

  create(
    request: system_role_v1_role_pb.CreateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: system_role_v1_role_pb.CreateResponse) => void): grpcWeb.ClientReadableStream<system_role_v1_role_pb.CreateResponse>;

  create(
    request: system_role_v1_role_pb.CreateRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: system_role_v1_role_pb.CreateResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/system.role.v1.RoleService/Create',
        request,
        metadata || {},
        this.methodDescriptorCreate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/system.role.v1.RoleService/Create',
    request,
    metadata || {},
    this.methodDescriptorCreate);
  }

  methodDescriptorUpdate = new grpcWeb.MethodDescriptor(
    '/system.role.v1.RoleService/Update',
    grpcWeb.MethodType.UNARY,
    system_role_v1_role_pb.UpdateRequest,
    system_role_v1_role_pb.UpdateResponse,
    (request: system_role_v1_role_pb.UpdateRequest) => {
      return request.serializeBinary();
    },
    system_role_v1_role_pb.UpdateResponse.deserializeBinary
  );

  update(
    request: system_role_v1_role_pb.UpdateRequest,
    metadata: grpcWeb.Metadata | null): Promise<system_role_v1_role_pb.UpdateResponse>;

  update(
    request: system_role_v1_role_pb.UpdateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: system_role_v1_role_pb.UpdateResponse) => void): grpcWeb.ClientReadableStream<system_role_v1_role_pb.UpdateResponse>;

  update(
    request: system_role_v1_role_pb.UpdateRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: system_role_v1_role_pb.UpdateResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/system.role.v1.RoleService/Update',
        request,
        metadata || {},
        this.methodDescriptorUpdate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/system.role.v1.RoleService/Update',
    request,
    metadata || {},
    this.methodDescriptorUpdate);
  }

  methodDescriptorList = new grpcWeb.MethodDescriptor(
    '/system.role.v1.RoleService/List',
    grpcWeb.MethodType.UNARY,
    system_role_v1_role_pb.ListRequest,
    system_role_v1_role_pb.ListResponse,
    (request: system_role_v1_role_pb.ListRequest) => {
      return request.serializeBinary();
    },
    system_role_v1_role_pb.ListResponse.deserializeBinary
  );

  list(
    request: system_role_v1_role_pb.ListRequest,
    metadata: grpcWeb.Metadata | null): Promise<system_role_v1_role_pb.ListResponse>;

  list(
    request: system_role_v1_role_pb.ListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: system_role_v1_role_pb.ListResponse) => void): grpcWeb.ClientReadableStream<system_role_v1_role_pb.ListResponse>;

  list(
    request: system_role_v1_role_pb.ListRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: system_role_v1_role_pb.ListResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/system.role.v1.RoleService/List',
        request,
        metadata || {},
        this.methodDescriptorList,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/system.role.v1.RoleService/List',
    request,
    metadata || {},
    this.methodDescriptorList);
  }

  methodDescriptorDelete = new grpcWeb.MethodDescriptor(
    '/system.role.v1.RoleService/Delete',
    grpcWeb.MethodType.UNARY,
    system_role_v1_role_pb.DeleteRequest,
    system_role_v1_role_pb.DeleteResponse,
    (request: system_role_v1_role_pb.DeleteRequest) => {
      return request.serializeBinary();
    },
    system_role_v1_role_pb.DeleteResponse.deserializeBinary
  );

  delete(
    request: system_role_v1_role_pb.DeleteRequest,
    metadata: grpcWeb.Metadata | null): Promise<system_role_v1_role_pb.DeleteResponse>;

  delete(
    request: system_role_v1_role_pb.DeleteRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: system_role_v1_role_pb.DeleteResponse) => void): grpcWeb.ClientReadableStream<system_role_v1_role_pb.DeleteResponse>;

  delete(
    request: system_role_v1_role_pb.DeleteRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: system_role_v1_role_pb.DeleteResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/system.role.v1.RoleService/Delete',
        request,
        metadata || {},
        this.methodDescriptorDelete,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/system.role.v1.RoleService/Delete',
    request,
    metadata || {},
    this.methodDescriptorDelete);
  }

}

