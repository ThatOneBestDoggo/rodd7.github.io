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
    L.marker(airports.CRS.coord, { icon: primaryAirport }).addTo(map).bindPopup(details(airports.CRS, flags.Ohemia, 2, "Federal City of"));
    L.marker(airports.STI.coord, { icon: primaryAirport }).addTo(map).bindPopup(details(airports.STI, flags.FSA, 3));
    L.marker(airports.SIA.coord, { icon: primaryAirport }).addTo(map).bindPopup(details(airports.SIA, flags.Ohemia, 2, "Federal City of"));
    L.marker(airports.LYR.coord, { icon: primaryAirport }).addTo(map).bindPopup(details(airports.LYR, flags.Layr, 0, "Bi Leregk,"));
    L.marker(airports.PEP.coord, { icon: primaryAirport }).addTo(map).bindPopup(details(airports.PEP, flags.Default, 0));
    L.marker(airports.QWI.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.QWI, flags.Default, 0));
    L.marker(airports.TZY.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.TZY, flags.Default, 0));
    L.marker(airports.AMB.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.AMB, flags.Default, 0));
    L.marker(airports.TSA.coord, { icon: tertiaryAirport }).addTo(map).bindPopup(details(airports.TSA, flags.Default, 0));
    L.marker(airports.DIA.coord, { icon: primaryAirport }).addTo(map).bindPopup(details(airports.DIA, flags.FSA, 0));
    L.marker(airports.ELR.coord, { icon: tertiaryAirport }).addTo(map).bindPopup(details(airports.ELR, flags.FSA, 0));
    L.marker(airports.LON.coord, { icon: tertiaryAirport }).addTo(map).bindPopup(details(airports.LON, flags.FSA, 0));
    L.marker(airports.SDA.coord, { icon: tertiaryAirport }).addTo(map).bindPopup(details(airports.SDA, flags.FSA, 0));
    L.marker(airports.ARC.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.ARC, flags.Default, 0));
    L.marker(airports.SJA.coord, { icon: tertiaryAirport }).addTo(map).bindPopup(details(airports.SJA, flags.Default, 0));
    L.marker(airports.SCR.coord, { icon: tertiaryAirport }).addTo(map).bindPopup(details(airports.SCR, flags.Default, 0));
    L.marker(airports.RBC.coord, { icon: tertiaryAirport }).addTo(map).bindPopup(details(airports.RBC, flags.Default, 0));
    L.marker(airports.KRI.coord, { icon: primaryAirport }).addTo(map).bindPopup(details(airports.KRI, flags.Default, 0));
    L.marker(airports.SEL.coord, { icon: primaryAirport }).addTo(map).bindPopup(details(airports.SEL, flags.Default, 0));
    L.marker(airports.IPS.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.IPS, flags.Default, 0));
    L.marker(airports.ICI.coord, { icon: primaryAirport }).addTo(map).bindPopup(details(airports.ICI, flags.Default, 0));
    L.marker(airports.LOC.coord, { icon: tertiaryAirport }).addTo(map).bindPopup(details(airports.LOC, flags.Default, 0, "Lonocon Atoll,"));
    L.marker(airports.BSG.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.BSG, flags.Default, 0));
    L.marker(airports.JBA.coord, { icon: tertiaryAirport }).addTo(map).bindPopup(details(airports.JBA, flags.Default, 0));
    L.marker(airports.AVG.coord, { icon: primaryAirport }).addTo(map).bindPopup(details(airports.AVG, flags.Default, 0));
    L.marker(airports.MAH.coord, { icon: tertiaryAirport }).addTo(map).bindPopup(details(airports.MAH, flags.Default, 0));
    L.marker(airports.PHA.coord, { icon: tertiaryAirport }).addTo(map).bindPopup(details(airports.PHA, flags.Default, 0));
    L.marker(airports.SBD.coord, { icon: primaryAirport }).addTo(map).bindPopup(details(airports.SBD, flags.Default, 0));
    L.marker(airports.MAT.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.MAT, flags.Default, 0));
    L.marker(airports.LCX.coord, { icon: primaryAirport }).addTo(map).bindPopup(details(airports.LCX, flags.FSA, 0));
    L.marker(airports.GNN.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.GNN, flags.FSA, 0));
    L.marker(airports.BUX.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.BUX, flags.FSA, 0));
    L.marker(airports.NMN.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.NMN, flags.FSA, 0));
    L.marker(airports.BRR.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.BRR, flags.FSA, 0));
    L.marker(airports.SUL.coord, { icon: primaryAirport }).addTo(map).bindPopup(details(airports.SUL, flags.Izaland, 0));
    L.marker(airports.WRH.coord, { icon: primaryAirport }).addTo(map).bindPopup(details(airports.WRH, flags.Izaland, 0));
    L.marker(airports.KNU.coord, { icon: tertiaryAirport }).addTo(map).bindPopup(details(airports.KNU, flags.Izaland, 0));
    L.marker(airports.PTR.coord, { icon: primaryAirport }).addTo(map).bindPopup(details(airports.PTR, flags.Default, 0));
    L.marker(airports.HCO.coord, { icon: primaryAirport }).addTo(map).bindPopup(details(airports.HCO, flags.Default, 0));
    L.marker(airports.OSI.coord, { icon: primaryAirport }).addTo(map).bindPopup(details(airports.OSI, flags.Default, 0));
    L.marker(airports.TEM.coord, { icon: primaryAirport }).addTo(map).bindPopup(details(airports.TEM, flags.Default, 0));
    L.marker(airports.BKD.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.BKD, flags.Default, 0));
    L.marker(airports.NMI.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.NMI, flags.Default, 0));
    L.marker(airports.CHT.coord, { icon: tertiaryAirport }).addTo(map).bindPopup(details(airports.CHT, flags.Default, 0));
    L.marker(airports.BDN.coord, { icon: tertiaryAirport }).addTo(map).bindPopup(details(airports.BDN, flags.Default, 0));
    L.marker(airports.DGY.coord, { icon: primaryAirport }).addTo(map).bindPopup(details(airports.DGY, flags.Default, 0));
    L.marker(airports.LOR.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.LOR, flags.Default, 0));
    L.marker(airports.DRG.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.DRG, flags.Default, 0));
    L.marker(airports.DDA.coord, { icon: primaryAirport }).addTo(map).bindPopup(details(airports.DDA, flags.Demirhan, 0));
    L.marker(airports.DDT.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.DDT, flags.Demirhan, 0));
    L.marker(airports.DDI.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.DDI, flags.Demirhan, 0));
    L.marker(airports.DDK.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.DDK, flags.Demirhan, 0));
    L.marker(airports.DDN.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.DDN, flags.Demirhan, 0));
    L.marker(airports.BAK.coord, { icon: primaryAirport }).addTo(map).bindPopup(details(airports.BAK, flags.Kofuku, 0));
    L.marker(airports.SJC.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.SJC, flags.Kofuku, 0));
    L.marker(airports.FYR.coord, { icon: tertiaryAirport }).addTo(map).bindPopup(details(airports.FYR, flags.Kofuku, 0));
    L.marker(airports.AUS.coord, { icon: tertiaryAirport }).addTo(map).bindPopup(details(airports.AUS, flags.Kofuku, 0));
    L.marker(airports.MTA.coord, { icon: tertiaryAirport }).addTo(map).bindPopup(details(airports.MTA, flags.Default, 0));
    L.marker(airports.EZV.coord, { icon: tertiaryAirport }).addTo(map).bindPopup(details(airports.EZV, flags.Default, 0));
    L.marker(airports.ALJ.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.ALJ, flags.Default, 0));
    L.marker(airports.HAR.coord, { icon: primaryAirport }).addTo(map).bindPopup(details(airports.HAR, flags.Default, 0));
    L.marker(airports.SAR.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.SAR, flags.Default, 0));
    L.marker(airports.NCH.coord, { icon: primaryAirport }).addTo(map).bindPopup(details(airports.NCH, flags.Default, 0));
    L.marker(airports.MOE.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.MOE, flags.Default, 0));
    L.marker(airports.TVM.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.TVM, flags.Default, 0));
    

    L.marker([-38.74783, 32.14310], { icon: tertiaryAirport }).addTo(map); //flying school

    function live() {
        var today = new Date();
        var now = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), today.getUTCHours(), today.getUTCMinutes(), today.getUTCSeconds());
        //TIMETABLE

        const LY500live = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), 10, 0, 0);
        const OA990live = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), 7, 0, 0);

        console.log((LY500live - now)/1000);
        if ((LY500live-now)/1000 > -1 * duration(getDistanceFromLatLonInKm(airports.SIA.coord, airports.LYR.coord),DG_80) && (LY500live-now)/1000 < 0 && !(LY500.isRunning())){
            var LY500new = L.Marker.movingMarker([positionRetrieval(airports.SIA.coord,airports.LYR.coord,duration(getDistanceFromLatLonInKm(airports.SIA.coord,airports.LYR.coord),DG_80),(LY500live-now)/1000), airports.LYR.coord], [(duration(getDistanceFromLatLonInKm(airports.SIA.coord, airports.LYR.coord),DG_80) + (LY500live - now)/1000) * 1000], { rotationAngle: bearing(airports.SIA.coord, airports.LYR.coord), icon: medium }).addTo(map);
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
        if ((LY500schedule-now)/1000 <= -1 * duration(getDistanceFromLatLonInKm(airports.SIA.coord, airports.LYR.coord),DG_80)  && (LY500schedule-now)/1000 >=  -1 * duration(getDistanceFromLatLonInKm(airports.SIA.coord, airports.LYR.coord),DG_80) - 60*30){ LY500.setOpacity(1); };
        if ((LY500schedule-now)/1000 <= -1 * duration(getDistanceFromLatLonInKm(airports.SIA.coord, airports.LYR.coord),DG_80)){ LY500.stop();} if ((LY500schedule-now)/1000 <=  -1 * duration(getDistanceFromLatLonInKm(airports.SIA.coord, airports.LYR.coord),DG_80) - 60*30 /*layoff time*/) {LY500.setOpacity(0);}
        if ((LY500schedule-now)/1000 <= -1 * duration(getDistanceFromLatLonInKm(airports.SIA.coord, airports.LYR.coord),DG_80)  && (LY500schedule-now)/1000 >=  -1 * duration(getDistanceFromLatLonInKm(airports.SIA.coord, airports.LYR.coord),DG_80) - 60*30 /*layoff time*/){ LY500.setOpacity(1); };
        
        if ((OA990schedule-now)/1000 <= 60*60 && (OA990schedule-now)/1000 > 0){OA990.setOpacity(1);}
        if ((OA990schedule-now) == 0){ OA990.start(); OA990.setOpacity(1); OA990.bindPopup(LY500popup);}
        setTimeout(function () { schedule()}, 1000);

    }


    var LY500 = L.Marker.movingMarker([airports.SIA.coord, airports.LYR.coord], [duration(getDistanceFromLatLonInKm(airports.SIA.coord, airports.LYR.coord),DG_80) * 1000], { rotationAngle: bearing(airports.SIA.coord, airports.LYR.coord) - 45, icon: large }).addTo(map);
    LY500.setOpacity(0);
    var OA990 = L.Marker.movingMarker([airports.SIA.coord, airports.CRS.coord], [duration(getDistanceFromLatLonInKm(airports.SIA.coord, airports.CRS.coord),Spārtesôr_21) * 1000], { rotationAngle: bearing(airports.SIA.coord, airports.CRS.coord), icon: Spārtesôr }).addTo(map);
    OA990.setOpacity(0);

   


    live();
    schedule();






}


