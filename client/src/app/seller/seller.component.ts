import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SellersService, Seller } from '../sellers.service';
import { ProductService, SellerProduct } from '../product.service';
import { ProductDlgComponent } from '../product-dlg/product-dlg.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})

export class SellerComponent implements OnInit {

  private seller: Seller;
  private products: SellerProduct[];
  private topTenProducts = this.products;

  private url = window.location.href;
  private slicedUrl = Number(this.url.slice(30));

  constructor(
    private productService: ProductService,
    private sellerService: SellersService,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.sellerService.getSellerById(this.slicedUrl).subscribe(result => {
      this.seller = result;
    });

    this.productService.getSellerProducts(this.slicedUrl).subscribe(result => {
      this.products = result;
      this.topTenProducts = result;
    });
  }

  onProductEdited(p: SellerProduct) {
    console.log(p);
  }

  addProduct() {
    const modalInstance = this.modalService.open(ProductDlgComponent);
    modalInstance.componentInstance.product = {
      name: "",
      price: "",
      quantitySold: "",
      quantityInStock: "",
      imagePath: ""
    }
    modalInstance.result.then(obj => {
      console.log('Dialog was closed using OK!');
      console.log(obj);
      this.productService.addProduct(obj, this.slicedUrl);
    }).catch(err => {
      console.log('Dialog was cancelled');
      console.log(err);
    });
  }


}
