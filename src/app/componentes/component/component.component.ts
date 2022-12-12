import { Component } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent {
  Nombre:any= " ";
  Apellido:any= " ";
  Email:any= " ";
  Contrasena :any= " ";
  Confirmar:any= " ";
  Telefono:any= " ";

almacenar ()
{
 localStorage.setItem('Valor total', this.Nombre)
 localStorage.setItem('Valor total', this.Apellido)
 localStorage.setItem('Valor total', this.Email)
 localStorage.setItem('Valor total', this.Contrasena)
 localStorage.setItem('Valor total', this.Telefono)
localStorage.setItem('mensaje', 'almacenado')
}

Mostrar ()
{
localStorage.getItem ('Valor  total')
}

}

