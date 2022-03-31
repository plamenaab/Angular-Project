import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'parteienFilter',
  pure: false, // if false : re-run pipe on data change, default: true
})
export class ParteienFilterPipe implements PipeTransform {

  transform(value:any, filterString:string, propName:string) {
    if(value.length===0 || filterString===""){
      return value;
    }
    const resultArray = [];
    for(const val of value){
      if(val[propName].indexOf(filterString) !== -1){
        resultArray.push(val);
      }
    }
    return resultArray;
  }

}
