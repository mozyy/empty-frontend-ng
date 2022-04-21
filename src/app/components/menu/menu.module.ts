import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MenuComponent } from './menu.component';
import { AppRoutingModule } from '../../app-routing.module';

@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatExpansionModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
  ],
  exports: [MenuComponent],
})
export class MenuModule { }
