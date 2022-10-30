import { isPlatformServer } from '@angular/common';
import { Component, Inject, OnInit, Optional, PLATFORM_ID } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Request } from 'express';
import { REQUEST } from '@nguniversal/express-engine/tokens';
import { getIcp } from './utils/status';

@Component({
  selector: 'efn-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit  {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private title: Title,
    @Optional() @Inject(REQUEST) private request:Request,
  ){
    
  }
  ngOnInit(): void {
    if (isPlatformServer(this.platformId)) {
      const icp = getIcp(this.request?.hostname || '')
      this.title.setTitle(icp.name)
    }
  }
}
