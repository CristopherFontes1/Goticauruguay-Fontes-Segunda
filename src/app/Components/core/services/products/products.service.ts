import { isNgTemplate } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Product } from '../../../products/listado/product.model';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../../../../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class ProductsService {



  constructor(
    private http: HttpClient 
  ) { }

  getAllProducts () {
    return  this.http.get<Product[]>(environment.url_api);
  }

  getProduct (id: string) {
    return this.http.get<Product>(`${environment.url_api}${id}`);
  }
}
