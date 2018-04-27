import {Component, NgModule, OnInit} from '@angular/core';
import {CommonModule}                from '@angular/common';
import {SignupComponent}             from './signup.component';
import { FormsModule }           from '@angular/forms';
import {SignUpRoutingModule} from './signup.route.module';
import {HeaderModule} from '../header/header.module';

@NgModule({
  imports: [
    SignUpRoutingModule,
    CommonModule,
    FormsModule,
    HeaderModule
  ],
  declarations: [SignupComponent],
  exports: [
    SignupComponent
  ]
})
export  class SignupModule {

}
