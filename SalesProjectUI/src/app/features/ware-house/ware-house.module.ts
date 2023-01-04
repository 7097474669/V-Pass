import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WareHouseRoutingModule } from './ware-house-routing.module';
import { WarehouseStockComponent } from './warehouse-stock/warehouse-stock.component';



@NgModule({
  declarations: [
    WarehouseStockComponent
  ],
  imports: [
    CommonModule,
    WareHouseRoutingModule
  ]
})
export class WareHouseModule { }
