var ogf = OGFUtil();
var map
var layer;
var mapOptions = {};

// const airports = require("./airports");



function loadMap(){
    map = L.map('map', mapOptions).setView([17.95, 91.29], 3);
    var loadingControl = L.Control.loading({
        separate: true
    });

    map.addControl(loadingControl);
    var ogfMap = ogf.map( map, {layers: 'Standard,TopoMap'} );


    L.marker([51.5, -0.09]).addTo(map); //works here
    // var marker = new L.marker([-40.99497,17]).bindPopup('7C6B07').addTo(map);

    for (var i = 0; i < airports.length; i++) {
        var marker = new L.marker([airports[i][1],airports[i][2]]).bindPopup(airports[i][0]).addTo(map);
    }
   



    var primaryAirport = L.icon({
        iconUrl: 'resources/greymarker.png',
        iconSize: [15, 15],
        iconAnchor: [7, 15],
        popupAnchor: [-3, -76],
    });
    var secondaryAirport = L.icon({
        iconUrl: 'resources/redmarker.png',
        iconSize: [15, 15],
        iconAnchor: [7, 15],
        popupAnchor: [-3, -76],
    });
    
    L.marker([-33.09557, 35.44311], {icon: primaryAirport}).addTo(map);
    L.marker([-35.29846, 45.04518], {icon: primaryAirport}).addTo(map);

    

    }


    

    // airports.map(item => console.log(item +1));
