import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';
import { NgIf } from '@angular/common';
import { CartService } from '../cart.service';
import { NgToastService } from 'ng-angular-popup';
import { HomeService } from '../home.service';
import { HeaderComponent } from '../header/header.component';


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [NgIf],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit {
  item: product | undefined;
  public productList: any;
  public totalitem = 0;


  constructor(private api: HomeService, private cart: CartService, private toast: NgToastService,private route:ActivatedRoute, private productService:ProductService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.productService.getProduct(id).subscribe((data: product) => {
        this.item = data;
      });
    }
    this.api.getproduct().subscribe(res => {

      this.productList = res;

      this.productList.forEach((a: any) => {
        Object.assign(a, { quantity: 1, total: a.price });
      });
    });
    console.log(this.productList);
  }

  addtocart(product: any) {
    Object.assign(product, { quantity: 1, total: product.price });
    this.toast.success('Se agrego el producto al carrito');
    this.cart.addtocart(product);
    console.log('Producto agregado al carrito:', product);
  }
}
