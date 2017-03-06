import { Component, OnInit } from '@angular/core';
import { SellersService, Seller } from '../sellers.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { SellerDlgComponent } from '../seller-dlg/seller-dlg.component';

@Component({
  selector: 'app-seller-list',
  templateUrl: './seller-list.component.html',
  styleUrls: ['./seller-list.component.css']
})
export class SellerListComponent implements OnInit {

  private sellers: Seller[];

  constructor(
    private service: SellersService,
    private router: Router,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.service.getSellers().subscribe(result => {
      this.sellers = result;
    });
  }

  onSellerClick(sellerId: number) {
    this.router.navigate(['sellers', sellerId]);
  }

  addSeller() {
    const modalInstance = this.modalService.open(SellerDlgComponent);
    modalInstance.componentInstance.seller = {
      name: '',
      category: '',
      imagePath: ''
    }
    modalInstance.result.then(obj => {
      console.log('Dialog was closed using OK!');
      console.log(obj);
      this.service.addSeller(obj);
    }).catch(err => {
      console.log('Dialog was cancelled');
      console.log(err);
    });
  }

}
