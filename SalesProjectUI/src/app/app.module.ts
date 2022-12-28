import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { syncfusion } from './common modules/syncfusion/SyncFusion.module';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './features/home/home.component';
import { LoginpageComponent } from './features/loginpage/loginpage.component';
import { MaterialModule } from './common modules/materials/material.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    syncfusion,
    FormsModule,
    MaterialModule,
    RouterModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

