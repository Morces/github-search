import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'days'
})
export class DaysPipe implements PipeTransform {

  transform(value: any): any {
    let arrVal = value.replace(/(\d{4})- (\d{2}).*/ig,"$1 $2 $3").split(" ");
    let dateCreated = new Date(arrVal[0], arrVal[1]-1, arrVal[2]);
    let now = new Date();
    let dayDiff = now.getTime() - dateCreated.getTime();
    dayDiff/= (1000 * 60 * 60 * 24);
    return Math.floor(dayDiff);
  }

}
