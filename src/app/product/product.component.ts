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
  isProducts : boolean;
  private dSrv: DataService = new DataService();

  @Output() sendProductSumEvent = new EventEmitter<any>();
  @Output() sendProductInfoEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    this.products = this.productList = this.dSrv.getProducts();
    this.isProducts = this.products.length? true: false;
    setTimeout(
      () => {
        this.sendProductSum();
        this.sendProductInfo();
      }
    );
    
  }

  // Emit to app component
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
  
  // Emit to app component
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
    // validate input: allow number > 0
    let value = Number.parseInt(inputQuantity.value);
    if (value <= 0) {
      inputQuantity.value = "";
      return;
    }

    product.quantity = Number.parseInt(inputQuantity.value);
    // emit
    this.sendProductSum();
    this.sendProductInfo();
  }

  clickRemove (product) {
    this.products = this.products.filter(
      item => item.id != product.id
    );
    this.isProducts = this.products.length? true: false;
    // emit
    this.sendProductSum();
    this.sendProductInfo();
  }

}
