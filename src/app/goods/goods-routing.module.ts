import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoodsComponent } from './goods/goods.component';
import { GoodsEditComponent } from './goods-edit/goods-edit/goods-edit.component';


const routes: Routes = [
  {
    path: '',
    component: GoodsComponent,
  },
  {
    path: 'good',
    component: GoodsEditComponent
  },
  {
    path: 'good/:id',
    component: GoodsEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoodsRoutingModule { }
