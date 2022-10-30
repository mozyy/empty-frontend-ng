import { MediaMatcher } from '@angular/cdk/layout';
import { isPlatformBrowser } from '@angular/common';
import {
  ChangeDetectorRef, Component, Inject, OnDestroy, OnInit, Optional, PLATFORM_ID,
} from '@angular/core';
import { REQUEST } from '@nguniversal/express-engine/tokens';
import { Request } from 'express';
import { getIcp } from '../../utils/status';
import { Resource } from './components/menu/menu.component';

@Component({
  selector: 'efn-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit, OnDestroy {
  mobileQuery?: MediaQueryList;

  isBrowser: boolean;
  year = new Date().getFullYear()
  host = 'yyuck.com'
  icp?: any;

  routers:Resource[] = [];

  private mobileQueryListener = () => {};

  constructor(
    media: MediaMatcher,
    changeDetectorRef: ChangeDetectorRef,
    @Inject(PLATFORM_ID) platformId: Object,
    @Optional() @Inject(REQUEST) private request: Request,
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
    if (this.isBrowser) {
      this.mobileQuery = media.matchMedia('(max-width: 600px)');
      this.mobileQueryListener = () => changeDetectorRef.detectChanges();
      this.mobileQuery.addEventListener('change', this.mobileQueryListener);
    }
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      this.host = location.host
      this.icp = getIcp(this.host)
    } else {
      this.icp = getIcp(this.request?.hostname||'')
    }
  }

  ngOnDestroy(): void {
    if (this.isBrowser) {
      this.mobileQuery?.removeEventListener('change', this.mobileQueryListener);
    }
  }
}
