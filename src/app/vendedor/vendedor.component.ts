import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { VendedorService } from '../services/vendedor.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { SignUp } from '../data-type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vendedor',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule],
  templateUrl: './vendedor.component.html',
  styleUrls: ['./vendedor.component.scss']
})
export class VendedorComponent implements OnInit {
  showLogin = false;

  constructor(private vendedor: VendedorService, private router: Router) {}

  ngOnInit(): void {}

  signUp(data: SignUp): void {
    //console.warn(data);
    this.vendedor.userSignUp(data);
  }

  openLogin(): void {
    this.showLogin = true;
  }

  openSignUp(): void {
    this.showLogin = false;
  }
}