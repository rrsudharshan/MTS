import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {LoginModule, SignupModule} from 'reusable_module';
import {HeroService} from 'reusable_module';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // LoginModule,
    // SignupModule,
    AppRoutingModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
