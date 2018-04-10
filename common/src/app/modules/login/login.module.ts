import {Component, NgModule, OnInit} from '@angular/core';
import {CommonModule}                from '@angular/common';
import {LoginComponent}             from './login.component';
import { FormsModule }           from '@angular/forms';
import {LoginRoutingModule} from './login.route.module';

@NgModule({
  imports: [
    LoginRoutingModule,
    CommonModule,
    FormsModule,
  ],
  declarations: [LoginComponent],
  exports: [
    LoginComponent
  ]
})
export  class LoginModule {

}
