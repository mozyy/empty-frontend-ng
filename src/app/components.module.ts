import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { MaterialModule } from './shared/material.module';
import { MenuComponent } from './components/menu/menu.component';
import { LayoutComponent } from './layout/layout/layout.component';

@NgModule({
  declarations: [
    PageNotFoundComponent,
    MenuComponent, LayoutComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule.forRoot([]),
  ],
})
export class ComponentsModule { }
