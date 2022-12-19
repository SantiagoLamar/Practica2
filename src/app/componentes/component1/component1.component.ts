import { Component, Input } from '@angular/core';
import { EnvioDeDatosService } from 'src/app/envio-de-datos.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component {
constructor(  private Envio: EnvioDeDatosService){}
resultado : any
mensaje: any
@Input() name: any;

recuperar()
{
  this.resultado= localStorage.getItem('valor_total');
  this.mensaje =localStorage.getItem('mensaje')
}

}
