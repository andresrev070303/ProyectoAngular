import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartService } from '../cart.service';
import { CommonModule, NgIf, NgSwitch, NgSwitchCase } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { product } from '../data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, NgIf, NgSwitchCase, NgSwitch,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  menuType: String = 'default';
  public totalitem = 0;
  vendedorName: string = '';
  searchResult:undefined|product[];
  constructor(private cart: CartService, private router: Router, private product: ProductService) { }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const url = event.url;
        if (localStorage.getItem('vendedor') && 
            (url.includes('vendedor-inicio') || url.includes('add-producto') || url.includes('update-product'))) {
          console.warn('this is seller area');
          this.menuType = 'vendedor';
          const tiendaVendedor = localStorage.getItem('vendedor');
          const dataVendedor = tiendaVendedor && JSON.parse(tiendaVendedor)[0];
          this.vendedorName = dataVendedor?.name || '';
        } else {
          this.menuType = 'default';
        }
      }
    });

    this.cart.getprouduct().subscribe(res => {
      this.totalitem = this.cart.getTotalItemCount();
    });
  }

  logout() {
    localStorage.removeItem('vendedor');
    this.router.navigate(['/']);
  }
  searchProduct(query: KeyboardEvent){
    if(query){
      const element = query.target as HTMLInputElement;
      this.product.searchProduct(element.value).subscribe((result) => {
        this.searchResult = result.length > 5 ? result.slice(0, 5) : result;
      });
    }
  }

  hideSearch(){
    this.searchResult=undefined
  }
  submitSearch(val: string) {
    this.router.navigate([`search/${val}`]);
  }
  
}
