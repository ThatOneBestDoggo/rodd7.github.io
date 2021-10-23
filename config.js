var ogf = OGFUtil();
globalThis.map;
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
    L.marker([-33.09586, 35.44253], { icon: primaryAirport }).addTo(map); //soprasser
    L.marker([-34.85432, 35.80759], { icon: primaryAirport }).addTo(map); //corrostance
    
    L.marker([-41.98565, 28.46029], { icon: primaryAirport }).addTo(map); //frank trostel paxtar

    L.marker([-50.1564, 72.9446], { icon: primaryAirport }).addTo(map); //bakohuz

    L.marker([-39.0626, 17.247], { icon: primaryAirport }).addTo(map); //guai
    L.marker([-40.2958, 14.9975], { icon: primaryAirport }).addTo(map); //guai

    L.marker([-40.0207, 159.5987], { icon: primaryAirport }).addTo(map); //fsa stanton

    L.marker([-38.74783, 32.14310], { icon: secondaryAirport }).addTo(map); //flying school

    L.marker([-35.6412, 161.4885], { icon: primaryAirport }).addTo(map); //Juliana Hálison International Airport
    L.marker([-41.5628, 141.3036], { icon: primaryAirport }).addTo(map); //Lake City International Airport
    L.marker([-42.4362, 145.9547], { icon: primaryAirport }).addTo(map); //Jonnequiel International Airport
    L.marker([-41.8326, 143.7994], { icon: primaryAirport }).addTo(map); //Foley-Fillmore International Airport
    L.marker([-40.0147, 159.981], { icon: primaryAirport }).addTo(map); //E Benjamin K. Hedstrom International Airport

    function LY500() { //soprasser to layritan
        var myMovingMarker = L.Marker.movingMarker([[-33.09586, 35.44253], [-35.29846, 45.04518]],
            [10000], { rotationAngle: 60, icon: airplane_largeY }).addTo(map)
        myMovingMarker.start();
        myMovingMarker.bindPopup("<b>Hello world!</b><br>I am a popup.")
    }

    function PX500() { //soprasser to paxtar (TEST)
        var myMovingMarker = L.Marker.movingMarker([[-33.09586, 35.44253], [-41.98565, 28.46029]],
            [10000], { rotationAngle: 170, icon: airplane_largeY }).addTo(map)
        myMovingMarker.start();
        myMovingMarker.bindPopup("<b>Hello world!</b><br>I am a popup.")
    }


    // setTimeout(function () { }, millisTill10);

    // var eta_ms = new Date(2021, 9, 23, 17, 0).getTime() - Date.now();
    // setTimeout(function () { }, eta_ms);

    LY500();
    PX500();

    console.log(uMonths + " " + uDates + " " + uDays); //it works

    // $(document).ready(function () {
    //     liveTime();
    // });

    // function liveTime() {
    //     var h = today.getUTCHours();
    //     var m = today.getUTCMinutes();
    //     t = setTimeout(function () { liveTime() }, 500);




    // }





}


