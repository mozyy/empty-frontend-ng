/**
 * @fileoverview gRPC-Web generated client stub for user.login.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as user_login_v1_login_pb from '../../../user/login/v1/login_pb';


export class UserServiceClient {
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

  methodDescriptorRegister = new grpcWeb.MethodDescriptor(
    '/user.login.v1.UserService/Register',
    grpcWeb.MethodType.UNARY,
    user_login_v1_login_pb.RegisterRequest,
    user_login_v1_login_pb.RegisterResponse,
    (request: user_login_v1_login_pb.RegisterRequest) => {
      return request.serializeBinary();
    },
    user_login_v1_login_pb.RegisterResponse.deserializeBinary
  );

  register(
    request: user_login_v1_login_pb.RegisterRequest,
    metadata: grpcWeb.Metadata | null): Promise<user_login_v1_login_pb.RegisterResponse>;

  register(
    request: user_login_v1_login_pb.RegisterRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: user_login_v1_login_pb.RegisterResponse) => void): grpcWeb.ClientReadableStream<user_login_v1_login_pb.RegisterResponse>;

  register(
    request: user_login_v1_login_pb.RegisterRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: user_login_v1_login_pb.RegisterResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/user.login.v1.UserService/Register',
        request,
        metadata || {},
        this.methodDescriptorRegister,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/user.login.v1.UserService/Register',
    request,
    metadata || {},
    this.methodDescriptorRegister);
  }

  methodDescriptorLogin = new grpcWeb.MethodDescriptor(
    '/user.login.v1.UserService/Login',
    grpcWeb.MethodType.UNARY,
    user_login_v1_login_pb.LoginRequest,
    user_login_v1_login_pb.LoginResponse,
    (request: user_login_v1_login_pb.LoginRequest) => {
      return request.serializeBinary();
    },
    user_login_v1_login_pb.LoginResponse.deserializeBinary
  );

  login(
    request: user_login_v1_login_pb.LoginRequest,
    metadata: grpcWeb.Metadata | null): Promise<user_login_v1_login_pb.LoginResponse>;

  login(
    request: user_login_v1_login_pb.LoginRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: user_login_v1_login_pb.LoginResponse) => void): grpcWeb.ClientReadableStream<user_login_v1_login_pb.LoginResponse>;

  login(
    request: user_login_v1_login_pb.LoginRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: user_login_v1_login_pb.LoginResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/user.login.v1.UserService/Login',
        request,
        metadata || {},
        this.methodDescriptorLogin,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/user.login.v1.UserService/Login',
    request,
    metadata || {},
    this.methodDescriptorLogin);
  }

  methodDescriptorInfo = new grpcWeb.MethodDescriptor(
    '/user.login.v1.UserService/Info',
    grpcWeb.MethodType.UNARY,
    user_login_v1_login_pb.InfoRequest,
    user_login_v1_login_pb.InfoResponse,
    (request: user_login_v1_login_pb.InfoRequest) => {
      return request.serializeBinary();
    },
    user_login_v1_login_pb.InfoResponse.deserializeBinary
  );

  info(
    request: user_login_v1_login_pb.InfoRequest,
    metadata: grpcWeb.Metadata | null): Promise<user_login_v1_login_pb.InfoResponse>;

  info(
    request: user_login_v1_login_pb.InfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: user_login_v1_login_pb.InfoResponse) => void): grpcWeb.ClientReadableStream<user_login_v1_login_pb.InfoResponse>;

  info(
    request: user_login_v1_login_pb.InfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: user_login_v1_login_pb.InfoResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/user.login.v1.UserService/Info',
        request,
        metadata || {},
        this.methodDescriptorInfo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/user.login.v1.UserService/Info',
    request,
    metadata || {},
    this.methodDescriptorInfo);
  }

}

