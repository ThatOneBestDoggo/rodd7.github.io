var ogf = OGFUtil();
var map
var layer;
var mapOptions = {};
var synconst = 1000;

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
   

    //timeshadow
    var t = L.terminator();
    t.addTo(map);
    setInterval(function(){updateTerminator(t)}, synconst); 

    function updateTerminator(t) {
        t.setTime();
    }

    //icons
    // airport classification by:
    //      primary hub of the country
    //      regional hubs
    //      minor airports/bases (if important)

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

    //type of airplane model/size
    

        //need to find way to store airports into js (import, or require) without breaking map
    L.marker([-33.09557, 35.44311], {icon: primaryAirport}).addTo(map); //soprasser: home
    L.marker([-35.29846, 45.04518], {icon: primaryAirport}).addTo(map); //layr

    L.marker([-39.0626, 17.247], {icon: primaryAirport}).addTo(map); //guai
    L.marker([-40.2958, 14.9975], {icon: primaryAirport}).addTo(map); //guai

    L.marker([-40.0207, 159.5987], {icon: primaryAirport}).addTo(map); //fsa stanton

    L.marker([-38.74783, 32.14310], {icon: secondaryAirport}).addTo(map); //flying school

    
    

    }


    

    // airports.map(item => console.log(item +1));
