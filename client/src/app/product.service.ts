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

  addProduct(obj: SellerProduct, id: number) {
    return this.http.post('http://localhost:5000/api/sellers/' + id + '/products', obj).toPromise().then(response =>
      response.json().data);
  }

}
