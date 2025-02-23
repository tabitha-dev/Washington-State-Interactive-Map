// Initialize the map
var map = L.map('map').setView([47.7511, -120.7401], 7);

// Add OpenStreetMap tiles
var lightLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

var darkLayer = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.carto.com/">CartoDB</a>'
});

// Toggle between light and dark modes
var baseMaps = {
    "Light Mode": lightLayer,
    "Dark Mode": darkLayer
};
L.control.layers(baseMaps).addTo(map);

// Add markers for cities and attractions
var locations = [
    { name: "Seattle", coords: [47.6062, -122.3321] },
    { name: "Olympia", coords: [47.0458, -122.896] },
    { name: "Redmond", coords: [47.6740, -122.1215] },
    { name: "Mount Baker", coords: [48.7769, -121.8144] },
    { name: "Mount Rainier", coords: [46.8523, -121.7603] },
    { name: "Olympic National Park", coords: [47.8021, -123.6044] },
    { name: "Space Needle", coords: [47.6205, -122.3493] }
];

// Function to add markers
locations.forEach(function(place) {
    L.marker(place.coords).addTo(map)
     .bindPopup(`<strong>${place.name}</strong>`);
});

// Add zoom control
L.control.zoom({
    position: 'topright'
}).addTo(map);
