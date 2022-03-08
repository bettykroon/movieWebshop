import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IMovies } from 'src/app/models/IMovies';
import { IOrder } from 'src/app/models/IOrder';
import { AdminService } from 'src/app/services/admin/admin.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  moviesInCart: IMovies[] = [];

  totalprice: number = 0;

  orders: IOrder[] = [];

  orderForm = this.fb.group({
    companyId: [25, Validators.required],
    created: [new Date()],
    createdBy: ['', Validators.required],
    totalPrice: [0],
    paymentMethod: ['Paypal'],
    orderRows: this.fb.array([])
  })

  constructor(private fb: FormBuilder, private http: HttpClient, private service: AdminService) { }

  ngOnInit(): void {
    let moviesInLs = localStorage.getItem('products') || '[]';
    this.moviesInCart = JSON.parse(moviesInLs); 

    let priceInLs = localStorage.getItem('totalPrice') || '[]';
    this.totalprice = JSON.parse(priceInLs);

    this.orderForm.patchValue({
      totalPrice: this.totalprice 
    });

    this.service.admin$.subscribe((dataFromApi) => {
      this.orders = dataFromApi;
    });
    this.service.getOrders();
    
    this.moviesInCart.forEach(()=>{
      this.rows();
    })
  }

  get orderRows(){
    return this.orderForm.get('orderRows') as FormArray;
  }

  addOrderrows(): FormGroup{
    return this.fb.group({
      amount: [0],
      id: [0],
      orderId: [0],
      product: [''],
      productId: [0]
    })
  }

  rows(){
    (<FormArray>this.orderForm.get('orderRows')).push(this.addOrderrows());
  }

  order(order: IOrder[]){
    console.log("order",order);
    localStorage.removeItem('totalPrice');
    localStorage.removeItem('products');
    this.http
      .post(environment.baseUrl + 'orders', order)
      .subscribe((status) => {
        console.log("status", status);
      });
  }
}
