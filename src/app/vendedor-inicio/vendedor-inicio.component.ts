import { Component, OnInit} from '@angular/core';
import { product } from '../data-type';
import { ProductService } from '../services/product.service';
import { NgFor } from '@angular/common';
import { UpdateProductComponent } from '../update-product/update-product.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-vendedor-inicio',
  standalone: true,
  imports: [NgFor,UpdateProductComponent,RouterModule],
  templateUrl: './vendedor-inicio.component.html',
  styleUrl: './vendedor-inicio.component.scss'
})
export class VendedorInicioComponent implements OnInit {

  listaProducts :undefined | product[];
  productMessage : undefined | string;
  constructor(private product:ProductService) { }

  ngOnInit(): void {
    this.lista();
  }
  borrarProduct(id: number){
    console.warn(id);
    this.product.borrarProduct(id).subscribe((result)=>{          
      if(result){
        this.productMessage = 'Producto Borrado';
        this.lista();
      }
    });
    setTimeout(()=>{
      this.productMessage = undefined;
    } , 3000)
  }
  lista(){
    this.product.listaProducts().subscribe((result)=>{
      console.warn(result);
      this.listaProducts = result;
    })
  }
}
