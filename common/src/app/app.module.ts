import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import {LoginModule} from './modules/login/login.module';
import {SignupModule} from './modules/signup/signup.module';
import { MyNewPipePipe } from './modules/pipe/my-new-pipe.pipe';
import { MyNewDirectiveDirective } from './modules/directive/my-new-directive.directive';
@NgModule({
  declarations: [
    AppComponent,
    MyNewPipePipe,
    MyNewDirectiveDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    SignupModule// import it into our @NgModule block
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}
