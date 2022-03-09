import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IOrder } from 'src/app/models/IOrder';

@Injectable({
  providedIn: 'root'
})
export class MockadminService {
  private admin = new Subject<IOrder[]>();
  admin$ = this.admin.asObservable();

  testData: IOrder[] = [
    {companyId: 25, createdBy: "me", id: 1, created: new Date, paymentMethod: "paypal", totalPrice: 199, status: 0, orderRows: []},
    {companyId: 29, createdBy: "you", id: 2, created: new Date, paymentMethod: "swish", totalPrice: 300, status: 0, orderRows: []}];

  getOrders(){
    this.admin.next(this.testData);
  };
}
