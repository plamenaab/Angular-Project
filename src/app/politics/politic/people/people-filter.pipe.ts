import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'peopleFilter'
})
export class PeopleFilterPipe implements PipeTransform {

  transform(value: string[], filterString:string) {
    if(value.length===0 || filterString===""){
      return value;
    }
    const resultArray = [];
    for(const val of value){
      if(val.indexOf(filterString) !== -1){
        resultArray.push(val);
      }
    }
    return resultArray;
  }

}
