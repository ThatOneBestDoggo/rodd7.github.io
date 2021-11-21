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
    const flags = JSON.parse(flag);
    L.marker(airports.CRS.coord, { icon: primaryAirport }).addTo(map).bindPopup(CRSpopup);
    L.marker(airports.STI.coord, { icon: primaryAirport }).addTo(map).bindPopup(STIpopup);
    L.marker(airports.SIA.coord, { icon: primaryAirport }).addTo(map).bindPopup(SIApopup);
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
    L.marker(airports.OSI.coord, { icon: primaryAirport }).addTo(map);
    L.marker(airports.TEM.coord, { icon: primaryAirport }).addTo(map);
    L.marker(airports.BKD.coord, { icon: secondaryAirport }).addTo(map);
    L.marker(airports.NMI.coord, { icon: secondaryAirport }).addTo(map);
    L.marker(airports.CHT.coord, { icon: tertiaryAirport }).addTo(map);
    L.marker(airports.BDN.coord, { icon: tertiaryAirport }).addTo(map);
    L.marker(airports.DGY.coord, { icon: primaryAirport }).addTo(map);
    L.marker(airports.LOR.coord, { icon: secondaryAirport }).addTo(map);
    L.marker(airports.DRG.coord, { icon: secondaryAirport }).addTo(map);
    L.marker(airports.DDA.coord, { icon: primaryAirport }).addTo(map);
    L.marker(airports.DDT.coord, { icon: secondaryAirport }).addTo(map);
    L.marker(airports.DDI.coord, { icon: secondaryAirport }).addTo(map);
    L.marker(airports.DDK.coord, { icon: secondaryAirport }).addTo(map);
    L.marker(airports.DDN.coord, { icon: secondaryAirport }).addTo(map);
    L.marker(airports.BAK.coord, { icon: primaryAirport }).addTo(map);
    L.marker(airports.SJC.coord, { icon: secondaryAirport }).addTo(map);
    L.marker(airports.FYR.coord, { icon: tertiaryAirport }).addTo(map);
    L.marker(airports.AUS.coord, { icon: tertiaryAirport }).addTo(map);
    L.marker(airports.MTA.coord, { icon: secondaryAirport }).addTo(map);
    L.marker(airports.EZV.coord, { icon: tertiaryAirport }).addTo(map);
    L.marker(airports.ALJ.coord, { icon: secondaryAirport }).addTo(map);
    

    L.marker([-38.74783, 32.14310], { icon: tertiaryAirport }).addTo(map); //flying school

    function live() {
        var today = new Date();
        var now = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), today.getUTCHours(), today.getUTCMinutes(), today.getUTCSeconds());
        //TIMETABLE

        const LY500live = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), 10, 0, 0);
        const OA990live = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), 7, 0, 0);

        console.log((LY500live - now)/1000);
        if ((LY500live-now)/1000 > -1 * duration(getDistanceFromLatLonInKm(airports.SIA.coord, airports.layrcraft.coord),DG_80) && (LY500live-now)/1000 < 0 && !(LY500.isRunning())){
            var LY500new = L.Marker.movingMarker([positionRetrieval(airports.SIA.coord,airports.layrcraft.coord,duration(getDistanceFromLatLonInKm(airports.SIA.coord,airports.layrcraft.coord),DG_80),(LY500live-now)/1000), airports.layrcraft.coord], [(duration(getDistanceFromLatLonInKm(airports.SIA.coord, airports.layrcraft.coord),DG_80) + (LY500live - now)/1000) * 1000], { rotationAngle: bearing(airports.SIA.coord, airports.layrcraft.coord), icon: medium }).addTo(map);
            LY500new.start(); LY500new.bindPopup(LY500popup); 
        }

        if ((OA990live-now)/1000 > -1 * duration(getDistanceFromLatLonInKm(airports.SIA.coord, airports.CRS.coord),Spārtesôr_21) && (OA990live-now)/1000 < 0 && !(LY500.isRunning())){
            var OA990new = L.Marker.movingMarker([positionRetrieval(airports.SIA.coord,airports.CRS.coord,duration(getDistanceFromLatLonInKm(airports.SIA.coord,airports.CRS.coord),Spārtesôr_21),(OA990live-now)/1000), airports.CRS.coord], [(duration(getDistanceFromLatLonInKm(airports.SIA.coord, airports.CRS.coord),Spārtesôr_21) + (OA990live - now)/1000) * 1000], { rotationAngle: bearing(airports.SIA.coord, airports.CRS.coord), icon: Spārtesôr }).addTo(map);
            OA990new.start(); OA990new.bindPopup(LY500popup, { minWidth: 1000, minHeight: 500}); 
        }
    }
    
    function schedule(){
        var today = new Date();
        var now = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), today.getUTCHours(), today.getUTCMinutes(), today.getUTCSeconds());
        
        const LY500schedule = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), 10, 0, 0);
        const OA990schedule = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), 7, 0, 0);

        if ((LY500schedule-now)/1000 <= 60*60 && (LY500schedule-now)/1000 > 0){LY500.setOpacity(1);} if ((LY500schedule-now) == 0){ LY500.start(); LY500.setOpacity(1); LY500.bindPopup(LY500popup);}
        if ((LY500schedule-now)/1000 <= -1 * duration(getDistanceFromLatLonInKm(airports.SIA.coord, airports.layrcraft.coord),DG_80)  && (LY500schedule-now)/1000 >=  -1 * duration(getDistanceFromLatLonInKm(airports.SIA.coord, airports.layrcraft.coord),DG_80) - 60*30){ LY500.setOpacity(1); };
        if ((LY500schedule-now)/1000 <= -1 * duration(getDistanceFromLatLonInKm(airports.SIA.coord, airports.layrcraft.coord),DG_80)){ LY500.stop();} if ((LY500schedule-now)/1000 <=  -1 * duration(getDistanceFromLatLonInKm(airports.SIA.coord, airports.layrcraft.coord),DG_80) - 60*30 /*layoff time*/) {LY500.setOpacity(0);}
        if ((LY500schedule-now)/1000 <= -1 * duration(getDistanceFromLatLonInKm(airports.SIA.coord, airports.layrcraft.coord),DG_80)  && (LY500schedule-now)/1000 >=  -1 * duration(getDistanceFromLatLonInKm(airports.SIA.coord, airports.layrcraft.coord),DG_80) - 60*30 /*layoff time*/){ LY500.setOpacity(1); };
        
        if ((OA990schedule-now)/1000 <= 60*60 && (OA990schedule-now)/1000 > 0){OA990.setOpacity(1);}
        if ((OA990schedule-now) == 0){ OA990.start(); OA990.setOpacity(1); OA990.bindPopup(LY500popup);}
        setTimeout(function () { schedule()}, 1000);

    }


    var LY500 = L.Marker.movingMarker([airports.SIA.coord, airports.layrcraft.coord], [duration(getDistanceFromLatLonInKm(airports.SIA.coord, airports.layrcraft.coord),DG_80) * 1000], { rotationAngle: bearing(airports.SIA.coord, airports.layrcraft.coord) - 45, icon: large }).addTo(map);
    LY500.setOpacity(0);
    var OA990 = L.Marker.movingMarker([airports.SIA.coord, airports.CRS.coord], [duration(getDistanceFromLatLonInKm(airports.SIA.coord, airports.CRS.coord),Spārtesôr_21) * 1000], { rotationAngle: bearing(airports.SIA.coord, airports.CRS.coord), icon: Spārtesôr }).addTo(map);
    OA990.setOpacity(0);

   


    live();
    schedule();






}


