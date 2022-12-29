import { NgModule } from '@angular/core';
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
    FormsModule,ReactiveFormsModule,
    syncfusion,
    FormsModule,
    MaterialModule,
    RouterModule,
    HttpClientModule,ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

