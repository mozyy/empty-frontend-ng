import { MediaMatcher } from '@angular/cdk/layout';
import {
  ChangeDetectorRef, Component, OnDestroy, OnInit,
} from '@angular/core';
import { SourcesItem } from '../../../proto/manage/sources_pb';
import { SourceService } from '../../grpc/manage/source.service';

@Component({
  selector: 'efn-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit, OnDestroy {
  mobileQuery: MediaQueryList;

  routers:SourcesItem.AsObject[] = [];

  private mobileQueryListener: () => void;

  constructor(
    media: MediaMatcher,
    changeDetectorRef: ChangeDetectorRef,
    public source:SourceService,

  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', this.mobileQueryListener);
  }

  ngOnInit(): void {
    this.source.source()
      .subscribe((resp) => this.routers = resp);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('change', this.mobileQueryListener);
  }
}
