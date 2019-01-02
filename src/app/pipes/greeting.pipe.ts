import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'greeting'
})
export class GreetingPipe implements PipeTransform {

  transform(value: any, lang?: any): any {
    switch (lang) {
      case 'de':
        value = 'guten morgen';
        break;

      case 'pl':
        value = 'witaj';
        break;
    
      default:
        value = 'welcome';

        break;
    }
    
    return value + ' - it works!';
  }

}
