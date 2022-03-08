import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IOrder } from 'src/app/models/IOrder';
import { AdminService } from 'src/app/services/admin/admin.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  admin: IOrder[] = [];

  constructor(private service: AdminService, private http: HttpClient) { }

  ngOnInit(): void {
    this.service.admin$.subscribe((dataFromApi) => {
      this.admin = dataFromApi;
    });
    this.service.getOrders();
    console.log("A", this.admin);
    
  }

  deleteOrder(order: number){
    console.log(order);
    this.http
      .delete<IOrder[]>(environment.baseUrl + 'orders/' + order)
      .subscribe(() => {
        location.reload();
      })
  }
}
