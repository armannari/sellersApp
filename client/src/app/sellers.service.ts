import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/rx'; 

export interface Seller {
  name: string;
  id: number;
  category: string;
  imagePath: string;
}

@Injectable()
export class SellersService {

  constructor(private http: Http) { }

  getSellers(): Observable<Seller[]> {
    return this.http.get('http://localhost:5000/api/sellers').map(response => {
      return <Seller[]> response.json();
    });
  }

  getSellerById(id: number): Observable<Seller> {
    return this.http.get('http://localhost:5000/api/sellers/' + id).map(response => {
      return <Seller> response.json();
    });
  }

  addSeller(obj: Seller): Promise<Seller> {
    return this.http.post('http://localhost:5000/api/sellers', obj).toPromise().then(response =>
      response.json().data);
  }

}
