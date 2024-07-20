// Get the URL containing earthquake data
let url =
  "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// Create the map
console.log(1);
let myMap = L.map("map", {
  center: [39.8283, -98.5795],
  zoom: 4,
});

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(myMap);

// Assign depth colours based on the data
function getDepthColour(depth) {
  if (depth >= -10 && depth <= 10) {
    return "#FFCC9A";
  } else if (depth > 10 && depth <= 30) {
    return "#EC988E";
  } else if (depth > 30 && depth <= 50) {
    return "#DC828E";
  } else if (depth > 50 && depth <= 70) {
    return "#C76B8F";
  } else if (depth > 70 && depth <= 90) {
    return "#8E5A91";
  } else {
    return "#634C8D";
  }
}

// Read the data
d3.json(url).then(function (data) {
  L.geoJson(data, {
    pointToLayer: function (feature, latlng) {
      var depth = feature.geometry.coordinates[2];
      var magnitude = feature.properties.mag;
      var place = feature.properties.place;
      var tsunami = Boolean(feature.properties.tsunami);
      var radius_eq = Math.abs(magnitude) * 50000;
      var depthColour = getDepthColour(depth);

      return L.circle(latlng, {
        radius: radius_eq,
        color: depthColour,
        fillColor: depthColour,
        fillOpacity: 0.6,
      }).bindPopup(
        `<h3>${place} </h3> Depth: ${depth} km<br>Magnitude: ${magnitude} <br> Tsunami: ${tsunami}`
      );
    },
  }).addTo(myMap);


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

  let legend = L.control({ position: "bottomright" });
  legend.onAdd = function () {
    let div = L.DomUtil.create("div", "info legend");

    limits.forEach(function (limit, index) {
      let box =
        '<div id="square_legend" style="background-color: ' +
        colours[index] +
        '">' +
        '<div id="text_legend">' +
        limit +
        "</div>" +
        "</div>";
      div.innerHTML += "<div class='container'>" + box + "</div>";
    });

    return div;
  };

  legend.addTo(myMap);
});

