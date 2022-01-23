//displays UTC Time
$(document).ready(function () {
    startTime();
});

function startTime() {
    var today = new Date(); //-11 hrs
    globalThis.uMonths = today.getUTCMonth() + 1; // 1 for January, 2 for February, 3 for March, and so on
    globalThis.uDays = today.getUTCDay(); // 1 for Monday, 2 for Tuesday, and so on.
    globalThis.uDates = today.getUTCDate(); // ranging from 1 to 31
    globalThis.uHours = today.getUTCHours();
    globalThis.uMinutes = today.getUTCMinutes();
    globalThis.uSeconds = today.getUTCSeconds();

    // add a zero in front of numbers<10
    uMinutes = addZero(uMinutes);
    uSeconds = addZero(uSeconds);
    document.getElementById('utcTime').innerHTML = uHours + ":" + uMinutes + ":" + uSeconds;
    t = setTimeout(function () { startTime() }, 500);
}

function addZero(x) {
    if (x < 10) {
        x = "0" + x;
    }
    return x;
}

$(document).on('click', '.dropdown-menu', function (e) {
    e.stopPropagation();
});

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})


function generate(){
    var output = document.getElementById("areaoutput");

    var flight = document.getElementById("Gflight");
    var airline = document.getElementById("Gairlinewaat");
    var takeoff_hour = document.getElementById("Gtakeoffhour");
    var takeoff_minute = document.getElementById("Gtakeoffminute");
    var timezone_from = document.getElementById("Gtimezonefrom");
    var timezone_to = document.getElementById("Gtimezoneto");
    var WAAT_from = document.getElementById("Gwaatfrom");
    var WAAT_to = document.getElementById("Gwaatto");
    var age = document.getElementById("Gaircraftage");
    var registration = document.getElementById("Gregistration");
    var prepare = document.getElementById("Gprepare");
    var disembark = document.getElementById("Gdisembark");
    var codeshare = document.getElementById("Gcodeshare");

    var airplanes = document.getElementById("airplanes");
    var selectedValue = airplanes.options[airplanes.selectedIndex].value;
    var airplanevalue;
    var airplanesize;

    switch (selectedValue) {
        case "0":
            airplanevalue = "DG_70";
            airplanesize = "medium";
            break;
        case "1":
            airplanevalue = "DG_80";
            airplanesize = "medium";
            break;
        case "2":
            airplanevalue = "DG_86";
            airplanesize = "large";
            break;
        case "3":
            airplanevalue = "Contair_D20a";
            airplanesize = "medium";
            break;
        case "4":
            airplanevalue = "W34";
            airplanesize = "medium";
            break;
        case "5":
            airplanevalue = "W36";
            airplanesize = "medium";
            break;
        case "6":
            airplanevalue = "W39";
            airplanesize = "large";
            break;
        case "7":
            airplanevalue = "W39-B";
            airplanesize = "large";
            break;
        case "8":
            airplanevalue = "ADD_AIRCRAFT";
            airplanesize = "ADD_SIZE";
            break;
    }

    var alliances = document.getElementById("alliances");
    var selectedAlliance = alliances.options[alliances.selectedIndex].value;
    var alliancevalue;

    switch (selectedAlliance) {
        case "0":
            alliancevalue = "\"\"";
            break;
        case "1":
            alliancevalue = "worldstar";
            break;

        case "2":
            alliancevalue = "onesky";
            break;

        case "3":
            alliancevalue = "fourcorners";
            break;

        case "4":
            alliancevalue = "geoalliance";
            break;
    }
    
    var flightduration = Math.round(duration(getDistanceFromLatLonInKm(airports[WAAT_from.value].coord, airports[WAAT_to.value].coord),aircrafts[airplanevalue].cruise));
    var flightstart = (24 - takeoff_hour.value) * 60 * 60 + takeoff_minute.value * 60;
    var flightmode;

    if (flightduration > flightstart){
        flightmode = "first";
    } else {
        flightmode = "today";
    }
        
    var fulltext = "createDuringFlight(" + flight.value + "live," + flight.value + "popup,airports." + WAAT_from.value + ".coord,airports." + WAAT_to.value + ".coord,aircrafts." + airplanevalue + ".cruise," + flight.value + "," + airplanesize + ");\n";
    fulltext = fulltext + "const " + flight.value + "schedule = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), " + flightmode + ".getUTCDate(), flights." + flight.value + ".liftoff_hour, flights." + flight.value + ".liftoff_minute, 0);\n";
    fulltext = fulltext + "createBeforeLift(" + flight.value + "schedule," + 60* prepare.value + "," + 60*disembark.value + "," + flight.value + "," + flight.value + "popup,airports." + WAAT_from.value + ".coord,airports." + WAAT_to.value + ".coord,aircrafts." + airplanevalue + ".cruise);\n";
    fulltext = fulltext + "const " + flight.value + "live = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), " + flightmode + ".getUTCDate(), flights." + flight.value + ".liftoff_hour, flights." + flight.value + ".liftoff_minute, 0);\n";
    fulltext = fulltext + "var " + flight.value + "= makeMarker(airports." + WAAT_from.value + ".coord,airports." + WAAT_to.value + ".coord,aircrafts." + airplanevalue + ".cruise," + airplanesize + "); " + flight.value + ".setOpacity(0);\n";
    fulltext = fulltext + "var " + flight.value + "popup = flightdetail(\"" + flight.value + "\", \"" + airline.value + "\", \"" + codeshare.value + "\",aircrafts." + airplanevalue + ".image," + timezone_from.value + "," + timezone_to.value + ",flags." + registration.value + "," + alliancevalue + "); \n\n" ;
    fulltext = fulltext + "\"" + flight.value + "\": {\n";
    fulltext = fulltext + "\"name\": \"" + flight.value + "\",\n";
    fulltext = fulltext + "\"liftoff_hour\": " + takeoff_hour.value + ",\n";
    fulltext = fulltext + "\"liftoff_minute\": " + takeoff_minute.value + ",\n";
    fulltext = fulltext + "\"from_WAAT\": \"" + WAAT_from.value + "\",\n";
    fulltext = fulltext + "\"to_WAAT\": \"" + WAAT_to.value + "\",\n";
    fulltext = fulltext + "\"aircraft\": \"" + airplanevalue + "\",\n";
    fulltext = fulltext + "\"age\": " + age.value + ",\n";
    fulltext = fulltext + "\"opt_livery\": " + "\"\"" + " \n";
    fulltext = fulltext + "},";
    output.innerHTML= fulltext;


    //createDuringFlight(LY500live,LY500popup,airports.SIA.coord,airports.LYR.coord,aircrafts.AV_Nieida200.cruise,LY500,small);

    //const UE401schedule = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), first.getUTCDate(), flights.UE401.liftoff_hour, flights.UE401.liftoff_minute, 0);

    //createBeforeLift(LY500schedule,60*60,60*30,LY500,LY500popup,airports.SIA.coord,airports.LYR.coord,aircrafts.AV_Nieida200.cruise);

    //const UE401live = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), first.getUTCDate(), flights.UE401.liftoff_hour, flights.UE401.liftoff_minute, 0);
    //var LY500 = makeMarker(airports.SIA.coord, airports.LYR.coord, aircrafts.AV_Nieida200.cruise, small); LY500.setOpacity(0);
    //var LY500popup = flightdetail("LY", "LY", "Operated by OhemiAir", pic1, 2, 3, flags.Ohemia, worldstar);



    
}

function clipboard(){
    areaoutput.select();
    areaoutput.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(areaoutput.value);
}