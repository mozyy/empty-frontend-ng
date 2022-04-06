/**
 * @fileoverview gRPC-Web generated client stub for user
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as proto_model_oauth_pb from '../../proto/model/oauth_pb';
import * as proto_user_user_pb from '../../proto/user/user_pb';


export class UserClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorRegister = new grpcWeb.MethodDescriptor(
    '/user.User/Register',
    grpcWeb.MethodType.UNARY,
    proto_user_user_pb.RegisterRequest,
    proto_model_oauth_pb.OAuthToken,
    (request: proto_user_user_pb.RegisterRequest) => {
      return request.serializeBinary();
    },
    proto_model_oauth_pb.OAuthToken.deserializeBinary
  );

  register(
    request: proto_user_user_pb.RegisterRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_model_oauth_pb.OAuthToken>;

  register(
    request: proto_user_user_pb.RegisterRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: proto_model_oauth_pb.OAuthToken) => void): grpcWeb.ClientReadableStream<proto_model_oauth_pb.OAuthToken>;

  register(
    request: proto_user_user_pb.RegisterRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: proto_model_oauth_pb.OAuthToken) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/user.User/Register',
        request,
        metadata || {},
        this.methodDescriptorRegister,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/user.User/Register',
    request,
    metadata || {},
    this.methodDescriptorRegister);
  }

  methodDescriptorLogin = new grpcWeb.MethodDescriptor(
    '/user.User/Login',
    grpcWeb.MethodType.UNARY,
    proto_user_user_pb.LoginRequest,
    proto_model_oauth_pb.OAuthToken,
    (request: proto_user_user_pb.LoginRequest) => {
      return request.serializeBinary();
    },
    proto_model_oauth_pb.OAuthToken.deserializeBinary
  );

  login(
    request: proto_user_user_pb.LoginRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_model_oauth_pb.OAuthToken>;

  login(
    request: proto_user_user_pb.LoginRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: proto_model_oauth_pb.OAuthToken) => void): grpcWeb.ClientReadableStream<proto_model_oauth_pb.OAuthToken>;

  login(
    request: proto_user_user_pb.LoginRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: proto_model_oauth_pb.OAuthToken) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/user.User/Login',
        request,
        metadata || {},
        this.methodDescriptorLogin,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/user.User/Login',
    request,
    metadata || {},
    this.methodDescriptorLogin);
  }

  methodDescriptorInfo = new grpcWeb.MethodDescriptor(
    '/user.User/Info',
    grpcWeb.MethodType.UNARY,
    google_protobuf_empty_pb.Empty,
    proto_user_user_pb.InfoResponse,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    proto_user_user_pb.InfoResponse.deserializeBinary
  );

  info(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<proto_user_user_pb.InfoResponse>;

  info(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: proto_user_user_pb.InfoResponse) => void): grpcWeb.ClientReadableStream<proto_user_user_pb.InfoResponse>;

  info(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: proto_user_user_pb.InfoResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/user.User/Info',
        request,
        metadata || {},
        this.methodDescriptorInfo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/user.User/Info',
    request,
    metadata || {},
    this.methodDescriptorInfo);
  }

}

