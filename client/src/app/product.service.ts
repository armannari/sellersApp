import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/rx';

export interface SellerProduct {
  id: number;
  name: string;
  price: number;
  quantitySold: number;
  quantityInStock: number;
  imagePath: string;
}

@Injectable()
export class ProductService {

  constructor(private http: Http) { }

  getSellerProducts(id: number): Observable<SellerProduct[]> {
    return this.http.get('http://localhost:5000/api/sellers/' + id + '/products').map(response => {
      return <SellerProduct[]> response.json();
    });
  }

}
