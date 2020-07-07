import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MGood, MGoodsType } from 'src/app/shared/models/mgoods.model';
import { Router, ActivatedRoute } from '@angular/router';
import { MgoodsService } from 'src/app/shared/services/mgoods.service';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-goods-list',
  templateUrl: './goods-list.component.html',
  styleUrls: ['./goods-list.component.css']
})

export class GoodsListComponent implements OnInit {
  @Input() title: string;
  @Input() goods: MGood[] = [];
  @Output() deleteGood =
    new EventEmitter<number>();
  @Output() changeCount =
    new EventEmitter<number>();
  searchStr = '';
  myGType = MGoodsType;
  good: MGood;
  id: number;
  count: number;

  constructor(
    private goodService: MgoodsService, private router: Router, private activatedroute: ActivatedRoute
  ) {
    this.activatedroute.params.subscribe(params => {
      if (!isNullOrUndefined(params.id)) {
        this.id = +params.id;
      } else {
        this.id = null;
      }
    })
   }

  ngOnInit(): void {

  }

  onDeleteGood(id: number) {
    this.deleteGood.emit(id);
  }
  
  onChangeName(id: number) {
    this.router.navigate([this.router.url, 'good', id])
  }
  
  onPlus(good: MGood) {
    this.changeCount.emit(good.count++);
  }

  async getData() {
    if (!isNullOrUndefined(this.id)) {
      try {
        let good = this.goodService.getOneById(this.id);
        this.good = await good;
      } catch (err) {
        console.log(err)
      }
    }
  }
  
  onMinus(good: MGood) {
    this.changeCount.emit(good.count--);
  }
  

}
