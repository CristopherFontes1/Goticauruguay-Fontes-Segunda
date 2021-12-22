import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'
import {ProductsService} from '../core/services/products/products.service'
import { Product } from '../listado/product.model';


@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  product: Product = {} as Product;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
    
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe ((params: Params) => {
        const id = params.id;
        this.product = this.productsService.getProduct(id)!;
    });
  } 

}
