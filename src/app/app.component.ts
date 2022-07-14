import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { inserirToken, IAppStore,  } from './store/app-store';
import { map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  
  constructor(){}  
  
}
