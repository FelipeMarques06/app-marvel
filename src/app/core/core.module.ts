import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from '../shared/material/material.module';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    HeaderComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class CoreModule { }
