import { Component, Input, OnInit } from '@angular/core';
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
 localStorage.setItem('1', this.Nombre)
 localStorage.setItem('2', this.Apellido)
 localStorage.setItem('3', this.Email)
 localStorage.setItem('4', this.Contrasena)
 localStorage.setItem('5', this.Confirmar)
 localStorage.setItem('6', this.Telefono)
}
 ngOnInit () : void {
  
 }

Imprimir ()
{
  //this.Envio.Disparador.emit({data: this.dataentrarte})
}


Mostrar ()
{
localStorage.getItem ('1')
localStorage.getItem ('2')
localStorage.getItem ('3')
localStorage.getItem ('4')
localStorage.getItem ('5')
localStorage.getItem ('5')
}

constructor ( private Envio: EnvioDeDatosService) {}

}

