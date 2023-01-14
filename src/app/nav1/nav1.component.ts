import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav1',
  templateUrl: './nav1.component.html',
  styleUrls: ['./nav1.component.css']
})
export class Nav1Component implements OnInit {
  userLog = true;
  navColor = {background: "#ECF3F3"};
  constructor() { }

  ngOnInit(): void {
  } 
logout(){}
login(){}

}
