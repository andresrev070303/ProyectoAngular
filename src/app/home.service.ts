import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http:HttpClient) { }
  /*metodo get*/
  getproduct(){
    return this.http.get('http://localhost:3000/products').
    pipe(map((res:any)=>{
      return res;
    }))

  }
}
