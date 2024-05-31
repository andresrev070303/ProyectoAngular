import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public productList = new BehaviorSubject<any>([])
  public cartitemlist: any = []
  constructor() {}

  //get
  getprouduct() {
    return this.productList.asObservable();
  }

  //add to cart
  addtocart(product: any) {
    let productExists = false;

    this.cartitemlist.map((a: any) => {
      if (a.id === product.id) {
        a.quantity += 1;
        a.total = a.price * a.quantity;
        productExists = true;
      }
    });

    if (!productExists) {
      this.cartitemlist.push(product);
    }

    this.productList.next(this.cartitemlist);
    this.gettotalprice();
  }

  // total price
  gettotalprice(): number {
    let grandtotal = 0;
    this.cartitemlist.map((a: any) => {
      grandtotal += a.price * a.quantity;
    });
    return grandtotal;
  }

  // Get total item count
  getTotalItemCount(): number {
    let totalCount = 0;
    this.cartitemlist.map((a: any) => {
      totalCount += a.quantity;
    });
    return totalCount;
  }

  //empty or delete all
  removeallcart() {
    this.cartitemlist = [];
    this.productList.next(this.cartitemlist);
  }

  removecartitem(product: any) {
    this.cartitemlist.map((a: any, index: any) => {
      if (product.id === a.id)
        this.cartitemlist.splice(index, 1);
    });
    this.productList.next(this.cartitemlist);
  }
}