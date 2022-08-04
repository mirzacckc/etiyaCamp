import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/models/order';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  
  apiControllerUrl: string = `${environment.apiUrl}/orders` //property

  constructor(private httpClient:HttpClient) { }

  getList(): Observable<Order[]>{
    return this.httpClient.get<Order[]>(this.apiControllerUrl);
  }

}
