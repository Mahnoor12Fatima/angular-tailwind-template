import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstLetter'
})
export class FoodListPipe implements PipeTransform {  
  transform(value: string): any {
    if (!value) { return ''; }
    else{
      const myArray = value.split(" ");
      const initials = myArray.map(word => word.charAt(0)).join('');
      return initials;
    }
  }
}

