import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { SidebarComponent } from './sidebar/sidebar.component';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';

const materialModules = [
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule
]

@NgModule({
  declarations: [
    LayoutComponent, 
    NavbarComponent,
    SidebarComponent,
  ],
  imports: [
    ...materialModules,
    CommonModule,
    RouterModule
  ],
  exports: [LayoutComponent]
})
export class LayoutModule { }
