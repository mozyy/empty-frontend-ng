import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AppConfigProvider } from './app.config';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { MenuModule } from './components/menu/menu.module';
import { LayoutModule } from './layout/layout.module';

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
    AppRoutingModule,
    MenuModule,
    LayoutModule,
  ],
  providers: [
    AppConfigProvider,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
