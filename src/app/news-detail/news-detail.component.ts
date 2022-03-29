import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { DetailRequest, DetailResponse } from 'src/proto/news/news_pb';
import { NewsService } from '../grpc/news.service';

@Component({
  selector: 'efn-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss'],
})
export class NewsDetailComponent implements OnInit {
  detail:DetailResponse | undefined;

  constructor(private route: ActivatedRoute, private news:NewsService) { }

  ngOnInit(): void {
    this.getDetail();
  }

  getDetail() {
    const link = this.route.snapshot.paramMap.get('link')!;
    this.news.getDetail(link).subscribe((resp) => this.detail = resp);
  }
}
