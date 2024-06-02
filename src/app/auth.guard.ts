import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { inject } from '@angular/core';
import { VendedorService } from './services/vendedor.service';


export const authGuard: CanActivateFn = (route, state) => {
  const vendedorService = inject(VendedorService);
  const router = inject(Router);

  if (localStorage.getItem('vendedor')) {
    return true;
  }

  return vendedorService.isVendedorLoggedIn ? true : router.parseUrl('vendedor-inicio'); // Asegúrate de redirigir a la ruta de login o la que consideres
};
