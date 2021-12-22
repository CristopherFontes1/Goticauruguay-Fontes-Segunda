import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import {ListadoComponent} from './Components/listado/listado.component';
import { LoginComponent } from './Components/login/login.component';
import { CarritoComponent } from './Components/carrito/carrito.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { InfoComponent } from './Components/info/info.component'
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
        component: ListadoComponent
      },
      {
        path: 'listado/:id',
        component: InfoComponent
      },
      {
        path: 'carrito',
        canActivate: [AdminGuard],
        component: CarritoComponent
      },
    ]
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
