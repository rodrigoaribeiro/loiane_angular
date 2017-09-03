import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let values = value.split(' ');
    let result = '';
    for (let v of values) {
      result += this.capitalize(v)+' ' ;
    }
    return result;
  }
  capitalize(_value: string) {
    return _value.substr(0, 1).toUpperCase() + _value.substr(1 ).toLowerCase();
  }
}
