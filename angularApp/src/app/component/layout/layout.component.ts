import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor( private router: Router) { }
  isCollapsed = false;
  
  ngOnInit(): void {
  }
  movetocomponet(str:string){
    localStorage.setItem("isLogin", "0");
    this.router.navigate([str]);
  }
}
