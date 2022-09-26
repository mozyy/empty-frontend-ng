/**
 * @fileoverview gRPC-Web generated client stub for sms.sms.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as sms_sms_v1_sms_pb from '../../../sms/sms/v1/sms_pb';


export class SMSServiceClient {
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

  methodDescriptorSend = new grpcWeb.MethodDescriptor(
    '/sms.sms.v1.SMSService/Send',
    grpcWeb.MethodType.UNARY,
    sms_sms_v1_sms_pb.SendRequest,
    sms_sms_v1_sms_pb.SendResponse,
    (request: sms_sms_v1_sms_pb.SendRequest) => {
      return request.serializeBinary();
    },
    sms_sms_v1_sms_pb.SendResponse.deserializeBinary
  );

  send(
    request: sms_sms_v1_sms_pb.SendRequest,
    metadata: grpcWeb.Metadata | null): Promise<sms_sms_v1_sms_pb.SendResponse>;

  send(
    request: sms_sms_v1_sms_pb.SendRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: sms_sms_v1_sms_pb.SendResponse) => void): grpcWeb.ClientReadableStream<sms_sms_v1_sms_pb.SendResponse>;

  send(
    request: sms_sms_v1_sms_pb.SendRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: sms_sms_v1_sms_pb.SendResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/sms.sms.v1.SMSService/Send',
        request,
        metadata || {},
        this.methodDescriptorSend,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/sms.sms.v1.SMSService/Send',
    request,
    metadata || {},
    this.methodDescriptorSend);
  }

  methodDescriptorValidation = new grpcWeb.MethodDescriptor(
    '/sms.sms.v1.SMSService/Validation',
    grpcWeb.MethodType.UNARY,
    sms_sms_v1_sms_pb.ValidationRequest,
    sms_sms_v1_sms_pb.ValidationResponse,
    (request: sms_sms_v1_sms_pb.ValidationRequest) => {
      return request.serializeBinary();
    },
    sms_sms_v1_sms_pb.ValidationResponse.deserializeBinary
  );

  validation(
    request: sms_sms_v1_sms_pb.ValidationRequest,
    metadata: grpcWeb.Metadata | null): Promise<sms_sms_v1_sms_pb.ValidationResponse>;

  validation(
    request: sms_sms_v1_sms_pb.ValidationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: sms_sms_v1_sms_pb.ValidationResponse) => void): grpcWeb.ClientReadableStream<sms_sms_v1_sms_pb.ValidationResponse>;

  validation(
    request: sms_sms_v1_sms_pb.ValidationRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: sms_sms_v1_sms_pb.ValidationResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/sms.sms.v1.SMSService/Validation',
        request,
        metadata || {},
        this.methodDescriptorValidation,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/sms.sms.v1.SMSService/Validation',
    request,
    metadata || {},
    this.methodDescriptorValidation);
  }

}

