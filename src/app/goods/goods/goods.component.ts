import { Component, OnInit } from '@angular/core';
import { MGood, MGoodsType } from 'src/app/shared/models/mgoods.model';
import { MgoodsService } from 'src/app/shared/services/mgoods.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.css']
})
export class GoodsComponent implements OnInit {
  title = 'Список товаров';
  goods: MGood[] = [];
  MGoodsType = MGoodsType;
  tabletitel = '';

  filte = '0';
  sorst = 1;
  typeSort = 2;
  kateSort = 4;
  kate = '';

  constructor(private goodService: MgoodsService, private router: Router) { }

  ngOnInit(): void {
    this.getData();
  }

  async getData() {
    try {
      this.goods = await this.goodService.getAll();
    } catch (err) {
      console.log(err)
    }
  }

  getByType(kategory: number) {
    return this.goods.filter(good =>
      good.kategory === kategory);
  }

  sourt(sorst: number, typeSort: number, katSort: number) {
    if (sorst === 1) {
      if (typeSort === 2) {
        this.goods.sort(function (a, b) {
          return a.price - b.price;
        })
      } else {
        this.goods.sort(function (a, b) {
          return b.price - a.price;
        })
      }
    } else {
      if (typeSort === 2) {
        this.goods.sort(function (a, b) {
          return a.count - b.count;
        })
      } else {
        this.goods.sort(function (a, b) {
          return b.count - a.count;
        })
      }
    }
    this.kat(katSort);
  }

  geTableTitel() {
    return this.tabletitel;
  }
  async onDeleteGood(id: number) {
    try {
      await this.goodService.deleteOneById(id);
    } catch (err) {
      console.log(err)
    } finally {
      this.getData();
    }
  }

  onChangeName(id: number) {
    this.router.navigate([this.router.url, 'good', id])
  }

  onAddGood() {
    this.router.navigate([this.router.url, 'good']);
  }

  filt(count: number) {
    this.filte = '' +count;
  }

  kat(kateSort: number) {
    this.kate = '' +kateSort;
  }

}
