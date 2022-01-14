import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent  implements OnInit {

  title = 'express';
  public test: string = '';
  constructor(private httpClient: HttpClient) { }
 
  ngOnInit() {
      this.hacerTest()
  }

  hacerTest() {
    this.httpClient.get('/api/test/').subscribe(
      (result: any) => {
        console.log(result);
        this.test = result.mensaje;
      },
      (err) => {this.test = 'Ha ocurrido un error en la petición del test'})}


}

