import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailResponse } from '../../../../proto/news/news_pb';
import { NewsService } from '../../../grpc/news/news.service';
import { CryptoService } from '../../../services/crypto.service';

@Component({
  selector: 'efn-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  detail:DetailResponse.AsObject | undefined;

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
    });
  }
}
