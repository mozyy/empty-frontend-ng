/**
 * @fileoverview gRPC-Web generated client stub for system.resource.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as system_resource_v1_api_pb from '../../../system/resource/v1/api_pb';


export class ApiAuthServiceClient {
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

  methodDescriptorRefresh = new grpcWeb.MethodDescriptor(
    '/system.resource.v1.ApiAuthService/Refresh',
    grpcWeb.MethodType.UNARY,
    system_resource_v1_api_pb.RefreshRequest,
    system_resource_v1_api_pb.RefreshResponse,
    (request: system_resource_v1_api_pb.RefreshRequest) => {
      return request.serializeBinary();
    },
    system_resource_v1_api_pb.RefreshResponse.deserializeBinary
  );

  refresh(
    request: system_resource_v1_api_pb.RefreshRequest,
    metadata: grpcWeb.Metadata | null): Promise<system_resource_v1_api_pb.RefreshResponse>;

  refresh(
    request: system_resource_v1_api_pb.RefreshRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: system_resource_v1_api_pb.RefreshResponse) => void): grpcWeb.ClientReadableStream<system_resource_v1_api_pb.RefreshResponse>;

  refresh(
    request: system_resource_v1_api_pb.RefreshRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: system_resource_v1_api_pb.RefreshResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/system.resource.v1.ApiAuthService/Refresh',
        request,
        metadata || {},
        this.methodDescriptorRefresh,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/system.resource.v1.ApiAuthService/Refresh',
    request,
    metadata || {},
    this.methodDescriptorRefresh);
  }

  methodDescriptorValid = new grpcWeb.MethodDescriptor(
    '/system.resource.v1.ApiAuthService/Valid',
    grpcWeb.MethodType.UNARY,
    system_resource_v1_api_pb.ValidRequest,
    system_resource_v1_api_pb.ValidResponse,
    (request: system_resource_v1_api_pb.ValidRequest) => {
      return request.serializeBinary();
    },
    system_resource_v1_api_pb.ValidResponse.deserializeBinary
  );

  valid(
    request: system_resource_v1_api_pb.ValidRequest,
    metadata: grpcWeb.Metadata | null): Promise<system_resource_v1_api_pb.ValidResponse>;

  valid(
    request: system_resource_v1_api_pb.ValidRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: system_resource_v1_api_pb.ValidResponse) => void): grpcWeb.ClientReadableStream<system_resource_v1_api_pb.ValidResponse>;

  valid(
    request: system_resource_v1_api_pb.ValidRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: system_resource_v1_api_pb.ValidResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/system.resource.v1.ApiAuthService/Valid',
        request,
        metadata || {},
        this.methodDescriptorValid,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/system.resource.v1.ApiAuthService/Valid',
    request,
    metadata || {},
    this.methodDescriptorValid);
  }

}

