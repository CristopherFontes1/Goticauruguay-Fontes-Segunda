import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent   {

  title = 'express';
  public test: string = '';
  constructor(private httpClient: HttpClient) { }
  
  hacerTest() {
    this.httpClient.get('/api/test/').subscribe(
      (result: any) => {
        console.log(result);
        this.test = result.mensaje;
      },
      (err) => {this.test = 'Ha ocurrido un error en la petición del test'})}


}

