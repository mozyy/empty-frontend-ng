import { Inject, Injectable } from '@angular/core';
import { AppConfig, APP_CONFIG } from '../app.config';
import { GrpcInterceptorService } from './grpc-interceptor.service';

@Injectable({
  providedIn: 'root',
})
export class GrpcConfigService {
  hostname: string;

  credentials?: {
    [index: string]: string;
  } | null;

  options?: {
    [index: string]: any;
  } | null;

  constructor(@Inject(APP_CONFIG) config: AppConfig, interceptor:GrpcInterceptorService) {
    this.hostname = config.grpcHost;
    this.credentials = null;
    this.options = { unaryInterceptors: [interceptor] };
  }
}
