import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { MaterialModule } from './shared/material.module';
import { MenuComponent } from './components/menu/menu.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { NewsDetailComponent } from './pages/news-detail/news-detail.component';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    HomeComponent, PageNotFoundComponent,
    MenuComponent, LayoutComponent, NewsDetailComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule.forRoot([]),
  ],
})
export class ComponentsModule { }
