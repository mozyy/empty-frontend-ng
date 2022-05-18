import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';
import { Routes } from '@angular/router';
// @ts-ignore
import xhr from 'xhr2';
import { AppShellComponent } from './app-shell/app-shell.component';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';

const routes: Routes = [{ path: 'shell', component: AppShellComponent }];

global.XMLHttpRequest = xhr;

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ServerTransferStateModule,
    BrowserModule.withServerTransition({ appId: 'angular-starter' }),
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule { }
