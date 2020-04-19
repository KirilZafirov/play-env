 
import { Component } from '@angular/core'; 
@Component({
  selector: 'app-barchart-shell',
  templateUrl: './barchart-shell.component.html',
})
export class BarchartShellComponent {
  chartData: Array<any>;
  constructor( ) {
  }  
  ngOnInit() {  
    this.generateData();
  } 

  generateData() {
    this.chartData = [];
    for (let i = 0; i < (8 + Math.floor(Math.random() * 10)); i++) {
    this.chartData.push([
    `Index ${i}`,
    Math.floor(Math.random() * 100)
    ]);
   }
 }
}
