import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VendedorComponent } from './vendedor/vendedor.component';
import { VendedorInicioComponent } from './vendedor-inicio/vendedor-inicio.component';
import { authGuard } from './auth.guard';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CartComponent } from './cart/cart.component';
import { NgToastModule } from 'ng-angular-popup';
import { AddProductoComponent } from './add-producto/add-producto.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { SearchComponent } from './search/search.component';
import { DetailsComponent } from './details/details.component';


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
   
},
{
    component: UpdateProductComponent,
    path: 'vendedor-inicio/update-product/:id',
    canActivate: [authGuard],
   
},
{
    component: SearchComponent,
    path:'search/:query'
},
{
  component: DetailsComponent,
  path:'details/:id'  
}

];

@NgModule({
    imports: [RouterModule.forRoot(routes),NgToastModule],
    exports: [RouterModule, NgToastModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
  })
  export class AppRoutingModule {}
