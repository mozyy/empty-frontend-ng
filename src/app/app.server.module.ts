import { NgModule } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';
import { Routes } from '@angular/router';
import { AppShellComponent } from './app-shell/app-shell.component';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';

const routes: Routes = [{ path: 'shell', component: AppShellComponent }];

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ServerTransferStateModule,
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule { }
