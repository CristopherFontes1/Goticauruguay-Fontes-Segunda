import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InfoComponent} from './info/info.component'
import {ListadoComponent} from './listado/listado.component'


const routes: Routes = [
    {
    path: '',
    component: ListadoComponent
    },
    {
    path: ':id',
    component: InfoComponent   
    }
];

@NgModule ({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule
    ]
})



export class ProductsRoutingModule {}   

