import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements  OnInit {


 
  @Output() productClicked: EventEmitter<any>;
  
  products: Product[] = [
    {
      id:'1',
      image: 'assets/Imagenes/1.png',
      title: 'Interestelar',
      price: 100,
      description: 'Narra las aventuras de un grupo de exploradores que hacen uso de un agujero de gusano recientemente descubierto para superar las limitaciones de los viajes espaciales tripulados y vencer las inmensas distancias que tiene un viaje interestelar.'
    },
    {
      id:'2',
      image: 'assets/Imagenes/2.png',
      title: 'Blabla',
      price: 100,
      description: 'blablablabla'
    },
    {
      id:'3',
      image: 'assets/Imagenes/3.png',
      title: 'Ready Player One',
      price: 100,
      description: 'Ready Player One es la historia de una búsqueda global en OASIS, un mundo virtual. Su fundador y creador, James Halliday, deja a su muerte un vídeo con pistas para hallar un Huevo de Pascua. Quien encuentre el huevo encontrará un tesoro pues se hará con el control de OASIS y heredará la mayor fortuna del mundo.'
    },
    {
      id:'4',
      image: 'assets/Imagenes/4.png',
      title: 'Blabla',
      price: 100,
      description: 'blablablabla'
    },
    {
      id:'5',
      image: 'assets/Imagenes/6.png',
      title: 'Batman',
      price: 100,
      description: 'Batman es la identidad secreta de Bruce Wayne, un empresario multimillonario, galán y filántropo. Presenció el asesinato de sus padres cuando era niño lo marcó profundamente y lo llevó a entrenarse en la perfección física e intelectual para ponerse un disfraz de murciélago con el fin de combatir el crimen'
    },
    {
      id:'6',
      image: 'assets/Imagenes/7.png',
      title: 'Blabla',
      price: 100,
      description: 'blablablabla'
    },
    {
      id:'7',
      image: 'assets/Imagenes/1.png',
      title: 'Interestelar',
      price: 100,
      description: 'Narra las aventuras de un grupo de exploradores que hacen uso de un agujero de gusano recientemente descubierto para superar las limitaciones de los viajes espaciales tripulados y vencer las inmensas distancias que tiene un viaje interestelar.'
    },
    {
      id:'8',
      image: 'assets/Imagenes/2.png',
      title: 'Blabla',
      price: 100,
      description: 'blablablabla'
    },
    {
      id:'9',
      image: 'assets/Imagenes/3.png',
      title: 'Ready Player One',
      price: 100,
      description: 'Ready Player One es la historia de una búsqueda global en OASIS, un mundo virtual. Su fundador y creador, James Halliday, deja a su muerte un vídeo con pistas para hallar un Huevo de Pascua. Quien encuentre el huevo encontrará un tesoro pues se hará con el control de OASIS y heredará la mayor fortuna del mundo.'
    },
    {
      id:'10',
      image: 'assets/Imagenes/4.png',
      title: 'Blabla',
      price: 100,
      description: 'blablablabla'
    }

  ]

 addCarrito() {
    console.log('Añadir al carrito');

  }





  constructor() { }

  ngOnInit(): void {
  }

}
