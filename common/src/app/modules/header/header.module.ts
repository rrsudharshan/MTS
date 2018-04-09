import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import {UserDataService} from './service/user-data.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeaderComponent, SignupComponent, LoginComponent],
  exports: [
    HeaderComponent,LoginComponent,SignupComponent
  ],
  providers:[UserDataService]
})
export class HeaderModule { }
