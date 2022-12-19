import { EventEmitter, Injectable, Output} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvioDeDatosService {
@Output()  Disparador : EventEmitter<any> = new EventEmitter();
  constructor() { }
}
