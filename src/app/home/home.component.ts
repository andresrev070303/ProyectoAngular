import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { CartService } from '../cart.service';
import { HomeService } from '../home.service'; 
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public productList: any;

  constructor(private api: HomeService, private cart: CartService, private toast: NgToastService) {}

  ngOnInit(): void {
    this.api.getproduct().subscribe(res => {
      this.productList = res;

      this.productList.forEach((a: any) => {
        Object.assign(a, { quantity: 1, total: a.price });
      });
    });
  }

  addtocart(product: any) {
    this.toast.success('Se agrego el producto al carrito');
    this.cart.addtocart(product);
    console.log('Producto agregado al carrito:', product);
  }
}
