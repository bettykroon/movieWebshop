import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IMovies } from 'src/app/models/IMovies';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private search = new Subject<IMovies[]>();
  search$ = this.search.asObservable();

  constructor(private http: HttpClient) { }

  getData(movie: string){
    this.http
      .get<IMovies[]>(environment.baseUrl + 'search?searchText=' + movie)
      .subscribe((data) => {
        console.log(data);
        this.search.next(data);
      });
  }
}
