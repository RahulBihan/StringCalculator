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
    // case 3 : Allow the add method to handle new lines between numbers (instead of commas). ("1\n2,3" should return 6)
    this.add('1\n2,3,4\n5')
    // case 4: Support different delimiters:
    this.add('//;\n1;2')
    // case 5: Calling add with a negative number will throw an exception: "negative numbers not allowed <negative_number>".
    this.add('-1,-2,3,4,-5,-7');
  }
  add(inputValue:string){
    if(!inputValue){
      return 0;
    }
    const delimiters = [',', '\n'];
    let customDelimiterMatch = inputValue.match(/^\/\/(.+)\n/);
    if (customDelimiterMatch) {
        let customDelimiter = customDelimiterMatch[1];
        delimiters.push(customDelimiter);
        inputValue = inputValue.split('\n').slice(1).join('\n');
    }
    let numArray = inputValue.split(new RegExp(`[${delimiters.join('')}]`));
    let negatives = numArray.filter(n => parseInt(n) < 0);
    if (negatives.length > 0) {
        throw new Error(`Negatives not allowed: ${negatives.join(' ')}`);
    }
    return  numArray.map(n => parseInt(n)).reduce((sum, n) => sum + n, 0);
  }
}

