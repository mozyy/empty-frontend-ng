import { Component } from '@angular/core';
import { CryptoService } from 'src/app/grpc/crypto.service';
import { NewsService } from '../../grpc/news.service';

@Component({
  selector: 'efn-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  newsList$ = this.news.getNews();

  constructor(private news: NewsService, private crypto:CryptoService) { }
}
