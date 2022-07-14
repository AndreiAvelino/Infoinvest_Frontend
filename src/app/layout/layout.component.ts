import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  public stateSideBar: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public openSideBar(){    
    this.stateSideBar = !this.stateSideBar    
  }

}
