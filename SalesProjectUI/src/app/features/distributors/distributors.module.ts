import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DistributorsRoutingModule } from './distributors-routing.module';
import { DistributorsComponent } from './distributors.component';


@NgModule({
  declarations: [
    DistributorsComponent
  ],
  imports: [
    CommonModule,
    DistributorsRoutingModule
  ]
})
export class DistributorsModule { }
