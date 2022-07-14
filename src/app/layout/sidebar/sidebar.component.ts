import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { menu } from 'src/consts';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, OnChanges {

  @Input('StateSidebar') StateSidebar: boolean;

  public menu = menu
  


  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.StateSidebar)
  }

  ngOnInit(): void {
  }

}
