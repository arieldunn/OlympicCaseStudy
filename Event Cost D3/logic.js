// Create a map object
var myMap = L.map("map", {
  center: [15.5994, -28.6731],
  zoom: 3
});

L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);


// function buildMarkers(stock) {
//   // var apiKey = "YOUR KEY HERE";
//   // Country data
//   var url = `http://127.0.0.1:5000/api/v1.0/Irina`;
//   countries = d3.json(url).then(function(data) {

var countries = [
  {
    "city_olympics": "Rome", 
    "country": "Italy", 
    "event_cost_b_usd": NaN, 
    "latit": 41.8931, 
    "longi": 12.4828, 
    "season": "Summer", 
    "year_olympics": 1960
  }, 
  {
    "city_olympics": "Tokyo", 
    "country": "Japan", 
    "event_cost_b_usd": 0.282, 
    "latit": 35.6897, 
    "longi": 139.6922, 
    "season": "Summer", 
    "year_olympics": 1964
  }, 
  {
    "city_olympics": "Mexico City", 
    "country": "Mexico", 
    "event_cost_b_usd": NaN, 
    "latit": 19.4333, 
    "longi": -99.1333, 
    "season": "Summer", 
    "year_olympics": 1968
  }, 
  {
    "city_olympics": "Munich", 
    "country": "Germany", 
    "event_cost_b_usd": 1.009, 
    "latit": 48.1372, 
    "longi": 11.5755, 
    "season": "Summer", 
    "year_olympics": 1972
  }, 
  {
    "city_olympics": "Montreal", 
    "country": "Canada", 
    "event_cost_b_usd": 6.093, 
    "latit": 45.5089, 
    "longi": -73.5617, 
    "season": "Summer", 
    "year_olympics": 1976
  }, 
  {
    "city_olympics": "Moscow", 
    "country": "Soviet Union", 
    "event_cost_b_usd": 6.331, 
    "latit": 55.7558, 
    "longi": 37.6178, 
    "season": "Summer", 
    "year_olympics": 1980
  }, 
  {
    "city_olympics": "Los Angeles", 
    "country": "United States", 
    "event_cost_b_usd": 0.719, 
    "latit": 34.1139, 
    "longi": -118.4068, 
    "season": "Summer", 
    "year_olympics": 1984
  }, 
  {
    "city_olympics": "Seoul", 
    "country": "South Korea", 
    "event_cost_b_usd": NaN, 
    "latit": 37.56, 
    "longi": 126.99, 
    "season": "Summer", 
    "year_olympics": 1988
  }, 
  {
    "city_olympics": "Barcelona", 
    "country": "Spain", 
    "event_cost_b_usd": 9.687, 
    "latit": 41.3825, 
    "longi": 2.1769, 
    "season": "Summer", 
    "year_olympics": 1992
  }, 
  {
    "city_olympics": "Atlanta", 
    "country": "United States", 
    "event_cost_b_usd": 4.143, 
    "latit": 33.7627, 
    "longi": -84.4224, 
    "season": "Summer", 
    "year_olympics": 1996
  }, 
  {
    "city_olympics": "Sydney", 
    "country": "Australia", 
    "event_cost_b_usd": 5.026, 
    "latit": -33.865, 
    "longi": 151.2094, 
    "season": "Summer", 
    "year_olympics": 2000
  }, 
  {
    "city_olympics": "Athens", 
    "country": "Greece", 
    "event_cost_b_usd": 2.942, 
    "latit": 37.9842, 
    "longi": 23.7281, 
    "season": "Summer", 
    "year_olympics": 2004
  }, 
  {
    "city_olympics": "Beijing", 
    "country": "China", 
    "event_cost_b_usd": 6.81, 
    "latit": 39.905, 
    "longi": 116.3914, 
    "season": "Summer", 
    "year_olympics": 2008
  }, 
  {
    "city_olympics": "London", 
    "country": "United Kingdom", 
    "event_cost_b_usd": 14.957, 
    "latit": 51.5072, 
    "longi": -0.1275, 
    "season": "Summer", 
    "year_olympics": 2012
  }, 
  {
    "city_olympics": "Rio", 
    "country": "Brazil", 
    "event_cost_b_usd": 4.557, 
    "latit": -22.9083, 
    "longi": -43.1964, 
    "season": "Summer", 
    "year_olympics": 2016
  }, 
  {
    "city_olympics": "Squaw Valley", 
    "country": "United States", 
    "event_cost_b_usd": NaN, 
    "latit": 38.9393, 
    "longi": -119.9828, 
    "season": "Winter", 
    "year_olympics": 1960
  }, 
  {
    "city_olympics": "Innsbruck", 
    "country": "Austria", 
    "event_cost_b_usd": 0.022, 
    "latit": 47.2683, 
    "longi": 11.3933, 
    "season": "Winter", 
    "year_olympics": 1964
  }, 
  {
    "city_olympics": "Grenoble", 
    "country": "France", 
    "event_cost_b_usd": 0.888, 
    "latit": 45.1715, 
    "longi": 5.7224, 
    "season": "Winter", 
    "year_olympics": 1968
  }, 
  {
    "city_olympics": "Sapporo", 
    "country": "Japan", 
    "event_cost_b_usd": 0.117, 
    "latit": 43.0621, 
    "longi": 141.3544, 
    "season": "Winter", 
    "year_olympics": 1972
  }, 
  {
    "city_olympics": "Innsbruck", 
    "country": "Austria", 
    "event_cost_b_usd": 0.118, 
    "latit": 47.2683, 
    "longi": 11.3933, 
    "season": "Winter", 
    "year_olympics": 1976
  }, 
  {
    "city_olympics": "Lake Placid", 
    "country": "United States", 
    "event_cost_b_usd": 0.435, 
    "latit": 27.2977, 
    "longi": -81.3715, 
    "season": "Winter", 
    "year_olympics": 1980
  }, 
  {
    "city_olympics": "Sarajevo", 
    "country": "Yugoslavia", 
    "event_cost_b_usd": NaN, 
    "latit": 43.8667, 
    "longi": 18.4167, 
    "season": "Winter", 
    "year_olympics": 1984
  }, 
  {
    "city_olympics": "Calgary", 
    "country": "Canada", 
    "event_cost_b_usd": 1.109, 
    "latit": 51.05, 
    "longi": -114.0667, 
    "season": "Winter", 
    "year_olympics": 1988
  }, 
  {
    "city_olympics": "Albertville", 
    "country": "France", 
    "event_cost_b_usd": 1.997, 
    "latit": 34.2634, 
    "longi": -86.2107, 
    "season": "Winter", 
    "year_olympics": 1992
  }, 
  {
    "city_olympics": "Lillehammer", 
    "country": "Norway", 
    "event_cost_b_usd": 2.228, 
    "latit": 61.1146, 
    "longi": 10.4674, 
    "season": "Winter", 
    "year_olympics": 1994
  }, 
  {
    "city_olympics": "Nagano", 
    "country": "Japan", 
    "event_cost_b_usd": 2.227, 
    "latit": 36.6486, 
    "longi": 138.1928, 
    "season": "Winter", 
    "year_olympics": 1998
  }, 
  {
    "city_olympics": "Salt Lake City", 
    "country": "United States", 
    "event_cost_b_usd": 2.52, 
    "latit": 40.7777, 
    "longi": -111.9306, 
    "season": "Winter", 
    "year_olympics": 2002
  }, 
  {
    "city_olympics": "Torino", 
    "country": "Italy", 
    "event_cost_b_usd": 4.366, 
    "latit": 45.0333, 
    "longi": 7.5333, 
    "season": "Winter", 
    "year_olympics": 2006
  }, 
  {
    "city_olympics": "Vancouver", 
    "country": "Canada", 
    "event_cost_b_usd": 2.54, 
    "latit": 49.25, 
    "longi": -123.1, 
    "season": "Winter", 
    "year_olympics": 2010
  }, 
  {
    "city_olympics": "Sochi", 
    "country": "Russia", 
    "event_cost_b_usd": 21.89, 
    "latit": 43.5853, 
    "longi": 39.7203, 
    "season": "Winter", 
    "year_olympics": 2014
  }
];  
// [
//       {
//         "city_olympics": "Rome", 
//         "country": "Italy", 
//         "event_cost_b_usd": NaN, 
//         "latit": 41.8931, 
//         "longi": 12.4828, 
//         "season": "Summer", 
//         "year_olympics": 1960
//       }, 
//       {
//         "city_olympics": "Tokyo", 
//         "country": "Japan", 
//         "event_cost_b_usd": 0.282, 
//         "latit": 35.6897, 
//         "longi": 139.6922, 
//         "season": "Summer", 
//         "year_olympics": 1964
//         }
//     ];


  // Loop through the cities array and create one marker for each city object
  for (var i = 0; i < countries.length; i++) {

    // Conditionals for countries points
    var color = "";
    if (countries[i].event_cost_b_usd >=10) {
     color = "red"
     radiusB = 8;
    }
    else if (countries[i].event_cost_b_usd <= 9.99 && countries[i].event_cost_b_usd >= 5) {
      color = "blue",
      radiusB = 12;
    }
    else if (countries[i].event_cost_b_usd <= 4.99 && countries[i].event_cost_b_usd >= 1) {
     color = "green", 
     radiusB = 16;
    }
    else if (countries[i].event_cost_b_usd <= 0.99 && countries[i].event_cost_b_usd >= 0) {
      color = "yellow", 
      radiusB = 20;
    }
    else {
      color = "pink",
      radiusB = 6;
    }


    // Add circles to map
    L.circleMarker([countries[i].latit, countries[i].longi], {
      fillOpacity: 0.75,
      color: "white",
      fillColor: color,
      // Adjust radius
      // radius: countries[i].event_cost_b_usd * 10
      radius: radiusB
    }).bindPopup("<h1>" + countries[i].country + "</h1> <hr> <h3>" + countries[i].city_olympics + " " + countries[i].year_olympics + " " +  countries[i].season + "<hr>" + " Cost: " + countries[i].event_cost_b_usd + " Billion USD </h3>").addTo(myMap);
    }

  
// }