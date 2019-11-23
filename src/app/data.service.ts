import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
// class Product {
//   id: string;
//   imgUrl: string; 
//   name: string; 
//   description: string;
//   price: number
// }
export class DataService {
  getProducts () : Array<any> {
    return [
      {
        id: "1",
        imgUrl: "https://homepages.cae.wisc.edu/~ece533/images/airplane.png", 
        name: "Máy bay", 
        description: "Đây là cái máy bay",
        price: 10000,
        quantity: 1,
      },
      {
        id: "2",
        imgUrl: "https://homepages.cae.wisc.edu/~ece533/images/arctichare.png", 
        name: "Con gấu", 
        description: "Đây là con gấu",
        price: 50000,
        quantity: 1,
      }
    ];
  }
  getTax () : number {
    return 10;
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
