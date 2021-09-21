import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-behavior-subject',
  templateUrl: './behavior-subject.component.html',
  styleUrls: ['./behavior-subject.component.css']
})
export class BehaviorSubjectComponent implements OnInit {
  
  constructor( private _log: LosgService) { 
    this.numeroSubject.subscribe(numero => {
      if (numero == null ){
        this._log.log('BehaviorSubject', 'Valosr inicial: ', numero);
      }else{
        this.numero = numero
      }
    })
  }

  ngOnInit(): void {
  }
  private numeroSubject: BehaviorSubject<number> = new BehaviorSubject<number>(null)
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
