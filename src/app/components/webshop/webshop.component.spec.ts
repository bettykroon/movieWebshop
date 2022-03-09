import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IMovies } from 'src/app/models/IMovies';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { MockcategoriesService } from 'src/app/services/categories/mock/mockcategories.service';
import { MockwebshopService } from 'src/app/services/webshop/mock/mockwebshop.service';
import { WebshopService } from 'src/app/services/webshop/webshop.service';

import { WebshopComponent } from './webshop.component';

describe('WebshopComponent', () => {
  let component: WebshopComponent;
  let fixture: ComponentFixture<WebshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebshopComponent ],
      imports: [ HttpClientModule ],
      providers: [ {provide: WebshopService, useClass: MockwebshopService}, {provide: CategoriesService, useClass: MockcategoriesService} ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add to cart', () => {
    component.productsInCart.length = 0;

    expect(component.productsInCart.length).toBe(0);

    let movie: IMovies = {id: 1, name: 'Movie', imageUrl: 'image.png', description: 'hello', price: 99, year: 2022, added: '2022-03-09', productCategory: []};

    component.addToCart(movie);

    expect(component.productsInCart.length).toBe(1);
  });

  it('should contain 2 movies', () => {
    expect(component.webshop.length).toBe(2);
  });

  it('should contain 3 categories', () => {
    expect(component.categories.length).toBe(3);
  });

});
