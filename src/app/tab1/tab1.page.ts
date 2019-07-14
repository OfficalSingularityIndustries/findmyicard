import { Component } from '@angular/core';
import { GoogleMaps, GoogleMap, GoogleMapsEvent,
GoogleMapOptions, CameraPosition, MarkerOptions, Marker, Environment} from '@ionic-native/google-maps';

@Component({
  selector: 'Location-Home',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  map: GoogleMap;

  constructor() {}

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {

    //Dont change this!
    Environment.setEnv({
      'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyDOxEvOoEfcIqoIyQL6FX8tLfXecaN4zc4',
      'API_KEY_FOR_BROWSER_DEBUG' : 'AIzaSyDOxEvOoEfcIqoIyQL6FX8tLfXecaN4zc4'
    });

    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: 43.0741904,
          lng: -89.3809802
        },
        zoom: 18,
        tilt: 30
      }
    };

    this.map = GoogleMaps.create('map_canvass', mapOptions);

    let marker: Marker = this.map.addMarkerSync({
      title: 'FindmyIcard',
      icon: 'red',
      animation: 'DROP',
      position: {
        lat: 43.0741904,
        lng: -89.3809802
      }

    });
    marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
      alert('clicked');
    });
  }

}
