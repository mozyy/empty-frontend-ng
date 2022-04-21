import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent as LoginIndexComponent } from './login.component';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from '../../shared/material.module';

@NgModule({
  declarations: [
    LoginIndexComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
})
export class LoginModule { }
