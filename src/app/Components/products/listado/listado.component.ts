import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from './product.model';
import { ProductsService } from '../../core/services/products/products.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements  OnInit {


 
  @Output() productClicked: EventEmitter<any>;
  
  products: Product[] = [];
  

 addCarrito() {
    console.log('Añadir al carrito');

  }

  constructor(
    private productsService: ProductsService,
  ) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts() {
  this.productsService.getAllProducts()
  .subscribe(products => {
    this.products = products; 
  })
}



}
