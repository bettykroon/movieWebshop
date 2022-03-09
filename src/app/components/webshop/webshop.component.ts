import { Component, OnInit } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { ICategories } from 'src/app/models/ICategories';
import { IMovies } from 'src/app/models/IMovies';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { SearchService } from 'src/app/services/search/search.service';
import { WebshopService } from 'src/app/services/webshop/webshop.service';

@Component({
  selector: 'app-webshop',
  templateUrl: './webshop.component.html',
  styleUrls: ['./webshop.component.scss']
})
export class WebshopComponent implements OnInit {
  searchIcon = faMagnifyingGlass;

  webshop: IMovies[] = [];

  productsInCart: IMovies[] = [];

  totalprice: number = 0;

  categories: ICategories[] = [];

  search: IMovies[] = [];

  searchBtnClicked: boolean = false;

  movie: string = "";

  actionClicked: boolean = false;
  thrillerClicked: boolean = false;
  comedyClicked: boolean = false;
  scifiClicked: boolean = false;
  noCategory: boolean = true;

  constructor(private service: WebshopService, 
    private cservice: CategoriesService,
    private sservice: SearchService) { }

  ngOnInit(): void {
    let webshopString: string = localStorage.getItem('products') || '[]';
    this.productsInCart = JSON.parse(webshopString);

    let moviePrice = localStorage.getItem('totalPrice') || '0';
    this.totalprice = JSON.parse(moviePrice);

    this.service.webshop$.subscribe((dataFromApi) => {
      this.webshop = dataFromApi;
    });

    this.service.getData();

    this.cservice.categories$.subscribe((data) => {
      this.categories = data;
    });

    this.cservice.getData();    
  }

  addToCart(i: IMovies){
    this.productsInCart.push(i);
    localStorage.setItem('products', JSON.stringify(this.productsInCart));
  }

  totalPrice(price: IMovies["price"]){
    this.totalprice += price;
    localStorage.setItem('totalPrice', JSON.stringify(this.totalprice));
  }

  showMovies(i: number){
    if(i == 0){
      this.noCategory = false;
      this.actionClicked = true;
      this.thrillerClicked = false;
      this.comedyClicked = false;
      this.scifiClicked = false;
    } else if(i == 1){
      this.noCategory = false;
      this.actionClicked = false;
      this.thrillerClicked = true;
      this.comedyClicked = false;
      this.scifiClicked = false;
    } else if(i == 2){
      this.noCategory = false;
      this.actionClicked = false;
      this.thrillerClicked = false;
      this.comedyClicked = true;
      this.scifiClicked = false;
    } else if(i == 3) {
      this.noCategory = false;
      this.actionClicked = false;
      this.thrillerClicked = false;
      this.comedyClicked = false;
      this.scifiClicked = true;
    } else {
      this.noCategory = true;
      this.actionClicked = false;
      this.thrillerClicked = false;
      this.comedyClicked = false;
      this.scifiClicked = false;
    }
  }

  chosenMovie(movie: string){
    this.movie = movie;
  }

  searchMovie(){
    this.searchBtnClicked = true;
    this.sservice.search$.subscribe((data) => {
      this.search = data;
    });
    this.sservice.getData(this.movie);
  }
}
