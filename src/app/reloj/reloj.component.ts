import { Component, OnInit } from '@angular/core';
import { FechasService } from '../services/fechas.service';

@Component({
  selector: 'app-reloj',
  templateUrl: './reloj.component.html',
  styleUrls: ['./reloj.component.css']
})
export class RelojComponent implements OnInit {


  data:number;
  hora:number;
  min:number;
  seg:number;

  numDia:number;
  mes: string;
  dia: string;


  constructor(private datita: FechasService) { 

  }

  ngOnInit(): void {
    this.relojMostrar();
    setInterval(()=>{
      this.relojMostrar();
    });

    this.init();
  }


  init(){
    this.mostrarMes();
    this.mostrarDia();
    this.mostrarNumDia();
  }

  relojMostrar(){
    let fecha = new Date();
    this.hora = fecha.getHours();
    this.min = fecha.getMinutes();
    this.seg = fecha.getSeconds();
    
  }

  mostrarMes(){
    let fecha = new Date();
    // this.mes = this.meses[fecha.getMonth()];
    this.mes = this.datita.meses[fecha.getMonth()];
  }

  mostrarDia(){
    let fecha = new Date();
    // this.dia = this.dias[fecha.getDay()];
    this.dia = this.datita.dias[fecha.getDay()];
  }

  mostrarNumDia(){
    let fecha = new Date();
    this.numDia = fecha.getDate();
  }


}
