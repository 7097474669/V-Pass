import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DistributorsRoutingModule } from './distributors-routing.module';
import { DistributorsComponent } from './distributors.component';
import { MaterialModule } from 'src/app/common modules/materials/material.module';
import { DistributorProfileComponent } from './distributor-profile/distributor-profile.component';
import { syncfusion } from 'src/app/common modules/syncfusion/SyncFusion.module';
import { TextBoxAllModule } from '@syncfusion/ej2-angular-inputs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    DistributorsComponent,
    DistributorProfileComponent
  ],
  imports: [FormsModule,
    ReactiveFormsModule,
    CommonModule,
    DistributorsRoutingModule,
    MaterialModule,
    syncfusion,
    TextBoxAllModule,
  ]
})
export class DistributorsModule { }
