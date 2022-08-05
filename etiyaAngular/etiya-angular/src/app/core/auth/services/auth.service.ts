import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MessageResultModel } from '../../models/messageResultModel';
import { LocalStrorageService } from '../../storage/services/local-storage/local-strorage.service';
import { UserForLoginModel } from '../models/userForLoginModel';
import { UserLoginResponseModel } from '../models/userLoginResponseModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apicontrollerUrl:string = `${environment.apiUrl}/auth`;


  constructor(private httpClient:HttpClient, private localStrorageService:LocalStrorageService, 
  private jwtHelperService:JwtHelperService) { }

  login(userForLoginModel:UserForLoginModel): Observable<UserLoginResponseModel>{
    return this.httpClient.post<UserLoginResponseModel>(`${this.apicontrollerUrl}/login`,userForLoginModel)
  }

  saveAuth(userLoginResponseModel:UserLoginResponseModel){
    this.localStrorageService.set('token',userLoginResponseModel.access_token)

  }

  test():Observable<MessageResultModel>{
    return this.httpClient.get<MessageResultModel>(`${this.apicontrollerUrl}/test`)
  }

  get isAuthhenticated(): boolean{
    if(!this.jwtHelperService.tokenGetter()) return false;
    if(this.jwtHelperService.isTokenExpired()) return false;
    return true;
  }
}

export function tokenGetter(){
  return localStorage.getItem('token')
}
