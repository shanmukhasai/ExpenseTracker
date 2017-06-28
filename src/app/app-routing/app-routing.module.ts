import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';

import { DashboardComponent } from '../dashboard/dashboard.component';
import { HomeComponent } from '../home/home.component';

const routes: Routes=[
  { path : 'dashboard', component: DashboardComponent },
  { path : 'home',component: HomeComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
