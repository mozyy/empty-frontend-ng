import { Component } from '@angular/core';
import { NewsService } from '../../../grpc/news/news.service';
import { CryptoService } from '../../../services/crypto.service';

@Component({
  selector: 'efn-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  newsList$ = this.news.getNews();

  constructor(private news: NewsService, private crypto:CryptoService) { }
}
