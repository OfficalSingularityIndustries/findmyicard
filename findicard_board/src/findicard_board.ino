/*
 * Project findicard_board
 * Description:
 * Author: Amari Matthews
 * Date:07/19/2019
 */
#include <google-maps-device-locator.h>

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
  String data = String (10);
  //Triggering the Intergration
  Particle.publish("findmyicard", data, PRIVATE);
  //Wait 1 minute
  delay(60000);
}