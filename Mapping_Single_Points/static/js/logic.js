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
    id: 'mapbox/dark-v11',
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

// An array containing each city's location, state, and population.
var cityData = cities;

cityData.forEach(function(city) {
  L.circleMarker(city.location,{ // uses pixels instead of meters for radius
  radius: city.population/200000,
  color: 'red',
  fillColor: 'pink',
  borderWeight: 4
  })
  .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
  .addTo(map);
});

// // Loop through the cities array and create one marker for each city.
// cityData.forEach(function(city) {
//   console.log(city)
//   L.marker(city.location)
//   .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
// .addTo(map);
// });

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);