import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Customer} from 'src/app/models/customer';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  apiControllerUrl: string = `${environment.apiUrl}/customers` //property

  constructor(private httpClient:HttpClient) { }

  add(customer:Customer): Observable<Customer>{
    return this.httpClient.post<Customer>(this.apiControllerUrl,customer);
  }
}
