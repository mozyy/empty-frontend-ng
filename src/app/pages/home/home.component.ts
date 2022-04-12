import { Component } from '@angular/core';
import { NewsService } from '../../grpc/news.service';
import { CryptoService } from '../../services/crypto.service';

@Component({
  selector: 'efn-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  newsList$ = this.news.getNews();

  constructor(private news: NewsService, private crypto:CryptoService) { }
}
