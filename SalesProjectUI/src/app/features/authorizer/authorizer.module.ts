import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorizerRoutingModule } from './authorizer-routing.module';
import { AuthorizerComponent } from './authorizer.component';
import { MaterialModule } from 'src/app/common modules/materials/material.module';

@NgModule({
  declarations: [
    AuthorizerComponent
  ],
  imports: [
    CommonModule,
    AuthorizerRoutingModule,
    MaterialModule,
    CommonModule

  ]
})
export class AuthorizerModule { }
