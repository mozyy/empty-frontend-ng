import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MaterialModule } from './shared/material.module';
import { MenuComponent } from './components/menu/menu.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';

@NgModule({
  declarations: [HomeComponent, PageNotFoundComponent,
    MenuComponent, LayoutComponent, NewsDetailComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
  ],
})
export class ComponentsModule { }
