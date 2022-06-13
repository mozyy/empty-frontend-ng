import { MediaMatcher } from '@angular/cdk/layout';
import { isPlatformBrowser } from '@angular/common';
import {
  ChangeDetectorRef, Component, Inject, OnDestroy, OnInit, PLATFORM_ID,
} from '@angular/core';
import { Resource } from '../../../proto/system/resource/v1/resource_pb';
import { ResourceService } from '../../grpc/system/resource.service';

@Component({
  selector: 'efn-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit, OnDestroy {
  mobileQuery?: MediaQueryList;

  isBrowser: boolean;

  routers:Resource.AsObject[] = [];

  private mobileQueryListener = () => {};

  constructor(
    media: MediaMatcher,
    changeDetectorRef: ChangeDetectorRef,
    public resource: ResourceService,
    @Inject(PLATFORM_ID) platformId: Object,
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
      this.resource.source()
        .subscribe((resp) => this.routers = resp);
    }
  }

  ngOnDestroy(): void {
    if (this.isBrowser) {
      this.mobileQuery?.removeEventListener('change', this.mobileQueryListener);
    }
  }
}
