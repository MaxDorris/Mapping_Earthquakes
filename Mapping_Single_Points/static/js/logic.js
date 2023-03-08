// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map("mapid", {
    center: [
      40.7, -94.5
    ],
    zoom: 4
  });

  // We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/dark-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY


    // OTHER MAP LAYERS

    // mapbox/streets-v11
    // mapbox/outdoors-v11
    // mapbox/light-v10
    // mapbox/dark-v10
    // mapbox/satellite-v9
    // mapbox/satellite-streets-v11
});

//  Add a marker to the map for Los Angeles, California.
// L.circle([34.0522, -118.2437], {
//   radius: 300,
//   color: "black",
//   fillColor: 'lightyellow'
// }).addTo(map);

L.circleMarker([34.0522, -118.2437],{ // uses pixels instead of meters for radius

radius: 30,
color: 'red',
fillColor: 'pink'

}).addTo(map);


// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);