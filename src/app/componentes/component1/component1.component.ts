import { Component } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component {
constructor(){}
resultado : any
mensaje: any
suma: number=0

recuperar()
{
  this.resultado= localStorage.getItem('valor_total');
  this.mensaje =localStorage.getItem('mensaje')
}
}
