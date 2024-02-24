// Initialize the map
let map = L.map('map').setView([0, 0], 2);

// Add the base map tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
}).addTo(map);

// Load the GeoJSON data
fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson')
    .then(response => response.json())
    .then(data => {
        // Loop through each earthquake feature
        data.features.forEach(feature => {
            // Extract necessary properties
            let mag = feature.properties.mag;
            let depth = feature.geometry.coordinates[2];
            let lng = feature.geometry.coordinates[0];
            let lat = feature.geometry.coordinates[1];
            let place = feature.properties.place;
        })});      
    console.log(mag, depth, lng, lat, place)