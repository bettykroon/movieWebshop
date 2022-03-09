import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ICategories } from 'src/app/models/ICategories';

@Injectable({
  providedIn: 'root'
})
export class MockcategoriesService {
  private categories = new Subject<ICategories[]>();
  categories$ = this.categories.asObservable();

  testData: ICategories[] = [{id: 1, name: "Action"}, {id: 2, name: "Comedy"}, {id: 3, name: "Thriller"}];

  getData(){
    this.categories.next(this.testData);
  }
}
