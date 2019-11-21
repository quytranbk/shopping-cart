import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:  [ DataService ]
})
export class ProductComponent implements OnInit {
  productList : any[] = [];
  products : any[] = [];
  private dSrv: DataService = new DataService();
  @Output() sendProductSumEvent = new EventEmitter<any>();
  @Output() sendProductInfoEvent = new EventEmitter<any>();

  sendProductSum () {
    this.sendProductSumEvent.emit(
      this.products.reduce(
        (sum, value) => {
          return sum + (value.quantity? value.quantity: 0);
        }, 
        0
      )
    );
  }

  sendProductInfo () {
    this.sendProductInfoEvent.emit(
      this.products.map( 
        e => ({
          price: e.price,
          quantity: e.quantity
        })
      )
    );
  }

  changeQuantity (inputQuantity, product) {
    let value = Number.parseInt(inputQuantity.value);
    if (value <= 0) {
      inputQuantity.value = "";
      return;
    }
    product.quantity = Number.parseInt(inputQuantity.value);
    this.sendProductSum();
    this.sendProductInfo();
  }

  clickRemove (product) {
    this.products = this.products.filter(
      item => item.id != product.id
    );
    this.sendProductSum();
    this.sendProductInfo();
  }
  
  constructor() { }

  ngOnInit() {
    this.products = this.productList = this.dSrv.getProducts();
  }

}
