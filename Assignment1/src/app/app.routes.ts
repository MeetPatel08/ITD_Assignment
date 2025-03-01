import { Routes } from '@angular/router';
import { HomeComponent } from './auth/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AboutUsComponent } from './auth/about-us/about-us.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'home',component:HomeComponent},
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'about',component:AboutUsComponent},
    {path:'forgot-password',component:ForgotPasswordComponent}
];
