import { TestBed } from '@angular/core/testing';

import { GrpcConfigService } from './grpc-config.service';

describe('GrpcConfigService', () => {
  let service: GrpcConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrpcConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
