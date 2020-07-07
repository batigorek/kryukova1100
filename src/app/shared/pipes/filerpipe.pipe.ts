import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filerpipe'
})
export class FilerpipePipe implements PipeTransform {

  transform(goods: any[], filte: string): any[] {

    let filteredItems = goods.filter(item => item.count >= filte);
    return filteredItems;
  }
}
