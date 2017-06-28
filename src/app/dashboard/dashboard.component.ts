import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public enableSide=false;
  public mainMargin='0%';
  public sidebarWidth='0%';
  constructor() { }

  ngOnInit() {
  }
  public w3_open(){
    this.enableSide=true;
    this.mainMargin='25%';
    this.sidebarWidth='25%';
  }
  public w3_close(){
    this.enableSide=false;
    this.mainMargin='0%';
    this.sidebarWidth='0%';
  }

}
