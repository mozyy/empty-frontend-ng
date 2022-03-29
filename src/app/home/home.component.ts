import { MediaMatcher } from '@angular/cdk/layout';
import {
  ChangeDetectorRef, Component, OnDestroy, OnInit,
} from '@angular/core';
import { SourcesItem } from 'src/proto/manage/sources_pb';
import { NewsItem } from 'src/proto/news/news_pb';
import { NewsService } from '../grpc/news.service';
import { SourceService } from '../grpc/source.service';

@Component({
  selector: 'efn-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  mobileQuery: MediaQueryList;

  routers: SourcesItem[] = [];

  newsList = this.news.getNews();

  private mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    public source:SourceService,
    private news: NewsService,
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', this.mobileQueryListener);
  }

  ngOnInit(): void {
    // this.source.getSource(new SourcesItem()).subscribe((data) => {
    //   this.routers = data;
    // });
    console.log(this.news);
    // this.news.getNews().subscribe((data) => {
    //   this.newsList = data;
    // });
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('change', this.mobileQueryListener);
  }
}
