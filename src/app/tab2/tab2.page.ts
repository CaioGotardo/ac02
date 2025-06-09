import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {

  constructor() {}
//valor inicial inv.
p:number = 0;
  // taxa retorno anual
r:number = 0;
// periodo investido
t:number = 0;
//montante
m:number=0
//n
n: number = 1;

mensagem:any;

alertButtons = ['OK']
calculo(){

    if (this.p <= 0 || this.r < 0 || this.n <= 0 || this.t <= 0) {
      console.warn("Por favor, insira valores válidos para P, r, n e t.");
      this.m = 0;
      return;
    }


    const taxaDecimal = this.r / 100;

    this.m = this.p * Math.pow((1 + (taxaDecimal / this.n)), (this.n * this.t));
    this.m = parseFloat(this.m.toFixed(2));



    if(this.m > 15){
      this.mensagem = "RISCO DE INVESTIMENTO"
    }else{
      this.mensagem = "FICA EM PAZ "
    }
  }

}



