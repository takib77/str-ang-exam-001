import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any[], key: string, direction: number): any[] {
    if (!value || !key || !Array.isArray(value)) {
      return value;
    }

    return value.sort((a, b) => {
      return `${a[(key)].toLowerCase()}`.localeCompare(`${b[key].toLowerCase()}`) * direction;
    });
  }

}
