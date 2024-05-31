import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { SignUp } from '../data-type';
import { BehaviorSubject } from 'rxjs';
import { Router} from '@angular/router'
@Injectable({
  providedIn: 'root'
})
export class VendedorService {
  constructor(private http:HttpClient) {}
    userSignUp(data: SignUp){
        return this.http
       .post('http://localhost:3000/vendedor',
      data)
    }
    
}
