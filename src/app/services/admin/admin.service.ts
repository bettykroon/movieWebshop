import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IOrder } from 'src/app/models/IOrder';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private admin = new Subject<IOrder[]>();
  admin$ = this.admin.asObservable();

  constructor(private http: HttpClient) { }

  getOrders(){
    this.http
      .get<IOrder[]>(environment.baseUrl + 'orders?companyId=25')
      .subscribe((data) => {
        this.admin.next(data);
        console.log(data);
      })
  }
}
