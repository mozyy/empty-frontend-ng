import { NgModule } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';

import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AppConfigProvider } from './app.config';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { LayoutModule } from './layout/layout.module';
import { ModalModule } from './components/modal/modal.module';
import { ApiModule, BASE_PATH } from './openapi/questions';

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserTransferStateModule,
    AppRoutingModule,
    LayoutModule,
    ModalModule,
    ApiModule,
  ],
  providers: [
    AppConfigProvider,
    { provide: BASE_PATH, useValue: 'http://localhost:3000/x' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
