import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  standalone: true,
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

  @Input() name = 'Joseph';
  public outputText: string = "Hola, mundo!";

  constructor() { }

  ngOnInit() {

  }

}