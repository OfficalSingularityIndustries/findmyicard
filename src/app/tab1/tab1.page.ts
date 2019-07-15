import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { GoogleMaps, GoogleMap, GoogleMapsEvent,
GoogleMapOptions, CameraPosition, MarkerOptions, Marker, Environment} from '@ionic-native/google-maps';
import { NavController, Platform } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  @ViewChild('map') mapElement: ElementRef;
  map: GoogleMap;

  constructor(private platform:Platform) {}

  async ngOnInit() {
    await this.platform.ready();
    await this.loadMap();
  }

  loadMap() {

    //Dont change this!
    Environment.setEnv({
      'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyDOxEvOoEfcIqoIyQL6FX8tLfXecaN4zc4',
      'API_KEY_FOR_BROWSER_DEBUG' : 'AIzaSyDOxEvOoEfcIqoIyQL6FX8tLfXecaN4zc4'
    });

    // let mapOptions = {
    //   center: latLng,
    //   zoom: 1015,
    //   mapTypeId: google.maps. MapTypeId.ROADMAP
    

    this.map = GoogleMaps.create('map_canvas');
  }
}
  


    
