import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginModule} from './modules/login/login.module';

const routes: Routes = [
  {path: '', redirectTo:'/login' , pathMatch: 'full'},
  {path: 'login', loadChildren:'app/login/login.module#LoginModule'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
