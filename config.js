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
    const airports = JSON.parse(airport);
    L.marker(airports.CRS.coord, { icon: primaryAirport }).addTo(map);
    L.marker(airports.STI.coord, { icon: primaryAirport }).addTo(map);
    L.marker(airports.SIA.coord, { icon: primaryAirport }).addTo(map);
    L.marker(airports.layrcraft.coord, { icon: primaryAirport }).addTo(map);
    L.marker(airports.PEP.coord, { icon: primaryAirport }).addTo(map);
    L.marker(airports.QWI.coord, { icon: secondaryAirport }).addTo(map);
    L.marker(airports.TZY.coord, { icon: secondaryAirport }).addTo(map);
    L.marker(airports.AMB.coord, { icon: secondaryAirport }).addTo(map);
    L.marker(airports.TSA.coord, { icon: tertiaryAirport }).addTo(map);
    L.marker(airports.DIA.coord, { icon: primaryAirport }).addTo(map);
    L.marker(airports.ELR.coord, { icon: tertiaryAirport }).addTo(map);
    L.marker(airports.LON.coord, { icon: tertiaryAirport }).addTo(map);
    L.marker(airports.SDA.coord, { icon: tertiaryAirport }).addTo(map);
    L.marker(airports.ARC.coord, { icon: secondaryAirport }).addTo(map);
    L.marker(airports.SJA.coord, { icon: tertiaryAirport }).addTo(map);
    L.marker(airports.SCR.coord, { icon: tertiaryAirport }).addTo(map);
    L.marker(airports.RBC.coord, { icon: tertiaryAirport }).addTo(map);
    L.marker(airports.KRI.coord, { icon: primaryAirport }).addTo(map);
    L.marker(airports.SEL.coord, { icon: primaryAirport }).addTo(map);
    L.marker(airports.IPS.coord, { icon: secondaryAirport }).addTo(map);
    L.marker(airports.ICI.coord, { icon: primaryAirport }).addTo(map);
    L.marker(airports.LOC.coord, { icon: tertiaryAirport }).addTo(map);
    L.marker(airports.BSG.coord, { icon: secondaryAirport }).addTo(map);
    L.marker(airports.JBA.coord, { icon: tertiaryAirport }).addTo(map);
    L.marker(airports.AVG.coord, { icon: primaryAirport }).addTo(map);
    L.marker(airports.MAH.coord, { icon: tertiaryAirport }).addTo(map);
    L.marker(airports.PHA.coord, { icon: tertiaryAirport }).addTo(map);
    L.marker(airports.SBD.coord, { icon: primaryAirport }).addTo(map);
    L.marker(airports.MAT.coord, { icon: secondaryAirport }).addTo(map);
    L.marker(airports.LCX.coord, { icon: primaryAirport }).addTo(map);
    L.marker(airports.MAT.coord, { icon: secondaryAirport }).addTo(map);
    L.marker(airports.GNN.coord, { icon: secondaryAirport }).addTo(map);
    L.marker(airports.BUX.coord, { icon: secondaryAirport }).addTo(map);
    L.marker(airports.NMN.coord, { icon: secondaryAirport }).addTo(map);
    L.marker(airports.BRR.coord, { icon: secondaryAirport }).addTo(map);
    L.marker(airports.SUL.coord, { icon: primaryAirport }).addTo(map);
    L.marker(airports.WRH.coord, { icon: primaryAirport }).addTo(map);
    L.marker(airports.KNU.coord, { icon: tertiaryAirport }).addTo(map);
    L.marker(airports.PTR.coord, { icon: primaryAirport }).addTo(map);
    L.marker(airports.HCO.coord, { icon: primaryAirport }).addTo(map);


    L.marker([-38.74783, 32.14310], { icon: tertiaryAirport }).addTo(map); //flying school

    function live() {
        var today = new Date();
        var now = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), today.getUTCHours(), today.getUTCMinutes(), today.getUTCSeconds());
        //TIMETABLE

        const LY500start = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), 10, 0, 0);

        console.log((LY500start - now)/1000);
        if ((LY500start-now)/1000 > -1 * duration(getDistanceFromLatLonInKm(airports.SIA.coord, airports.layrcraft.coord),standardairplane) && (LY500start-now)/1000 < 0 && !(LY500.isRunning())){
            var LY500new = L.Marker.movingMarker([positionRetrieval(airports.SIA.coord,airports.layrcraft.coord,duration(getDistanceFromLatLonInKm(airports.SIA.coord,airports.layrcraft.coord),standardairplane),(LY500start-now)/1000), airports.layrcraft.coord], [(duration(getDistanceFromLatLonInKm(airports.SIA.coord, airports.layrcraft.coord),standardairplane) + (LY500start - now)/1000) * 1000], { rotationAngle: 60, icon: airplane_largeY }).addTo(map);
            LY500new.start(); LY500new.bindPopup(LY500popup); 
        }
    }
    
    function schedule(){
        var today = new Date();
        var now = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), today.getUTCHours(), today.getUTCMinutes(), today.getUTCSeconds());
        
        const LY500schedule = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), 10, 0, 0);
        if ((LY500schedule-now)/1000 <= 60*60 && (LY500schedule-now)/1000 > 0){LY500.setOpacity(1);}
        if ((LY500schedule-now) == 0){ LY500.start(); LY500.setOpacity(1); LY500.bindPopup(LY500popup);}
      
        setTimeout(function () { schedule()}, 1000);
    }

    var LY500 = L.Marker.movingMarker([airports.SIA.coord, airports.layrcraft.coord], [duration(getDistanceFromLatLonInKm(airports.SIA.coord, airports.layrcraft.coord),standardairplane) * 1000], { rotationAngle: 60, icon: airplane_largeY }).addTo(map);
    LY500.setOpacity(0);

   


    live();
    schedule();






}


