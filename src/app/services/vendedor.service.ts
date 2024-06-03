import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { SignUp } from '../data-type';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router'
@Injectable({
  providedIn: 'root'
})
export class VendedorService {
  isVendedorLoggedIn = new BehaviorSubject<boolean>(false);
  constructor(private http: HttpClient, private router: Router) { }
  userSignUp(data: SignUp) {
    this.http
      .post('http://localhost:3000/vendedor',
        data, { observe: 'response' }
      ).subscribe((result) => {
        this.isVendedorLoggedIn.next(true);
        localStorage.setItem('vendedor', JSON.stringify(result.body));
        this.router.navigate(['/vendedor-inicio']);
      });
  }
  relaodVendedor() {
    if (localStorage.getItem('vendedor')) {
      this.isVendedorLoggedIn.next(true);
      this.router.navigate(['/vendedor']);
    }
  }

}
