import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getProducts () : any[] {
    return [
      {
        id: 1,
        imgUrl: "https://homepages.cae.wisc.edu/~ece533/images/airplane.png", 
        name: "PRODUCT ITEM NUMBER 1", 
        description: "Description for product item number 1",
        price: 5.99
      },
      {
        pId: 2,
        imgUrl: "https://homepages.cae.wisc.edu/~ece533/images/arctichare.png", 
        name: "PRODUCT ITEM NUMBER 2", 
        description: "Description for product item number 2",
        price: 9.99
      }
    ];
  }
  getTax () : number {
    return 5;
  }
  getCodes () : any[] {
    return [
      {
        id: 1,
        key: "aaa",
        discount: 10
      },
      {
        id: 2,
        key: "bbb",
        discount: 30
      }
    ];
    
  }
  constructor() { }
}
