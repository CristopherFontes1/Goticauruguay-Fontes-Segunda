import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './listado/listado.component';
import { InfoComponent } from './info/info.component';
import {ProductsRoutingModule} from './products-routing.module'
import {SharedModule} from '../shared/shared.module'
import {MaterialModule} from '../material/material.module';
import { ProductComponent } from './product/product.component'



@NgModule({
  declarations: [
    ListadoComponent,
    InfoComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class ProductsModule { }
