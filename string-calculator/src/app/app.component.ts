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
  }
  add(inputValue:string){
    if(inputValue === '' || inputValue === ""){
      console.log('sum :' , this.sum)
      return this.sum;
    }
    return this.sum;
  }
}

