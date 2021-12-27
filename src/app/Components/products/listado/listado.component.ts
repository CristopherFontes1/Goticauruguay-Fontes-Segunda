import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from './product.model';
import { ProductsService } from '../../core/services/products/products.service';
import { CartService } from '../../core/services/cart/cart.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements  OnInit {


 
  @Output() productClicked: EventEmitter<any>;
  
  products: Product[] = [];
  @Input() product: Product;

    constructor(
      private productsService: ProductsService,
      private cartService: CartService,
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

  addCart() {
    console.log('añadir al carrito');
    this.cartService.addCart(this.product);
  }
}