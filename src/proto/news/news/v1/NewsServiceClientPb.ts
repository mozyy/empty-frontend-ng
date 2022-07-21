/**
 * @fileoverview gRPC-Web generated client stub for news.news.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as news_news_v1_news_pb from '../../../news/news/v1/news_pb';


export class NewsServiceClient {
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

  methodDescriptorList = new grpcWeb.MethodDescriptor(
    '/news.news.v1.NewsService/List',
    grpcWeb.MethodType.UNARY,
    news_news_v1_news_pb.ListRequest,
    news_news_v1_news_pb.ListResponse,
    (request: news_news_v1_news_pb.ListRequest) => {
      return request.serializeBinary();
    },
    news_news_v1_news_pb.ListResponse.deserializeBinary
  );

  list(
    request: news_news_v1_news_pb.ListRequest,
    metadata: grpcWeb.Metadata | null): Promise<news_news_v1_news_pb.ListResponse>;

  list(
    request: news_news_v1_news_pb.ListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: news_news_v1_news_pb.ListResponse) => void): grpcWeb.ClientReadableStream<news_news_v1_news_pb.ListResponse>;

  list(
    request: news_news_v1_news_pb.ListRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: news_news_v1_news_pb.ListResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/news.news.v1.NewsService/List',
        request,
        metadata || {},
        this.methodDescriptorList,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/news.news.v1.NewsService/List',
    request,
    metadata || {},
    this.methodDescriptorList);
  }

  methodDescriptorDetail = new grpcWeb.MethodDescriptor(
    '/news.news.v1.NewsService/Detail',
    grpcWeb.MethodType.UNARY,
    news_news_v1_news_pb.DetailRequest,
    news_news_v1_news_pb.DetailResponse,
    (request: news_news_v1_news_pb.DetailRequest) => {
      return request.serializeBinary();
    },
    news_news_v1_news_pb.DetailResponse.deserializeBinary
  );

  detail(
    request: news_news_v1_news_pb.DetailRequest,
    metadata: grpcWeb.Metadata | null): Promise<news_news_v1_news_pb.DetailResponse>;

  detail(
    request: news_news_v1_news_pb.DetailRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: news_news_v1_news_pb.DetailResponse) => void): grpcWeb.ClientReadableStream<news_news_v1_news_pb.DetailResponse>;

  detail(
    request: news_news_v1_news_pb.DetailRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: news_news_v1_news_pb.DetailResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/news.news.v1.NewsService/Detail',
        request,
        metadata || {},
        this.methodDescriptorDetail,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/news.news.v1.NewsService/Detail',
    request,
    metadata || {},
    this.methodDescriptorDetail);
  }

}

