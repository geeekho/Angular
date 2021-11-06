import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-user',
  templateUrl: './main-user.component.html',
  styleUrls: ['./main-user.component.css']
})
export class MainUserComponent implements OnInit {

  showAdd: boolean

  constructor() { }

  ngOnInit(): void {
    console.log("je suis main user");
    this.showAdd=false
  }

  toggleShow(){
    this.showAdd=!this.showAdd

  }

}
