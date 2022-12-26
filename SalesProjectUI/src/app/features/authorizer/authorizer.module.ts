import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorizerRoutingModule } from './authorizer-routing.module';
import { AuthorizerComponent } from './authorizer.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AuthorizerComponent
  ],
  imports: [
    CommonModule,
    AuthorizerRoutingModule,
    MatTabsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule

  ]
})
export class AuthorizerModule { }
