import { Component , ViewChild} from '@angular/core';
import {SignupComponent} from 'reusable_module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor() {

    console.log(SignupComponent);

  }



}
