import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DistributorsRoutingModule } from './distributors-routing.module';
import { DistributorsComponent } from './distributors.component';
import { MaterialModule } from 'src/app/common modules/materials/material.module';

@NgModule({
  declarations: [
    DistributorsComponent
  ],
  imports: [
    CommonModule,
    DistributorsRoutingModule,
    MaterialModule
  ]
})
export class DistributorsModule { }
