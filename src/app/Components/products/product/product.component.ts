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
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
  }

  addCart() {
    console.log('añadir al carrito');
  //  this.cartService.addCart(this.product);
    // this.productClicked.emit(this.product.id);
  }

}
