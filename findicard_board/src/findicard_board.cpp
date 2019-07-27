/******************************************************/
//       THIS IS A GENERATED FILE - DO NOT EDIT       //
/******************************************************/

#include "application.h"
#line 1 "/home/hunt3r/findmyicard/findmyicard/findicard_board/src/findicard_board.ino"
/*
 * Project findicard_board
 * Description:
 * Author: Amari Matthews
 * Date:07/19/2019
 */
#include <google-maps-device-locator.h>

void setup();
void locationCallback(float lat, float lon, float accuracy);
void loop();
#line 9 "/home/hunt3r/findmyicard/findmyicard/findicard_board/src/findicard_board.ino"
GoogleMapsDeviceLocator locator;

void setup() {
  Serial.begin(9600);
  // Scan for visible networks and publish to the cloud every 30 seconds
  // Pass the returned location to be handled by the locationCallback() method
  locator.withSubscribe(locationCallback).withLocatePeriodic(30);
}

void locationCallback(float lat, float lon, float accuracy) {
  // Handle the returned location data for the device. This method is passed three arguments:
  // - Latitude
  // - Longitude
  // - Accuracy of estimated location (in meters)
}

void loop() {
  locator.loop();
}