import { Component, OnInit } from '@angular/core';

import { AgmCoreModule } from '@agm/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  title = 'First Map in Angular 4!';
  lat = 51.678418;
  lng = 7.809007;
  constructor() { }

  ngOnInit() {
  }

}
