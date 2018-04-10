import {Component, NgModule, OnInit} from '@angular/core';
import {CommonModule}                from '@angular/common';
import {SignupComponent}             from './signup.component';
import { FormsModule }           from '@angular/forms';
import {SignUpRoutingModule} from './signup.route.module';
@NgModule({
  imports: [
    SignUpRoutingModule,
    CommonModule,
    FormsModule
  ],
  declarations: [SignupComponent],
  exports: [
    SignupComponent
  ]
})
export  class SignupModule {

}
