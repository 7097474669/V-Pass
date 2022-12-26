import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WareHouseRoutingModule } from './ware-house-routing.module';
import { WareHouseComponent } from './ware-house.component';


@NgModule({
  declarations: [
    WareHouseComponent
  ],
  imports: [
    CommonModule,
    WareHouseRoutingModule
  ]
})
export class WareHouseModule { }
