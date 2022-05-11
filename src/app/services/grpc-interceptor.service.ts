import { isPlatformServer } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Message } from 'google-protobuf';
import { UnaryInterceptor, UnaryResponse, Request } from 'grpc-web';
import { OauthService } from './oauth.service';

@Injectable({
  providedIn: 'root',
})
export class GrpcInterceptorService<REQ extends Message = Message, RESP extends Message =Message>
implements UnaryInterceptor<REQ, RESP> {
  constructor(
    private oauthService:OauthService,
    @Inject(PLATFORM_ID) private platformId:Object,
  ) {}

  async intercept(
    request: Request<REQ, RESP>,
    invoker: (request: Request<REQ, RESP>) =>
    Promise<UnaryResponse<REQ, RESP>>,
  ): Promise<UnaryResponse<REQ, RESP>> {
    const accessToken = await this.oauthService.getAccessToken();
    const reqMeta = request.getMetadata();
    reqMeta['Authorization'] = reqMeta['Authorization'] ?? `Bearer ${accessToken}`;
    return invoker(request).then((response) => {
      const isServer = isPlatformServer(this.platformId);
      // You can also do something with response metadata here.

      console.log(
        '%c[[grpc]]: ',
        'color: red ',
        isServer ? 'on the server' : 'in the browser',
        request.getMethodDescriptor().getName(),
        isServer ? '' : request.getRequestMessage().toObject(),
        isServer ? '' : response.getResponseMessage().toObject(),
      );
      return response;
    }, (err) => {
      const isServer = isPlatformServer(this.platformId);
      console.warn(
        '%c[[grpc]]: ',
        'color: red ',
        isServer ? 'on the server' : 'in the browser',
        request.getMethodDescriptor().getName(),
        isServer ? '' : request.getRequestMessage(),
        isServer ? err.message : err,
      );
      return Promise.reject(err);
    });
  }
}
