// Create a map object
var myMap = L.map("map", {
  center: [37.09, -95.71],
  zoom: 2
});

// Add a tile layer
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);

// An array containing each city's name, location, and population
var cities = [{
  location: [45.6755,	6.3927],
  name: "Albertville",
  population: "1.997"
},
{
  location: [37.9838, 23.7275],
  name: "Athens",
  population: "2.942"
},
{
  location: [33.7490, -84.3880],
  name: "Atlanta",
  population: "4.143"
},
{
  location: [41.3874, 2.1686],
  name: "Barcelona",
  population: "9.687"
},
{
  location: [39.9042, 116.4074],
  name: "Beijing",
  population: "6.81"
},
{
  location: [51.0447, -114.0719],
  name: "Calgary",
  population: "1.109"
},
{
  location: [45.1885, 5.7245],
  name: "Grenoble",
  population: "0.888"
},
{
  location: [47.2692, 11.4041],
  name: "Innsbruck",
  population: "0.022"
},
{
  location: [47.2692, 11.5041],
  name: "Innsbruck",
  population: "0.118"
},
{
  location: [44.2795, -73.9799],
  name: "Lake Placid",
  population: "0.435"
},
{
  location: [61.1153, 10.4662],
  name: "Lillehammer",
  population: "2.228"
},
{
  location: [51.5074, -0.1278],
  name: "London",
  population: "14.957"
},
{
  location: [34.0522, -118.2437],
  name: "Los Angeles",
  population: "0.719"
},
{
  location: [19.4326, -99.1332],
  name: "Mexico City",
  population: "N/A"
},
{
  location: [45.5017, -73.5673],
  name: "Montreal",
  population: "6.093"
},
{
  location: [55.7558, 37.6173],
  name: "Moscow",
  population: "6.331"
},
{
  location: [48.1351, 11.5820],
  name: "Munich",
  population: "1.009"
},
{
  location: [36.6485, 138.1950],
  name: "Nagano",
  population: "2.227"
},
{
  location: [-22.9068, -43.1729],
  name: "Rio",
  population: "4.557"
},
{
  location: [41.9028, 12.4964],
  name: "Rome",
  population: "N/A"
},
{
  location: [40.7608, -111.8910],
  name: "Salt Lake City",
  population: "2.52"
},
{
  location: [43.0618, 141.3545],
  name: "Sapporo",
  population: "0.117"
},
{
  location: [43.8563, 18.4131],
  name: "Sarajevo",
  population: "N/A"
},
{
  location: [37.5665, 126.9780],
  name: "Seoul",
  population: "N/A"
},
{
  location: [43.6028, 39.7342],
  name: "Sochi",
  population: "21.89"
},
{
  location: [39.1976, -120.2354],
  name: "Squaw Valley",
  population: "N/A"
},
{
  location: [-33.8688, 151.2093],
  name: "Sydney",
  population: "5.026"
},
{
  location: [35.6762, 139.6503],
  name: "Tokyo",
  population: "0.282"
},
{
  location: [45.0703, 7.6869],
  name: "Torino",
  population: "4.366"
},
{
  location: [49.2827, -123.1207],
  name: "Vancouver",
  population: "2.54"
}
];

// Loop through the cities array and create one marker for each city, bind a popup containing its name and population add it to the map
for (var i = 0; i < cities.length; i++) {
  var city = cities[i];
  L.marker(city.location)
    .bindPopup("<h1>" + city.name + "</h1> <hr> <h3>Cost per Billion " + city.population + "</h3>")
    .addTo(myMap);
}
