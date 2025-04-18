import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Product{
  id: number,
  title: string,
  price: number,
  description: string
  image: string
}

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  apiUrl = 'https://fakestoreapi.com/products';
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }
}
