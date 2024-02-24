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
       // Define marker options
       let markerOptions = {
        radius: mag * 2.5, // Reflect magnitude
        weight: 0, // Remove outline
        fillColor: getColor(depth), // Reflect depth
        fillOpacity: 0.7,
    };

    // Create marker and bind popup
    let marker = L.circleMarker([lat, lng], markerOptions).addTo(map);
    marker.bindPopup(`<b>${place}</b><br>Magnitude: ${mag}<br>Depth: ${depth} km`);
});
});

// Function to get color based on depth
function getColor(depth) {
    // Customize this function as per your color preferences
    if (depth < 10) {
        return 'green';
    } else if (depth < 30) {
        return 'yellow';
    } else if (depth < 50) {
        return 'orange';
    } else {
        return 'red';
    }
}