import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template : `<app-my-component [Array]="myArray"></app-my-component> `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  myArray: Array<string>; 
  constructor() { 
    this.myArray = ["String1", 'String2', 'String3', 'String4', 'String5', 'String6'];
  }
}
