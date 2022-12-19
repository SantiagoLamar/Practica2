import { Component, Input } from '@angular/core';
import { EnvioDeDatosService } from 'src/app/envio-de-datos.service';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})

export class ComponentComponent {
  @Input () Nombre:any= " ";
  @Input () Apellido:any= " ";
  @Input () Email:any= " ";
  @Input () Contrasena :any= " ";
  @Input () Confirmar:any= " ";
  @Input () Telefono:any= " ";

almacenar ()
{
 localStorage.setItem('Valor', this.Nombre)
 localStorage.setItem('Valor ', this.Apellido)
 localStorage.setItem('Valor ', this.Email)
 localStorage.setItem('Valor ', this.Contrasena)
 localStorage.setItem('Valor ', this.Telefono)
}

Imprimir ()
{
  //this.Envio.Disparador.emit({data: this.dataentrarte})
}

Mostrar ()
{
localStorage.getItem ('Valor  ')
}

constructor ( private Envio: EnvioDeDatosService) {}

}

