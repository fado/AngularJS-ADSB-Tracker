import { Component, OnInit } from '@angular/core';
import { AdsbService } from './adsb.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AdsbService],
})
export class AppComponent implements OnInit {
  zoom: number = 8;

  // EGAA: 54.6575012207,-6.2158298492399995
  defaultLatitude: number = 54.6575012207;
  defaultLongitude: number = -6.2158298492399995;

  latitude: number;
  longitude: number;

  markers: marker[] = [];

  constructor(private adsbService: AdsbService) {}

  ngOnInit() {
    this.latitude = this.defaultLatitude;
    this.longitude = this.defaultLongitude;

    this.findAircraft(this.latitude, this.longitude, 100);
  }

  findAircraft(latitude: number, longitude: number, range: number) {
    let _markers = [];
    this.adsbService.getAircraft(this.latitude, this.longitude, range)
      .subscribe(data => {
        for(let aircraft of data['acList']) {
          _markers.push(
            {
              lat: aircraft['Lat'],
              lng: aircraft['Long'],
              label: aircraft['Reg'],
              draggable: false
            }
          )
        }
      },
      (error) => {
        console.log(error);
      },
      () => {
        this.markers = _markers;
      });
  }
}

interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}
