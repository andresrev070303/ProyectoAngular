import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule,],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  public totalitem = 0;

  constructor(private cart: CartService) {}

  ngOnInit(): void {
    this.cart.getprouduct().subscribe(res => {
      this.totalitem = this.cart.getTotalItemCount();
    });
  }
}