import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MaterialModule } from './shared/material.module';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [HomeComponent, PageNotFoundComponent, MenuComponent],
  imports: [
    CommonModule,
    MaterialModule,
  ],
})
export class ComponentsModule { }
