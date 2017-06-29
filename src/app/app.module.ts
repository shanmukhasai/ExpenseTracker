import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { GpcreateComponent } from './gpcreate/gpcreate.component';
import { GpdetailsComponent } from './gpdetails/gpdetails.component';
import { GpleaderComponent } from './gpleader/gpleader.component';
import { WbadminComponent } from './wbadmin/wbadmin.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    GpcreateComponent,
    GpdetailsComponent,
    GpleaderComponent,
    WbadminComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
