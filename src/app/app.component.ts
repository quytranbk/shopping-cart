import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shopping-cart';
  productSum : number = 0;
  productInfo : any[] = [];

  receiveProductSum ($event) {
    this.productSum = $event;
  }

  receiveProductInfo ($event) {
    this.productInfo = $event;
  }
}
