import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';


@Component({
  selector: 'app-add-producto',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-producto.component.html',
  styleUrl: './add-producto.component.scss'
})
export class AddProductoComponent implements OnInit {
  addProductMessage: string | undefined;
  constructor(private product:ProductService) { }
  ngOnInit(): void {
  }

  submit(data:product){

    this.product.addProduct(data).subscribe((result)=>{
      console.warn('result',result);
      if(result){
        this.addProductMessage='Se agrego el producto correctamente';
      }
      setTimeout(()=>{
        this.addProductMessage=undefined;
      },3000)
    }) ;
  }
}