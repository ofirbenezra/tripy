import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ti-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  center: google.maps.LatLngLiteral;
  position: google.maps.LatLngLiteral = {lng: 34.85197327979618, lat: 32.32615364926284 };

  constructor() { }

  ngOnInit() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      this.position = this.center;
    });
  }

}
