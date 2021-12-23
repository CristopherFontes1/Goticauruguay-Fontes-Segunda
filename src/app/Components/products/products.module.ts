import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './listado/listado.component';
import { InfoComponent } from './info/info.component';
import {ProductsRoutingModule} from './products-routing.module'
import {SharedModule} from '../shared/shared.module'



@NgModule({
  declarations: [
    ListadoComponent,
    InfoComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule
  ]
})
export class ProductsModule { }
