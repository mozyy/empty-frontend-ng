import { Injectable } from '@angular/core';
import { Message } from 'google-protobuf';
import { UnaryInterceptor, UnaryResponse, Request } from 'grpc-web';

@Injectable({
  providedIn: 'root',
})
export class GrpcInterceptorService<REQ extends Message = Message, RESP extends Message =Message>
implements UnaryInterceptor<REQ, RESP> {
  intercept(
    request: Request<REQ, RESP>,
    invoker: (request: Request<REQ, RESP>) =>
    Promise<UnaryResponse<REQ, RESP>>,
  ): Promise<UnaryResponse<REQ, RESP>> {
    return invoker(request).then((response) => {
      // You can also do something with response metadata here.
      console.log(
        '[[grpc]]: ',
        request.getMethodDescriptor().getName(),
        request.getRequestMessage().toObject(),
        response.getResponseMessage().toObject(),
      );
      return response;
    });
  }
}
