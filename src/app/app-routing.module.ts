import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InformationComponent } from './information/information.component';
import { GoodsModule } from './goods/goods.module';

const routes: Routes = [
  {
    path: '',
    component: InformationComponent
  },
  {
    path: 'goods',
    loadChildren: () => 
    import('./goods/goods.module').then(m => GoodsModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
