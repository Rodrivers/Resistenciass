import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-resistencia',
  templateUrl: './resistencia.component.html',
  styleUrls: ['./resistencia.component.css']
})
export class ResistenciaComponent implements OnInit {

  constructor() { }
  max=0;
  min=0;
  toleranciaV='';
  tolerancia=0;
  valor =0;
  resultado =0;
  
  color_1='';
  Style_1='';
  color_2='';
  color_3='';
   

  resulta2 : number =0;
  resistencia : number =0;


  porcesar(){

    let resultado:number=this.Caso1();
    
      if (this.tolerancia == 0){
        let tolerancia:string='Oro';
        let resulta2:number=0;
        resulta2=resultado*0.05
        this.max=resultado+resulta2
        this.min=resultado-resulta2
        tolerancia='Oro'
        this.toleranciaV=tolerancia
      }
      else{
        let tolerancia:string='Plata'
        let resulta2:number=0;
        resulta2=resultado*0.10
        this.max=resultado+resulta2
        this.min=resultado-resulta2
        this.toleranciaV=tolerancia
      }
    this.resistencia=resultado;
    
  }


  
  Caso1()
  {
   let color_1 :number = 0;
   let color_2 :number = 0;
   let Style_1 :String = "";
   let Negro :number = 0;
   let Cafe :number = 1;
   let Rojo :number = 2;
   let Naranja :number = 3;
   let Amarillo :number = 4;
   let Verde :number = 5;
   let Azul :number = 6;
   let Violeta :number = 7;
   let Gris :number = 8;
   let Blanco :number = 9;
   const colorsin1 ='';

    switch (this.color_1) {
      case 'Negro' :
       color_1= Negro;
       Style_1 = 'BLACK';
              console.log("el color es "+this.Style_1);

        break;
       case 'Cafe' :
       color_1= Cafe;
       
        break;
        case 'Rojo' :
        color_1= Rojo
        break;
        case 'Naranja' :
        color_1= Naranja
        break;
        case 'Amarillo' :
        color_1= Amarillo
        break;
        case 'Verde' :
        color_1= Verde
        break;
        case 'Azul' :
        color_1= Azul
        break;
        case 'Violeta' :
        color_1= Violeta
        break;
        case 'Gris' :
        color_1= Gris
        break;
        case 'Blanco' :
        color_1= Blanco
        break;
    
  }
  




  switch (this.color_2) {
    case 'Negro' :
      color_2= Negro
       break;
      case 'Cafe' :
      color_2= Cafe
       break;
       case 'Rojo' :
       color_2= Rojo
       break;
       case 'Naranja' :
       color_2= Naranja
       break;
       case 'Amarillo' :
       color_2= Amarillo
       break;
       case 'Verde' :
       color_2= Verde
       break;
       case 'Azul' :
       color_2= Azul
       break;
       case 'Violeta' :
       color_2= Violeta
       break;
       case 'Gris' :
       color_2= Gris
       break;
       case 'Blanco' :
       color_2= Blanco
       break;
  
}

let colorsumamul: string = String(color_1)+String(color_2)
let colorsines:  number = parseInt (colorsumamul);
let resultado :number = 0;

switch (this.color_3) {
  case 'Negro' :
   resultado= colorsines*1
    break;
   case 'Cafe' :
   resultado= colorsines*10
    break;
    case 'Rojo' :
    resultado= colorsines*100
    break;
    case 'Naranja' :
    resultado= colorsines*1000
    break;
    case 'Amarillo' :
    resultado= colorsines*10000
    break;
    case 'Verde' :
    resultado= colorsines*100000
    break;
    case 'Azul' :
    resultado= colorsines*1000000
    break;
    case 'Violeta' :
    resultado= colorsines*10000000
    break;

}
console.log(resultado);
return resultado

  }

  ngOnInit(): void {
  }

  
}