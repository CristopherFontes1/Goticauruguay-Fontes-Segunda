import { Component, OnInit, Input,Output, EventEmitter, OnDestroy } from '@angular/core';
import {ProductsService} from '../../core/services/products/products.service';
import {CartService} from '../../core/services/cart/cart.service'


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

 // @Input() product: Product;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
  }

  

}
