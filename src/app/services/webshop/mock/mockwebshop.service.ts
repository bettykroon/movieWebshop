import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IMovies } from 'src/app/models/IMovies';

@Injectable({
  providedIn: 'root'
})
export class MockwebshopService {
  private webshop = new Subject<IMovies[]>();
  webshop$ = this.webshop.asObservable();

  testData: IMovies[] = [
    {id: 25, name: "New Movie", imageUrl: "image.png", description: "very good movie", price: 199, year: 2022, added: "2022-03-09", productCategory: []},
    {id: 26, name: "Another Movie", imageUrl: "movie.png", description: "very very good movie", price: 99, year: 2021, added: "2021-03-09", productCategory: []}];

  getData(){
    this.webshop.next(this.testData);
  }
}
