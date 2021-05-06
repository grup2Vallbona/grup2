import { Component, Input } from '@angular/core';

/**
 * Generated class for the EventoComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'page-evento',
  templateUrl: 'evento.html'
})
export class Evento {
 @Input() evento;
  text: string;

  constructor() {
    console.log('Hello EventoComponent Component');
    this.text = 'Hello World';
  }

}
