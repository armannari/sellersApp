import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SellersService, Seller } from '../sellers.service';
import { ProductService, SellerProduct } from '../product.service';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {

  private seller: Seller;
  private products: SellerProduct[];

  private url = window.location.href;
  private slicedUrl = Number(this.url.slice(30));

  constructor(
    private productService: ProductService,
    private sellerService: SellersService) { }

  ngOnInit() {
    this.sellerService.getSellerById(this.slicedUrl).subscribe(result => {
      this.seller = result;
    });
    this.productService.getSellerProducts(this.slicedUrl).subscribe(result => {
      this.products = result;
    });
  }

  onProductEdited(p: SellerProduct) {
    console.log(p);
  }

}
