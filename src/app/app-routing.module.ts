import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { CarritoComponent } from './Components/carrito/carrito.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { LayoutComponent } from './Components/layout/layout.component';
import { AdminGuard } from './admin.guard';




const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      { 
        path: 'home',
        loadChildren: () => import('./Components/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'listado',
        loadChildren: () => import ('./Components/products/products.module').then (m => m.ProductsModule)
      },
      {
        path: 'carrito',
        canActivate: [AdminGuard],
        component: CarritoComponent
      },
    ]
  },
  {
    path: 'admin',
    loadChildren: () => import ('./Components/admin/admin.module').then (m => m.AdminModule)
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
