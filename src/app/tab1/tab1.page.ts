import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {

  constructor() {}
//valor total emp.
v:number = 0;
  // juros 
i:number = 0;
// meses
n:number = 0;
//valor parcela 
p:number = 0;

calculoParcela(){
  this.p= this.v*(this.i/12)/1-(1+this.i)**-this.n;
  this.p = Math.round(this.p);

}




}
