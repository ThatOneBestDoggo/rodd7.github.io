var ogf = OGFUtil();
var map
var layer;
var mapOptions = {};
var synconst = 1000;

function loadMap() {
    map = L.map('map', mapOptions).setView([17.95, 91.29], 3);
    var loadingControl = L.Control.loading({
        separate: true
    });
    map.addControl(loadingControl);
    var ogfMap = ogf.map(map, { layers: 'Standard,TopoMap' });

    //night shade
    var t = L.terminator();
    t.addTo(map);
    setInterval(function () { updateTerminator(t) }, synconst);
    function updateTerminator(t) {
        t.setTime();
    }
    // var marker = new L.marker([-40.99497,17]).bindPopup('7C6B07').addTo(map);


    L.marker([-35.29846, 45.04518], { icon: primaryAirport }).addTo(map); //layr

    L.marker([-39.0626, 17.247], { icon: primaryAirport }).addTo(map); //guai
    L.marker([-40.2958, 14.9975], { icon: primaryAirport }).addTo(map); //guai

    L.marker([-40.0207, 159.5987], { icon: primaryAirport }).addTo(map); //fsa stanton

    L.marker([-38.74783, 32.14310], { icon: primaryAirport }).addTo(map); //flying school



}


