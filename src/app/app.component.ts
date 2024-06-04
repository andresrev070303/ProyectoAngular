import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { VendedorComponent } from './vendedor/vendedor.component';
import { FormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import { VendedorService } from './services/vendedor.service';
import { NgFor } from '@angular/common';
import { NgToastModule } from 'ng-angular-popup';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AddProductoComponent } from './add-producto/add-producto.component';
import { VendedorInicioComponent } from './vendedor-inicio/vendedor-inicio.component';
import { UpdateProductComponent } from './update-product/update-product.component';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,
    VendedorComponent,
     FormsModule,
     HttpClientModule,  
     NgFor, 
     NgToastModule, AddProductoComponent, VendedorInicioComponent, UpdateProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  title = 'proyecto-angular';
  
}
