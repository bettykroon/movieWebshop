import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ICategories } from 'src/app/models/ICategories';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private categories = new Subject<ICategories[]>();
  categories$ = this.categories.asObservable();

  constructor(private http: HttpClient) { }

  getData(){
    this.http
      .get<ICategories[]>(environment.baseUrl + 'categories')
      .subscribe((data) => {
        this.categories.next(data);
      });
  }
}
