import { NgFor,NgIf, CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { NgToastService } from 'ng-angular-popup';
import { AppRoutingModule } from '../app.routes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NgFor,NgIf, CurrencyPipe,],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit{
  public products!: any[];
  public grandTotal: number = 0;
  constructor(private cart: CartService, private toast:NgToastService, private router:Router) { }
  ngOnInit(): void {
    this.cart.getprouduct().subscribe(res => {
      this.products = res;
      this.grandTotal = this.cart.gettotalprice();

    })

  }
  emptyCart(){
    this.toast.success('Todos los productos se borraron');
    this.cart.removeallcart();
  }
  delete(item: any){
    this.toast.success('Se borro el producto');
    this.cart.removecartitem(item);
  }
  navigateToHome() {
    this.router.navigate(['/']); 
  }

}
