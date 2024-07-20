// Get the URL containing earthquake data
let url =
  "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// Create the map
console.log(1);
let myMap = L.map("map", {
  center: [10, 90],
  zoom: 2,
});

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(myMap);

// Assign depth colours based on the data
function getDepthColour(depth) {
  if (depth >= -10 && depth <= 10) {
    colour = "#FFCC9A";
  } else if (depth > 10 && depth <= 30) {
    colour = "#EC988E";
  } else if (depth > 30 && depth <= 50) {
    colour = "#DC828E";
  } else if (depth > 50 && depth <= 70) {
    colour = "#C76B8F";
  } else if (depth > 70 && depth <= 90) {
    colour = "#8E5A91";
  } else {
    colour = "#634C8D";
  }

  return colour;
}

// Read the data
d3.json(url).then(function (data) {
  L.geoJson(data);
  for (let i = 0; i < data.features.length; i++) {
    var long = data.features[i].geometry.coordinates[0];
    var lat = data.features[i].geometry.coordinates[1];
    var depth = data.features[i].geometry.coordinates[2];
    var magnitude = data.features[i].properties.mag;
    var place = data.features[i].properties.place;
    var tsunami = Boolean(data.features[i].properties.tsunami);
    var radius_eq = Math.abs(magnitude) * 50000;
    var depthColour = getDepthColour(depth);

    // Add marker
    L.circle([lat, long], {
      radius: radius_eq,
      color: depth,
      fillColor: depthColour,
      fillOpacity: 0.6,
    })
      .bindPopup(
        `<h3>${place} </h3> Depth: ${depth} km<br>Magnitude: ${magnitude} <br> Tsunami: ${tsunami}`
      )
      .addTo(myMap);
  }

  // Add legend
  let limits = ["-10 - 10", "10 - 30", "30 - 50", "50 - 70", "70 - 90", "90+"];
  let colours = [
    "#FFCC9A",
    "#EC988E",
    "#DC828E",
    "#C76B8F",
    "#8E5A91",
    "#634C8D",
  ];


  let legend = L.control({position: "bottomright" });
  //console.log(1);
  legend.onAdd = function () {
    let div = L.DomUtil.create("div", "info legend");

    limits.forEach(function (limit, index) {
      let box = '<div id="square_legend" style="background-color: ' +
          colours[index] +
          '">'+ '<div id="text_legend">' + limit + '</div>' + '</div>'
      ;
      
      div.innerHTML += "<div class='container'>" + box + "</div>";
    });

    
    return div;
  };

  legend.addTo(myMap);
});

//  let legend = L.control({ position: "bottomright" });
//  console.log(1);
//  legend.onAdd = function () {
//    let div = L.DomUtil.create("div", "info legend");
//    let limits = depth;
//    let colors = depth;
//    let labels = [];
//  };
//  let legendInfo = "<h1>Earthquake<br />(ages 6-17)</h1>";

// div.innerHTML = legendInfo;
//  legend.addTo(myMap);
//});
