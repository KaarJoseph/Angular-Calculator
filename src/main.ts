import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MyComponentComponent } from './my-component/my-component.component';


@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, FormsModule, MyComponentComponent],
  templateUrl: './main.html',
  styleUrls: ['./main.css']
})
export class App {

  name = 'Angular';
  cargo = 'Estudiante';
  nombre = 'Kaar Joseph Mashingashi';

  numero1: number = 0;
  numero2: number = 0;
  resultado: number = 0;
  contador: number = 0;

  calcular() {
    console.log('Hola UPS', this.numero1)
  this.contador = this.contador + 1
    this.resultado = this.numero1 + this.numero2; // Operación matemática
  }

  calcularR() {
    console.log('Hola UPS', this.numero1)
  this.contador = this.contador + 1
    this.resultado = this.numero1 - this.numero2; // Operación matemática
  }

  calcularM() {
    console.log('Hola UPS', this.numero1)
  this.contador = this.contador + 1
    this.resultado = this.numero1 * this.numero2; // Operación matemática
  }

  calcularD() {
    console.log('Hola UPS', this.numero1)
  this.contador = this.contador + 1
    this.resultado = this.numero1 / this.numero2; // Operación matemática
  }
}
  /*
  a = 0;
  b = 0;
  c = 0;
  contador = 0;

calcular(){
  console.log('Hola UPS', this.a)
  this.contador = this.contador + 1
  this.c = this.a + eval(""+this.b)
  }
}*/

bootstrapApplication(App);
