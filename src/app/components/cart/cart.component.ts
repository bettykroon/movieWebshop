import { Component, OnInit } from '@angular/core';
import { IMovies } from 'src/app/models/IMovies';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  moviesInCart: IMovies[] = [];

  totalprice: number = 0;

  constructor() { }

  ngOnInit(): void {
    let moviesInLs = localStorage.getItem('products') || '[]';
    this.moviesInCart = JSON.parse(moviesInLs);

    let priceInLs = localStorage.getItem('totalPrice') || '[]';
    this.totalprice = JSON.parse(priceInLs);
  }

  removeFromCart(i: number){
    this.moviesInCart.splice(i, 1);
    localStorage.setItem('products', JSON.stringify(this.moviesInCart));
  }

  removePrice(price: IMovies["price"]){
    this.totalprice -= price;
    console.log("totalPris efter ta bort", this.totalprice);
    localStorage.setItem('totalPrice', JSON.stringify(this.totalprice));
  }
}
