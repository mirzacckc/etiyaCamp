import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LocalStrorageService } from '../../storage/services/local-storage/local-strorage.service';
import { UserForLoginModel } from '../models/userForLoginModel';
import { UserLoginResponseModel } from '../models/userLoginResponseModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apicontrollerUrl:string = `${environment.apiUrl}/auth`;

  constructor(private httpClient:HttpClient, private localStrorageService:LocalStrorageService) { }

  login(userForLoginModel:UserForLoginModel): Observable<UserLoginResponseModel>{
    return this.httpClient.post<UserLoginResponseModel>(`${this.apicontrollerUrl}/login`,userForLoginModel)
  }

  saveAuth(userLoginResponseModel:UserLoginResponseModel){
    this.localStrorageService.set('token',userLoginResponseModel.access_token)

  }
}
