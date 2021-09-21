import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  constructor( private _log: LosgService) { 
    this.numeroSubject.subscribe(numero => this.numero = numero)
  }

  ngOnInit(): void {
  }
  private numeroSubject: Subject<number> = new Subject<number>()
 numero: number

siguiene():void{
  const valor= Math.floor((Math.random() + 100 )+ 1 )
  this._log('Subject', 'Siguiente Valor: ', valor)
  this.numeroSubject.next(valor)
}
completar() : void{
  this._log.complete('Subject')
  this.numeroSubject.complete()
}

}
