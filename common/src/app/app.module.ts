import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {LoginModule} from './modules/login/login.module';
import {SignupModule} from './modules/signup/signup.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    LoginModule ,
    SignupModule// import it into our @NgModule block
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}
