import { TestBed } from '@angular/core/testing';
import { Message } from 'google-protobuf';
import { Random } from 'mockjs';
import { NewsItem } from '../../proto/news/news_pb';
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
    const enc = service.encAES(msg);
    const dec = service.dncAES(enc, NewsItem);
    const equals = Message.equals(msg, dec);
    expect(equals).toBeTrue();
  });
});
