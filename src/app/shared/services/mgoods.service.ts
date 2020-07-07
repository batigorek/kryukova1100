import { Injectable } from '@angular/core';
import { BaseHttp } from './base/basehttp';
import { HttpClient } from '@angular/common/http';
import { MGood } from '../models/mgoods.model';

@Injectable({
  providedIn: 'root'
})
export class MgoodsService extends BaseHttp  {

  constructor(public http: HttpClient) {
    super(http, 'goods');
   }
   
  patchWorkers (data: MGood) {
    let file = `${this.baseUrl}/${data.id}`;
    return this.http.patch(file, data).toPromise();
  }
  
}
