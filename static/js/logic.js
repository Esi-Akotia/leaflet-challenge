// Initialize the map
let map = L.map('map').setView([0, 0], 2);

// Add the base map tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
}).addTo(map);

