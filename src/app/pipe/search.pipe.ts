import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any[], phrase: string, key: string = ''): any[] {
    if (!Array.isArray(value) || !phrase || !key) {
      return value;
    }

    phrase = ('' + phrase).toLowerCase();
    return value.filter(item => {
      const strItem: string = '' + item[key].toLowerCase();
      return strItem.includes(phrase);
    });

  }
}
