import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatListModule } from '@angular/material/list';
import { AppRoutingModule } from '../app-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { MenuComponent } from './layout/components/menu/menu.component';

@NgModule({
  declarations: [LayoutComponent, MenuComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatSidenavModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatExpansionModule,
    MatButtonModule,
    MatBadgeModule,
    MatListModule,
  ],
})
export class LayoutModule { }
