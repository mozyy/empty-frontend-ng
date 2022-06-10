/**
 * @fileoverview gRPC-Web generated client stub for user.oauth.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as user_oauth_v1_oauth_pb from '../../../user/oauth/v1/oauth_pb';


export class OAuthServiceClient {
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

  methodDescriptorToken = new grpcWeb.MethodDescriptor(
    '/user.oauth.v1.OAuthService/Token',
    grpcWeb.MethodType.UNARY,
    user_oauth_v1_oauth_pb.TokenRequest,
    user_oauth_v1_oauth_pb.TokenResponse,
    (request: user_oauth_v1_oauth_pb.TokenRequest) => {
      return request.serializeBinary();
    },
    user_oauth_v1_oauth_pb.TokenResponse.deserializeBinary
  );

  token(
    request: user_oauth_v1_oauth_pb.TokenRequest,
    metadata: grpcWeb.Metadata | null): Promise<user_oauth_v1_oauth_pb.TokenResponse>;

  token(
    request: user_oauth_v1_oauth_pb.TokenRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: user_oauth_v1_oauth_pb.TokenResponse) => void): grpcWeb.ClientReadableStream<user_oauth_v1_oauth_pb.TokenResponse>;

  token(
    request: user_oauth_v1_oauth_pb.TokenRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: user_oauth_v1_oauth_pb.TokenResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/user.oauth.v1.OAuthService/Token',
        request,
        metadata || {},
        this.methodDescriptorToken,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/user.oauth.v1.OAuthService/Token',
    request,
    metadata || {},
    this.methodDescriptorToken);
  }

}

