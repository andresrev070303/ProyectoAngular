import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Login, SignUp } from '../data-type';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router'
@Injectable({
  providedIn: 'root'
})
export class VendedorService {
  isVendedorLoggedIn = new BehaviorSubject<boolean>(false);
  isLoginError= new EventEmitter<boolean>(false)
  constructor(private http: HttpClient, private router: Router) { }
  userSignUp(data: SignUp) {
    this.http
      .post('http://localhost:3000/vendedor', data, { observe: 'response' })
      .subscribe((result: any) => {
        if (result && result.body) {
          this.isVendedorLoggedIn.next(true);
          const vendedor = result.body;
          localStorage.setItem('vendedorId', vendedor.id);  
          this.router.navigate(['/vendedor-inicio']);
        }
      });
  }
  reloadVendedor() {
    if (localStorage.getItem('vendedor')) {
      this.isVendedorLoggedIn.next(true);
      this.router.navigate(['/vendedor-inicio']);
    }
  }
  userLogin(data: Login) {
    this.http.get(`http://localhost:3000/vendedor?email=${data.email}&password=${data.password}`, { observe: 'response' })
      .subscribe((result: any) => {
        if (result && result.body && result.body.length) {
          const vendedor = result.body[0];
          this.isVendedorLoggedIn.next(true);
          localStorage.setItem('vendedorId', vendedor.id);  
          this.router.navigate(['/vendedor-inicio']);
        } else {
          this.isLoginError.emit(true);
        }
      });
  }
}