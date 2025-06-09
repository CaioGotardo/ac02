import { IDespesas } from './../model/IDespesas';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page implements OnInit {

  mensagem: string = '';
  alertButtons = ['OK'];

  listaDespesas: IDespesas[] = [
    {
      rendaLiquida: 2000,
      alimeticios: 400,
      saidas: 300,
      moradia: 1100,
      transporte: 250,
    },
    
  ];

  constructor() {}

  ngOnInit() {
    this.verificarRendaLiquida();
  }

  verificarRendaLiquida(): void {
    const despesa = this.listaDespesas[0];
    const { rendaLiquida, alimeticios, saidas, moradia, transporte } = despesa;
    const totalDespesas = alimeticios + saidas + moradia + transporte;
    if (rendaLiquida > totalDespesas) {
      this.mensagem = 'A renda líquida é maior que a somatória das despesas.';
    } else {
      this.mensagem = 'A renda líquida não é maior que a somatória das despesas.';
    }
  }
}

