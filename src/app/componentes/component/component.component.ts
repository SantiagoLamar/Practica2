import { Component } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent {
  numero:any=0;
  sueldos=[1700, 1600, 1900];


almacenar ()
{
 localStorage.setItem('Valor total', this.numero)
localStorage.setItem('mensaje', 'almacenado')
}

Mostrar ()
{
localStorage.getItem ('Valor  total')
}

}

