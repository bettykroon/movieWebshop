import { Component, OnInit } from '@angular/core';
import { IOrder } from 'src/app/models/IOrder';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  admin: IOrder[] = [];

  constructor(private service: AdminService) { }

  ngOnInit(): void {
    this.service.admin$.subscribe((dataFromApi) => {
      this.admin = dataFromApi;
    });
    this.service.getOrders();
  }

  deleteOrder(order: number){
    this.service.deleteOrder(order);
  }
}
