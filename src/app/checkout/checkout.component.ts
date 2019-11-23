import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
  providers:  [ DataService ]
})
export class CheckoutComponent implements OnInit {
  subTotal: number = 0;
  tax: number  = 0;
  taxMoney: number  = 0;
  total: number = 0;
  promoCode: any;
  promoCodeInp = new FormControl();
  isProduct: boolean;
  private promoCodes: any[] = [];
  private dSrv: DataService = new DataService();
  @Input() productSum : number;
  @Input()
  set productInfo (productInfo: any[]) {
    if (!productInfo) return;
    this.subTotal = productInfo.reduce(
      (sum, value) => {
        return sum + (value.quantity? value.quantity * value.price: 0);
      }, 0
    );
    let discount = this.promoCode? this.promoCode.discount : 0;
    this.taxMoney = this.subTotal * this.tax / 100;
    this.total = (this.subTotal + this.taxMoney) * (1 - discount / 100);
    this.total = Number.parseFloat(this.total.toFixed(2));

    this.isProduct = productInfo.length? true: false;
  }

  constructor() { }
  ngOnInit() {
    this.tax = this.dSrv.getTax();
    this.promoCodes = this.dSrv.getCodes();
  }

  clickComfirmSubmitCode () {
    switch (confirm("Do you really want to use the code?")) {
      case true: {
        this.submitCode();
        break;
      }
      case false: {
        this.promoCode = undefined;
        this.promoCodeInp.setValue(undefined);
        break;
      }
    }
    
  }

  submitCode () {
    this.promoCode = this.promoCodes.find(
      elm => elm.key == this.promoCodeInp.value
    );
    if (this.promoCode) {
      let discount = this.promoCode? this.promoCode.discount : 0;
      this.taxMoney = this.subTotal * this.tax / 100;
      this.total = (this.subTotal + this.taxMoney) * (1 - discount / 100);
      this.total = Number.parseFloat(this.total.toFixed(2));
      alert("Available Promo Code");
    }
    else {
      alert("Wrong Promo Code");
    }
    
  }

  clickComfirmCheckout () {
    switch (confirm("Do you really want to checkout?")) {
      case true: {
        this.checkout();
        break;
      }
      case false: {
        // Do nothing
        break;
      }
    }
    
  }

  checkout () {
    if (this.productSum) {
      alert("Checkout successfully!");
    }
    else {
      alert("No product selected");
    }
  }
}
