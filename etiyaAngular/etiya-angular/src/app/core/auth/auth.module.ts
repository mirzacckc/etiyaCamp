import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtModule } from "@auth0/angular-jwt";
import { tokenGetter } from './services/auth.service';
import { environment } from 'src/environments/environment';
import { AuthInterceptor } from './intercepters/auth/auth.interceptor';
import { StoreModule } from '@ngrx/store';
import { authReducers } from './store/auth.reducers';


@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config:{
        tokenGetter: tokenGetter,
        allowedDomains: [environment.apiUrl],
        disallowedRoutes: [],
      }}),
    StoreModule.forRoot(authReducers)],
    providers:[
      {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
    ]
})
export class AuthModule { }
