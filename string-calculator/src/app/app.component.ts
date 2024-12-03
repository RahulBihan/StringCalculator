import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  sum: number = 0;
  constructor(){}
  ngOnInit(): void {
    // case 1 : using a function with empty strings
    this.add('');
    this.add("");
    // case 2 : Allow the add method to handle any amount of numbers.
    this.add('1,2,3,4')
  }
  add(inputValue:string){
    if(!inputValue){
      return 0;
    }
    let numArray = inputValue.split(',');
    return  numArray.map(n => parseInt(n)).reduce((sum, n) => sum + n, 0);
  }
}

