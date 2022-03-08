import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IMovies } from 'src/app/models/IMovies';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WebshopService {
  private webshop = new Subject<IMovies[]>();
  webshop$ = this.webshop.asObservable();

  constructor(private http: HttpClient) { }

  getData(){
    this.http
      .get<IMovies[]>( environment.baseUrl + 'products' )
      .subscribe((data) => {
        console.log(data);
        this.webshop.next(data);        
      });
  }
}
