import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';

import { DashboardComponent } from '../dashboard/dashboard.component';
import { HomeComponent } from '../home/home.component';
import { GpcreateComponent } from '../gpcreate/gpcreate.component';
import { GpdetailsComponent } from '../gpdetails/gpdetails.component';
import { GpleaderComponent } from '../gpleader/gpleader.component';
import { WbadminComponent } from '../wbadmin/wbadmin.component';

const routes: Routes=[
  { path : 'dashboard', component: DashboardComponent },
  { path : 'home',component: HomeComponent },
  { path : 'gpcreate', component: GpcreateComponent },
  { path : 'gpdetails', component: GpdetailsComponent },
  { path : 'gpleader' , component: GpleaderComponent },
  { path : 'wbadmin' , component: WbadminComponent },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
