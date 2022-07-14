import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'idade'
})
export class IdadePipe implements PipeTransform {

  transform(value: string): string {

    console.log(value)

    return null;
  }

}
