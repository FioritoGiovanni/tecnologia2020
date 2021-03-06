import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(
    private http:HttpClient,
  ) {}

  searchFood(query:string)
  {
    const url =  `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${query}&page_size=10&json=true`;
    const headers = new HttpHeaders("Content-Type");

    let obsFood = this.http.get(url, { headers });
    return obsFood;

  }
  getFoodid(id:string)
  {
    const url =  `https://world.openfoodfacts.org/api/v0/product/${id}`;
    const headers = new HttpHeaders("Content-Type");

    let obsFood = this.http.get(url, { headers });
    return obsFood;

  }
}
