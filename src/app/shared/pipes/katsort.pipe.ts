import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'katsort'
})
export class KatsortPipe implements PipeTransform {

  transform(goods: any[], katSort: string): any[] {
    if(katSort != '4') {
      let filteredItems = goods.filter(item => item.kategory == katSort);
      return filteredItems;
    } else {
      return goods;
    }
  }
}
