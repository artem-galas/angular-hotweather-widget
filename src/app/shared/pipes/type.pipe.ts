import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'type'
})
export class TypePipe implements PipeTransform {

  transform(value: any, args?: string): any {
    let newValue = value.filter(item => item.type === args);
    return newValue;
  }

}
