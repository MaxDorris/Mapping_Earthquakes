console.log('mami')

let street = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

let baseMaps = {
    Street: street,
    Satellite: satelliteStreets
  };


  // Create the map object with center, zoom level and default layer.
  let map = L.map('mapid', {
      center: [39.5, -98.5],
      zoom: 3,
      layers: [satelliteStreets]
  });

  // Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

let myStyle = {
  weight: 1,
  fillColor: 'yellow',
  color: 'purple',
  fillOpacity: .1

}

// Accessing the airport GeoJSON URL
let sixHoods = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson';

// Grabbing our GeoJSON data.
d3.json(sixHoods).then(function(data) {
    console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJSON(data, {
    // We turn each feature into a marker on the map.
    onEachFeature: function(feature, layer) {
      console.log(layer);
      layer.bindPopup('<h3>Area (ID):  ' + feature.properties.AREA_NAME + '</h3>');
    },
    style: myStyle
  }).addTo(map);
});