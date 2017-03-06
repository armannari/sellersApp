import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Router, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { SellersService } from './sellers.service';
import { SellerListComponent } from './seller-list/seller-list.component';
import { SellerComponent } from './seller/seller.component';
import { ProductService } from './product.service';
import { ProductCardComponent } from './product-card/product-card.component';
import { SellerDlgComponent } from './seller-dlg/seller-dlg.component';

@NgModule({
  declarations: [
    AppComponent,
    SellerListComponent,
    SellerComponent,
    ProductCardComponent,
    SellerDlgComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([{
      path: '',
      redirectTo: 'sellers',
      pathMatch: 'full'
    }, {
      path: 'sellers',
      component: SellerListComponent
    }, {
      path: 'sellers/:id',
      component: SellerComponent
    }]),
    NgbModule.forRoot()
  ],
  providers: [SellersService, ProductService],
  bootstrap: [AppComponent],
  entryComponents: [SellerDlgComponent]
})
export class AppModule { }
