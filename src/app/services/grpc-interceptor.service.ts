import { isPlatformServer } from '@angular/common';
import {
  Inject, Injectable, Injector, PLATFORM_ID,
} from '@angular/core';
import { Message } from 'google-protobuf';
import { UnaryInterceptor, UnaryResponse, Request } from 'grpc-web';
import { firstValueFrom } from 'rxjs';
// eslint-disable-next-line import/no-cycle
import { OauthService } from '../grpc/user/oauth.service';

@Injectable({
  providedIn: 'root',
})
export class GrpcInterceptorService<REQ extends Message = Message, RESP extends Message =Message>
implements UnaryInterceptor<REQ, RESP> {
  private oauthService?: OauthService;

  private oauthWhiteList = [
    '/user.oauth.v1.OAuthService/Token',
    '/user.login.v1.LoginService/Login',
  ];

  constructor(
    private injector: Injector,
    @Inject(PLATFORM_ID) private platformId:Object,
  ) {
  }

  getOauthService() {
    if (!this.oauthService) {
      this.oauthService = this.injector.get(OauthService);
    }
    return this.oauthService;
  }

  async intercept(
    request: Request<REQ, RESP>,
    invoker: (request: Request<REQ, RESP>) =>
    Promise<UnaryResponse<REQ, RESP>>,
  ): Promise<UnaryResponse<REQ, RESP>> {
    const requestName = request.getMethodDescriptor().getName();
    if (!this.oauthWhiteList.includes(requestName)) {
      const accessToken = await firstValueFrom(this.getOauthService().getAccessToken());
      const reqMeta = request.getMetadata();
      reqMeta['Authorization'] = reqMeta['Authorization'] ?? `Bearer ${accessToken}`;
    }
    return invoker(request).then((response) => {
      const isServer = isPlatformServer(this.platformId);
      // You can also do something with response metadata here.

      console.log(
        '%c[[grpc]]: ',
        'color: red ',
        isServer ? 'on the server' : 'in the browser',
        requestName,
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
        requestName,
        isServer ? '' : request.getRequestMessage(),
        isServer ? err.message : err,
      );
      return Promise.reject(err);
    });
  }
}
