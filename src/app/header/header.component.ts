import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartService } from '../cart.service';
import { NgIf, NgSwitch, NgSwitchCase } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule,NgIf,NgSwitchCase,NgSwitch],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  menuType: String = 'default';
  public totalitem = 0;

  constructor(private cart: CartService, private route:Router) {}

  ngOnInit(): void {
    this.route.events.subscribe((val: any) => {
      if (val.url) {
        if (localStorage.getItem('vendedor') && val.url.includes('vendedor-inicio')) {
          console.warn('this is seller area');
          this.menuType = 'vendedor';
        } else {
          this.menuType = 'default';
        }
      }
    });
    this.cart.getprouduct().subscribe(res => {
      this.totalitem = this.cart.getTotalItemCount();
    });
  }
}