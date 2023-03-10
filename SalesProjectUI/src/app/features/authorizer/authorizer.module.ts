import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorizerRoutingModule } from './authorizer-routing.module';
import { AuthorizerComponent } from './authorizer.component';
import { MaterialModule } from 'src/app/common modules/materials/material.module';
import { UpdateprofileComponent } from './updateprofile/updateprofile.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AuthorizerComponent,
    UpdateprofileComponent
  ],
  imports: [
    CommonModule,
    AuthorizerRoutingModule,
    MaterialModule,
    CommonModule,ReactiveFormsModule

  ]
})
export class AuthorizerModule { }
