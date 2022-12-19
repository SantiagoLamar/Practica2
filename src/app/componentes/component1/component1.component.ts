import { Component, Input , OnInit} from '@angular/core';
import { EnvioDeDatosService } from 'src/app/envio-de-datos.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component {
constructor(  private Envio: EnvioDeDatosService){}
resultado : any
resultado1 : any
resultado2 : any
resultado3 : any
resultado4 : any
resultado5 : any
mensaje: any
@Input() name: any;

ngOnInit (): void {
  this.Mostrar()
}
Mostrar()
{
  this.resultado= localStorage.getItem('1');
  this.resultado1= localStorage.getItem('2');
  this.resultado2= localStorage.getItem('3');
  this.resultado3= localStorage.getItem('4');
  this.resultado4= localStorage.getItem('5');
  this.resultado5= localStorage.getItem('6');
  this.mensaje =localStorage.getItem('mensaje')
}

}
