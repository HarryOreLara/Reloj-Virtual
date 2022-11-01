import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FechasService {

  meses = [
    'Enero',
    'Febrero',
    'Marzo', 
    'Abril', 
    'Mayo', 
    'Junio', 
    'Julio', 
    'Agosto', 
    'Septiembre', 
    'Octubre', 
    'Noviembre', 
    'Diciembre'
  ]

  dias = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado'
    ]
  
  constructor() { }
}
