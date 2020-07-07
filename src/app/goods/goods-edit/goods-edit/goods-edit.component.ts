import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MgoodsService } from 'src/app/shared/services/mgoods.service';
import { isNullOrUndefined } from 'util';
import { MGood, MGoodsType } from 'src/app/shared/models/mgoods.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-goods-edit',
  templateUrl: './goods-edit.component.html',
  styleUrls: ['./goods-edit.component.css']
})
export class GoodsEditComponent implements OnInit {
  id: number;
  good: MGood;
  goodForm: FormGroup;
  name: string;
  weight: number;
  price: number;
  count: number;
  kategory: number;
  articul: number;
  maker: string;
  goodsType = MGoodsType;

  constructor(private activatedroute: ActivatedRoute, private goodService: MgoodsService, private router: Router) {
    this.activatedroute.params.subscribe(params => {
      if (!isNullOrUndefined(params.id)) {
        this.id = +params.id;
      } else {
        this.id = null;
      }
    })
  }

  ngOnInit(): void {
    this.goodForm = new FormGroup({
      name: new FormControl({ value: '', disabled: false }, [Validators.required]),
      weight: new FormControl({ value: '', disabled: false }, [Validators.required, Validators.min(0)]),
      price: new FormControl({ value: '', disabled: false }, [Validators.required, Validators.min(0)]),
      count: new FormControl({ value: '', disabled: false }, [Validators.required, Validators.min(0)]),
      kategory: new FormControl({ value: '', disabled: false }, [Validators.required]),
      articul: new FormControl({ value: '', disabled: false }, [Validators.required, Validators.min(0)]),
      maker: new FormControl({ value: '', disabled: false }),
    });
    this.getData();
  }

  async getData() {
    if (!isNullOrUndefined(this.id)) {
      try {
        let good = this.goodService.getOneById(this.id);
        this.good = await good;
      } catch (err) {
        console.log(err)
      }
      this.goodForm.patchValue({
        name: this.good.name,
        weight: this.good.weight,
        price: this.good.price,
        count: this.good.count,
        kategory: this.good.kategory,
        articul: this.good.articul,
        maker: this.good.maker,
      })
    }
  }

  async onDeleteGood() {
    try {
      await this.goodService.deleteOneById(this.id);
    } catch (err) {
      console.log(err);
    }
    this.router.navigate(['/goods']);
  }

  async  onConfirm() {
    if (!isNullOrUndefined(this.id)) {
      try {
        await this.goodService.putOne(this.id, this.goodForm.value);
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        let res = await this.goodService.postOne(this.goodForm.value);
        console.log(res)
        this.router.navigate([this.router.url, res.id]);
      } catch (err) {
        console.log(err);
      }
    }
    this.router.navigate(['/goods']);
  }
}
