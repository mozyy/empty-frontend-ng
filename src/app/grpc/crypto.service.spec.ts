import { TestBed } from '@angular/core/testing';
import { Message } from 'google-protobuf';
import { NewsItem } from 'src/proto/news/news_pb';
import { Random } from 'mockjs';
import { CryptoService } from './crypto.service';

describe('CryptoService', () => {
  let service: CryptoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CryptoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should encrypt and decrypt proto message use aes', () => {
    const msg = new NewsItem();
    msg.setTitle(Random.word());
    const enc = service.encProtoAES(msg);
    const dec = service.dncProtoAES(enc, NewsItem);
    const equals = Message.equals(msg, dec);
    expect(equals).toBeTrue();
  });
});
