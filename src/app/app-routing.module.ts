import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { HomepageComponent } from './component/homepage/homepage.component';
import { LocatorComponent } from './component/locator/locator.component';

const routes: Routes = [
  {path: '', redirectTo:'homepage', pathMatch: "full"},
  {path: 'homepage', component: HomepageComponent},
  {path: 'login', component : LoginComponent},
  {path: 'locator', component: LocatorComponent},
  {path: 'register', component : RegisterComponent},
  {path: 'forgot-password', component : ForgotPasswordComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
