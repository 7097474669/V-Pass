import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { syncfusion } from './common modules/syncfusion/SyncFusion.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './features/home/home.component';
import { LoginpageComponent } from './features/loginpage/loginpage.component';
import { MaterialModule } from './common modules/materials/material.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { WareHouseComponent } from './features/ware-house/ware-house.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginpageComponent,
    WareHouseComponent
  ],
  //schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    syncfusion,
    FormsModule,
    MaterialModule,
    RouterModule,
    MatInputModule,
    HttpClientModule,ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

