import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgModule as NgModule_1 } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { GoodsRoutingModule } from './goods-routing.module';
import { GoodsListComponent } from './goods-list/goods-list/goods-list.component';
import { GoodsComponent } from './goods/goods.component';
import { GoodsEditComponent } from './goods-edit/goods-edit/goods-edit.component';
import { FilerpipePipe } from '../shared/pipes/filerpipe.pipe';


@NgModule({
  declarations: [GoodsListComponent, GoodsComponent, GoodsEditComponent, FilerpipePipe],
  imports: [
    CommonModule,
    GoodsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class GoodsModule { }
