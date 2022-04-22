import { Injectable } from '@angular/core';
import { Message } from 'google-protobuf';
import { UnaryInterceptor, UnaryResponse, Request } from 'grpc-web';
import { OauthService } from './oauth.service';

@Injectable({
  providedIn: 'root',
})
export class GrpcInterceptorService<REQ extends Message = Message, RESP extends Message =Message>
implements UnaryInterceptor<REQ, RESP> {
  constructor(private oauthService:OauthService) {}

  async intercept(
    request: Request<REQ, RESP>,
    invoker: (request: Request<REQ, RESP>) =>
    Promise<UnaryResponse<REQ, RESP>>,
  ): Promise<UnaryResponse<REQ, RESP>> {
    const accessToken = await this.oauthService.getAccessToken();
    const reqMeta = request.getMetadata();
    reqMeta['Authorization'] = reqMeta['Authorization'] ?? `Bearer ${accessToken}`;
    return invoker(request).then((response) => {
      // You can also do something with response metadata here.
      console.log(
        '%c[[grpc]]: ',
        'color: red ',
        request.getMethodDescriptor().getName(),
        request.getRequestMessage().toObject(),
        response.getResponseMessage().toObject(),
      );
      return response;
    }, (err) => {
      console.warn(
        '%c[[grpc]]: ',
        'color: red ',
        request.getMethodDescriptor().getName(),
        request.getRequestMessage(),
        err,
      );
      return Promise.reject(err);
    });
  }
}
