import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { lib } from 'crypto-js';
import { switchMap, tap } from 'rxjs';
import { CryptoService } from 'src/app/grpc/crypto.service';
import { DetailRequest, DetailResponse } from 'src/proto/news/news_pb';
import * as proto from 'google-protobuf';
import { NewsService } from '../../grpc/news.service';

@Component({
  selector: 'efn-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss'],
})
export class NewsDetailComponent implements OnInit {
  detail:DetailResponse | undefined;

  constructor(
    private route: ActivatedRoute,
    private news:NewsService,
    private crypto:CryptoService,
  ) { }

  ngOnInit(): void {
    this.getDetail();
  }

  getDetail() {
    const link = this.route.snapshot.paramMap.get('link')!;
    this.news.getDetail(link).subscribe((resp) => {
      this.detail = resp;
      const a = this.crypto.encProtoAES(resp);
      const b = this.crypto.dncProtoAES(a, DetailResponse);
      console.log(proto.Message.equals(resp, b));
    });
  }
}
