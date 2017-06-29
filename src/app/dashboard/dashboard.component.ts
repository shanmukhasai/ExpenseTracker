import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public loginVerified=true;
  public enableSide=false;
  public mainMargin='0%';
  public sidebarWidth='0%';
  public showAcc=false;
  constructor() { }

  ngOnInit() {
  }
  public toggleAcc(){
    this.showAcc=!(this.showAcc);
  }
  public w3_open(){
    if(this.enableSide){
      this.mainMargin='0%';
      this.sidebarWidth='0%';
      this.showAcc=false;
    }
    else{
      this.mainMargin='25%';
      this.sidebarWidth='25%';
    }
    this.enableSide=!(this.enableSide);
  }
  public hide(){
    this.loginVerified=!this.loginVerified;
  }

}
