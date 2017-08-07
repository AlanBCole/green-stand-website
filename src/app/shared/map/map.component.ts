import { Component, OnInit } from '@angular/core';

import { AgmCoreModule } from '@agm/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  title = 'First Map in Angular 4!';
  lat = 6.49;
  lng = 39.16;
  constructor() { }

  ngOnInit() {
  }

}
