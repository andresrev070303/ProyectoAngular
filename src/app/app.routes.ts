import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VendedorComponent } from './vendedor/vendedor.component';
import { VendedorInicioComponent } from './vendedor-inicio/vendedor-inicio.component';
import { authGuard } from './auth.guard';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CartComponent } from './cart/cart.component';
import { NgToastModule } from 'ng-angular-popup';
import { AddProductoComponent } from './add-producto/add-producto.component';


export const routes: Routes = [
{
    component: HomeComponent,
    path: '', 
    
    
},
{
    component: VendedorComponent,
    path: 'vendedor',
    
},
{
    component: VendedorInicioComponent,
    path: 'vendedor-inicio',
    canActivate: [authGuard],
    
},
{
    component:CartComponent,
    path: 'cart'
},
{
    component: AddProductoComponent,
    path: 'add-producto',
    canActivate: [authGuard],
   
}

];

@NgModule({
    imports: [RouterModule.forRoot(routes),NgToastModule],
    exports: [RouterModule, NgToastModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
  })
  export class AppRoutingModule {}
