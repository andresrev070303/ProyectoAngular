import { Component, OnInit} from '@angular/core';
import { product } from '../data-type';
import { ProductService } from '../services/product.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-vendedor-inicio',
  standalone: true,
  imports: [NgFor],
  templateUrl: './vendedor-inicio.component.html',
  styleUrl: './vendedor-inicio.component.scss'
})
export class VendedorInicioComponent implements OnInit {

  listaProducts :undefined | product[];
  constructor(private product:ProductService) { }

  ngOnInit(): void {
    this.product.listaProducts().subscribe((result)=>{
      console.warn(result);
      this.listaProducts = result;
    })
  }

}
