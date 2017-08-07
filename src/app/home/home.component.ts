import { Component, OnInit } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { HttpService } from '../http.service';

@Component({
    selector: 'app-home',
    template:   `
                <agm-map
                    [latitude]="lat"
                    [longitude]="lng" 
                    [zoom]="zoom"
                    [disableDefaultUI]="disDefaultUi"
                    [mapDraggable]="drag"
                    [mapTypeId]="mapType"
                    (mapClick)="clicked($event)">
                        <agm-marker [latitude]="lat" [longitude]="lng"></agm-marker>
                </agm-map>
                `,
    styles: ['agm-map { height: 75vh; overflow: hidden}']
})

export class HomeComponent implements OnInit {
    title = 'First Map in Angular 4!';
    lat = -4.806364708499984;
    lng = 35.419921875;
    zoom = 8;
    disDefaultUi = true;
    drag = false;
    mapType = 'terrain';
    allTrees: Tree[];

    constructor (private httpService: HttpService, private http: Http) {}

    ngOnInit () {
        console.log('Home Page!');

        this.httpService.getTrees()
            .subscribe(
                function (res: Response) {
                    this.allTrees = res.json;
                    console.log(this.allTrees);
                },
                (error) => console.log(error)
            );
    }
    
    clicked(event) {
        console.log(event);
    }
}

interface Tree {
    treeId: number;
    lat: number;
    lon: number;
    photos?: string[];
    notes?: string[];
}
