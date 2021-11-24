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
    var visible = new ZoomShowHide();
    visible.addTo(map);
    //https://github.com/auto-mat/leaflet-zoom-show-hide/blob/master/demo.html
    //night shade
    var t = L.terminator({fillOpacity: 0.39});
    t.addTo(map);
    
    setInterval(function () { updateTerminator(t) }, synconst);
    function updateTerminator(t) {
        t.setTime();
    }

    const airports = JSON.parse(airport);
    const flags = JSON.parse(flag);
    const aircrafts = JSON.parse(aircraft);
    // const airlines = JSON.parse(airline);
    var test = L.marker(airports.CRS.coord, { icon: primaryAirport }).addTo(map).bindPopup(details(airports.CRS, flags.Ohemia, 2, "Federal City of"));
    L.marker(airports.STI.coord, { icon: primaryAirport }).addTo(map).bindPopup(details(airports.STI, flags.FSA, 10));
    L.marker(airports.SIA.coord, { icon: primaryAirport }).addTo(map).bindPopup(details(airports.SIA, flags.Ohemia, 2, "Federal City of"));
    L.marker(airports.LYR.coord, { icon: primaryAirport }).addTo(map).bindPopup(details(airports.LYR, flags.Layr, 3, "Bi Leregk,"));
    L.marker(airports.PEP.coord, { icon: primaryAirport }).addTo(map).bindPopup(details(airports.PEP, flags.Teotiyolcan, 1));
    L.marker(airports.QWI.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.QWI, flags.Mazan, 3));
    L.marker(airports.TZY.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.TZY, flags.Lany, 5));
    L.marker(airports.AMB.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.AMB, flags.Barzona, 1));
    L.marker(airports.TSA.coord, { icon: tertiaryAirport }).addTo(map).bindPopup(details(airports.TSA, flags.Arecales, 11.5));
    L.marker(airports.DIA.coord, { icon: primaryAirport }).addTo(map).bindPopup(details(airports.DIA, flags.FSA, 0));
    L.marker(airports.ELR.coord, { icon: tertiaryAirport }).addTo(map).bindPopup(details(airports.ELR, flags.FSA, 0));
    L.marker(airports.LON.coord, { icon: tertiaryAirport }).addTo(map).bindPopup(details(airports.LON, flags.FSA, 0));
    L.marker(airports.SDA.coord, { icon: tertiaryAirport }).addTo(map).bindPopup(details(airports.SDA, flags.FSA, 0));
    L.marker(airports.ARC.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.ARC, flags.Arecales, 11.5));
    L.marker(airports.SJA.coord, { icon: tertiaryAirport }).addTo(map).bindPopup(details(airports.SJA, flags.Arecales, 11.5));
    L.marker(airports.SCR.coord, { icon: tertiaryAirport }).addTo(map).bindPopup(details(airports.SCR, flags.Arecales, 11.5));
    L.marker(airports.RBC.coord, { icon: tertiaryAirport }).addTo(map).bindPopup(details(airports.RBC, flags.Arecales, 11.5));
    L.marker(airports.KRI.coord, { icon: primaryAirport }).addTo(map).bindPopup(details(airports.KRI, flags.Default, 0));
    L.marker(airports.SEL.coord, { icon: primaryAirport }).addTo(map).bindPopup(details(airports.SEL, flags.Default, 0));
    L.marker(airports.IPS.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.IPS, flags.Default, 0));
    L.marker(airports.ICI.coord, { icon: primaryAirport }).addTo(map).bindPopup(details(airports.ICI, flags.Iscu, 6));
    L.marker(airports.LOC.coord, { icon: tertiaryAirport }).addTo(map).bindPopup(details(airports.LOC, flags.Iscu, 6, "Lonocon Atoll,"));
    L.marker(airports.BSG.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.BSG, flags.Airannia, 1));
    L.marker(airports.JBA.coord, { icon: tertiaryAirport }).addTo(map).bindPopup(details(airports.JBA, flags.Airannia, 1));
    L.marker(airports.AVG.coord, { icon: primaryAirport }).addTo(map).bindPopup(details(airports.AVG, flags.Airannia, 1));
    L.marker(airports.MAH.coord, { icon: tertiaryAirport }).addTo(map).bindPopup(details(airports.MAH, flags.Ruoguovvas, 2, "<img src='https://old.opengeofiction.wiki/images/thumb/b/b0/Ruo_Gaskus_flag.png/800px-Ruo_Gaskus_flag.png' width='35'> &nbsp "));
    L.marker(airports.PHA.coord, { icon: tertiaryAirport }).addTo(map).bindPopup(details(airports.PHA, flags.Ruoguovvas, 2));
    L.marker(airports.SBD.coord, { icon: primaryAirport }).addTo(map).bindPopup(details(airports.SBD, flags.Freedemia, 2));
    L.marker(airports.MAT.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.MAT, flags.Freedemia, 2));
    L.marker(airports.LCX.coord, { icon: primaryAirport }).addTo(map).bindPopup(details(airports.LCX, flags.FSA, 9));
    L.marker(airports.GNN.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.GNN, flags.FSA, 9));
    L.marker(airports.BUX.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.BUX, flags.FSA, 9));
    L.marker(airports.NMN.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.NMN, flags.FSA, 9));
    L.marker(airports.BRR.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.BRR, flags.FSA, 9));
    L.marker(airports.SUL.coord, { icon: primaryAirport }).addTo(map).bindPopup(details(airports.SUL, flags.Izaland, 8));
    L.marker(airports.WRH.coord, { icon: primaryAirport }).addTo(map).bindPopup(details(airports.WRH, flags.Izaland, 8));
    L.marker(airports.KNU.coord, { icon: tertiaryAirport }).addTo(map).bindPopup(details(airports.KNU, flags.Izaland, 8));
    L.marker(airports.PTR.coord, { icon: primaryAirport }).addTo(map).bindPopup(details(airports.PTR, flags.Default, 0));
    L.marker(airports.HCO.coord, { icon: primaryAirport }).addTo(map).bindPopup(details(airports.HCO, flags.Default, 0));
    L.marker(airports.OSI.coord, { icon: primaryAirport }).addTo(map).bindPopup(details(airports.OSI, flags.Default, 0));
    L.marker(airports.TEM.coord, { icon: primaryAirport }).addTo(map).bindPopup(details(airports.TEM, flags.Default, 0));
    L.marker(airports.BKD.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.BKD, flags.Kuehong, 10));
    L.marker(airports.NMI.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.NMI, flags.Kuehong, 10));
    L.marker(airports.CHT.coord, { icon: tertiaryAirport }).addTo(map).bindPopup(details(airports.CHT, flags.Kuehong, 10));
    L.marker(airports.BDN.coord, { icon: tertiaryAirport }).addTo(map).bindPopup(details(airports.BDN, flags.Bai, 9.5));
    L.marker(airports.DGY.coord, { icon: primaryAirport }).addTo(map).bindPopup(details(airports.DGY, flags.Bai, 9.5));
    L.marker(airports.LOR.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.LOR, flags.Default, 0));
    L.marker(airports.DRG.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.DRG, flags.Default, 0));
    L.marker(airports.DDA.coord, { icon: primaryAirport }).addTo(map).bindPopup(details(airports.DDA, flags.Demirhan, 5));
    L.marker(airports.DDT.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.DDT, flags.Demirhan, 5));
    L.marker(airports.DDI.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.DDI, flags.Demirhan, 5));
    L.marker(airports.DDK.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.DDK, flags.Demirhan, 5));
    L.marker(airports.DDN.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.DDN, flags.Demirhan, 5));
    L.marker(airports.BAK.coord, { icon: primaryAirport }).addTo(map).bindPopup(details(airports.BAK, flags.Kofuku, 4));
    L.marker(airports.SJC.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.SJC, flags.Kofuku, 4));
    L.marker(airports.FYR.coord, { icon: tertiaryAirport }).addTo(map).bindPopup(details(airports.FYR, flags.Kofuku, 4));
    L.marker(airports.AUS.coord, { icon: tertiaryAirport }).addTo(map).bindPopup(details(airports.AUS, flags.Kofuku, 0));
    L.marker(airports.MTA.coord, { icon: tertiaryAirport }).addTo(map).bindPopup(details(airports.MTA, flags.Qennes, 5));
    L.marker(airports.EZV.coord, { icon: tertiaryAirport }).addTo(map).bindPopup(details(airports.EZV, flags.Qennes, 5));
    L.marker(airports.ALJ.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.ALJ, flags.Mazan, 3));
    L.marker(airports.HAR.coord, { icon: primaryAirport }).addTo(map).bindPopup(details(airports.HAR, flags.Mazan, 3));
    L.marker(airports.SAR.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.SAR, flags.GT, 4));
    L.marker(airports.NCH.coord, { icon: primaryAirport }).addTo(map).bindPopup(details(airports.NCH, flags.Adaria, 0));
    L.marker(airports.MOE.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.MOE, flags.Adaria, 0));
    L.marker(airports.TVM.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.TVM, flags.Default, 0));
    L.marker(airports.FJA.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.FJA, flags.Allendea, 1));
    L.marker(airports.SNM.coord, { icon: primaryAirport }).addTo(map).bindPopup(details(airports.SNM, flags.Wallea, 0));
    L.marker(airports.TGR.coord, { icon: tertiaryAirport }).addTo(map).bindPopup(details(airports.TGR, flags.Wallea, 0));
    L.marker(airports.PLB.coord, { icon: primaryAirport }).addTo(map).bindPopup(details(airports.PLB, flags.CCA, 0));
    L.marker(airports.BMO.coord, { icon: primaryAirport }).addTo(map).bindPopup(details(airports.BMO, flags.CCA, 0));
    L.marker(airports.MTB.coord, { icon: primaryAirport }).addTo(map).bindPopup(details(airports.MTB, flags.Default, 0));
    L.marker(airports.MJP.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.MJP, flags.Majesia, 0));
    L.marker(airports.RJP.coord, { icon: primaryAirport }).addTo(map).bindPopup(details(airports.RJP, flags.Majesia, 0));
    L.marker(airports.BRN.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.BRN, flags.FSA, 0));
    L.marker(airports.DAI.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.DAI, flags.Izaland, 8));
    L.marker(airports.GTN.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.GTN, flags.Izaland, 8));
    L.marker(airports.ILL.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.ILL, flags.Izaland, 8));
    L.marker(airports.ISA.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.ISA, flags.Izaland, 8));
    L.marker(airports.KLS.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.KLS, flags.Izaland, 8));
    L.marker(airports.KTS.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.KTS, flags.Izaland, 8));
    L.marker(airports.NKV.coord, { icon: tertiaryAirport }).addTo(map).bindPopup(details(airports.NKV, flags.Izaland, 8));
    L.marker(airports.NTS.coord, { icon: tertiaryAirport }).addTo(map).bindPopup(details(airports.NTS, flags.Izaland, 8));
    L.marker(airports.OGO.coord, { icon: tertiaryAirport }).addTo(map).bindPopup(details(airports.OGO, flags.Izaland, 8));
    L.marker(airports.OGT.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.OGT, flags.Izaland, 8));
    L.marker(airports.RYO.coord, { icon: tertiaryAirport }).addTo(map).bindPopup(details(airports.RYO, flags.Izaland, 8));
    L.marker(airports.SAG.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.SAG, flags.Izaland, 8));
    L.marker(airports.SKM.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.SKM, flags.Izaland, 8));
    L.marker(airports.FUE.coord, { icon: tertiaryAirport }).addTo(map).bindPopup(details(airports.FUE, flags.Izaland, 8));
    L.marker(airports.FUK.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.FUK, flags.Izaland, 8));
    L.marker(airports.KIX.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.KIX, flags.Izaland, 8));
    L.marker(airports.AJL.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.AJL, flags.Izaland, 8));
    L.marker(airports.KKK.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.KKK, flags.Izaland, 8));
    L.marker(airports.LUE.coord, { icon: tertiaryAirport }).addTo(map).bindPopup(details(airports.LUE, flags.Izaland, 8));
    L.marker(airports.SDR.coord, { icon: tertiaryAirport }).addTo(map).bindPopup(details(airports.SDR, flags.Izaland, 8));
    L.marker(airports.STY.coord, { icon: tertiaryAirport }).addTo(map).bindPopup(details(airports.STY, flags.Izaland, 8));
    L.marker(airports.EHU.coord, { icon: tertiaryAirport }).addTo(map).bindPopup(details(airports.EHU, flags.Izaland, 8));
    L.marker(airports.LGD.coord, { icon: primaryAirport }).addTo(map).bindPopup(details(airports.LGD, flags.Ruoguovvas, 2, "<img src='https://old.opengeofiction.wiki/images/f/ff/Jiemiasflag.png' width='35'> &nbsp"));
    L.marker(airports.BLM.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.BLM, flags.Bromley, 3));
    L.marker(airports.VDL.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.VDL, flags.Freedemia, 2));
    L.marker(airports.SVD.coord, { icon: tertiaryAirport }).addTo(map).bindPopup(details(airports.SVD, flags.FSA, 0));
    L.marker(airports.IOL.coord, { icon: primaryAirport }).addTo(map).bindPopup(details(airports.IOL, flags.Mauretia, 2.5));
    L.marker(airports.POM.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.POM, flags.Mauretia, 2.5));
    L.marker(airports.SKY.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.SKY, flags.Mauretia, 2.5));
    L.marker(airports.MSY.coord, { icon: tertiaryAirport }).addTo(map).bindPopup(details(airports.MSY, flags.Mauretia, 2.5));
    L.marker(airports.KSM.coord, { icon: tertiaryAirport }).addTo(map).bindPopup(details(airports.KSM, flags.Mauretia, 2.5));
    L.marker(airports.TAN.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.TAN, flags.Mauretia, 2.5));
    L.marker(airports.MEG.coord, { icon: tertiaryAirport }).addTo(map).bindPopup(details(airports.MEG, flags.Mauretia, 2.5));
    L.marker(airports.MKX.coord, { icon: primaryAirport }).addTo(map).bindPopup(details(airports.MKX, flags.FSA, 0));
    L.marker(airports.JDN.coord, { icon: primaryAirport }).addTo(map).bindPopup(details(airports.JDN, flags.Default, 3));
    L.marker(airports.MIR.coord, { icon: primaryAirport }).addTo(map).bindPopup(details(airports.MIR, flags.Suria, 4));
    L.marker(airports.BTR.coord, { icon: primaryAirport }).addTo(map).bindPopup(details(airports.BTR, flags.Aden, 3));
    L.marker(airports.ADM.coord, { icon: primaryAirport }).addTo(map).bindPopup(details(airports.ADM, flags.Aden, 3));
    L.marker(airports.NDL.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.NDL, flags.Aden, 3));
    L.marker(airports.OSN.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.OSN, flags.Aden, 3));
    L.marker(airports.ALN.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.ALN, flags.Aden, 3));
    L.marker(airports.INR.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.INR, flags.Aden, 3));
    L.marker(airports.TBH.coord, { icon: primaryAirport }).addTo(map).bindPopup(details(airports.TBH, flags.Mazan, 3));
    L.marker(airports.TRS.coord, { icon: primaryAirport }).addTo(map).bindPopup(details(airports.TRS, flags.Mazan, 3));
    L.marker(airports.ARS.coord, { icon: primaryAirport }).addTo(map).bindPopup(details(airports.ARS, flags.Mazan, 3));
    L.marker(airports.ARS.coord, { icon: primaryAirport }).addTo(map).bindPopup(details(airports.ARS, flags.Mazan, 3));
    L.marker(airports.MWJ.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.MWJ, flags.Default, 0));
    L.marker(airports.DCX.coord, { icon: primaryAirport }).addTo(map).bindPopup(details(airports.DCX, flags.Default, 0));
    L.marker(airports.CFL.coord, { icon: tertiaryAirport }).addTo(map).bindPopup(details(airports.CFL, flags.Default, 0));
    L.marker(airports.SVX.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.SVX, flags.Default, 0));
    L.marker(airports.SKN.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.SKN, flags.Default, 0));
    L.marker(airports.MPX.coord, { icon: primaryAirport }).addTo(map).bindPopup(details(airports.MPX, flags.Default, 0));
    L.marker(airports.FRP.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.FRP, flags.Default, 0));
    L.marker(airports.BST.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.BST, flags.Default, 0));
    L.marker(airports.NEU.coord, { icon: tertiaryAirport }).addTo(map).bindPopup(details(airports.NEU, flags.Default, 0));
    L.marker(airports.SBR.coord, { icon: tertiaryAirport }).addTo(map).bindPopup(details(airports.SBR, flags.Default, 0));
    L.marker(airports.NMT.coord, { icon: tertiaryAirport }).addTo(map).bindPopup(details(airports.NMT, flags.Default, 0));
    L.marker(airports.KRM.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.KRM, flags.Default, 0));
    L.marker(airports.ALM.coord, { icon: primaryAirport }).addTo(map).bindPopup(details(airports.ALM, flags.Default, 0));
    L.marker(airports.MMD.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.MMD, flags.Mazan, 3));
    L.marker(airports.JWR.coord, { icon: primaryAirport }).addTo(map).bindPopup(details(airports.JWR, flags.Mazan, 3));
    L.marker(airports.CVL.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.CVL, flags.Plevia, 0));
    L.marker(airports.MVZ.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.MVZ, flags.Plevia, 0));
    L.marker(airports.CVR.coord, { icon: tertiaryAirport }).addTo(map).bindPopup(details(airports.CVR, flags.Plevia, 0));
    L.marker(airports.PBS.coord, { icon: tertiaryAirport }).addTo(map).bindPopup(details(airports.PBS, flags.Plevia, 0));
    L.marker(airports.NRZ.coord, { icon: tertiaryAirport }).addTo(map).bindPopup(details(airports.NRZ, flags.Plevia, 0));
    L.marker(airports.COD.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.COD, flags.Plevia, 0));
    L.marker(airports.COS.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.COS, flags.Plevia, 0));
    L.marker(airports.TOI.coord, { icon: primaryAirport }).addTo(map).bindPopup(details(airports.TOI, flags.Teotiyolcan, 1));


    L.marker([-38.74783, 32.14310], { icon: tertiaryAirport }).addTo(map); //flying school

    function live() {
        //UTC parameters
        var today = new Date();
        var now = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), today.getUTCHours(), today.getUTCMinutes(), today.getUTCSeconds());
        //schedule
        const LY500live = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), 11, 0, 0);
        const OA990live = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), 11, 29, 0);
        const test_01 = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), 8, 5, 0);
        const sbdlcx = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), 23, 7, 0, 0);
        const lcxbak = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), 24, 8, 0, 0);

        const tzymir = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), 24, 11, 30, 0);

        
        //main
        function createDuringFlight(scheduleVar,popup,from,to,aircraft,otherflight, resource_name){
            var offset = 0;
            if (resource_name===large){offset = -45;}
            if ((scheduleVar-now)/1000 > -1 * duration(getDistanceFromLatLonInKm(from, to), aircraft) && (scheduleVar-now)/1000 < 0 && !(otherflight.isRunning())){
                var point = L.Marker.movingMarker([positionRetrieval(from,to,duration(getDistanceFromLatLonInKm(from,to),aircraft),(scheduleVar-now)/1000), to], [(duration(getDistanceFromLatLonInKm(from, to),aircraft) + (scheduleVar - now)/1000) * 1000], { rotationAngle: angle(from, to) + offset, icon: resource_name}).addTo(map);
                point.start(); point.bindPopup(popup, {maxWidth : 300, minWidth: 300}) ;}
        }

        //functions
        createDuringFlight(LY500live,LY500popup,airports.SIA.coord,airports.LYR.coord,aircrafts.DG_80.speed,LY500,large);
        createDuringFlight(OA990live,LY500popup,airports.SIA.coord,airports.CRS.coord,aircrafts.SPT_21.speed,OA990,luxury);
        createDuringFlight(test_01,LY500popup,airports.STI.coord,airports.PHA.coord,aircrafts.DG_86.speed,test0,large);

        createDuringFlight(sbdlcx,LY500popup,airports.SBD.coord,airports.LCX.coord,aircrafts.Contair_001.speed,test222,contair001);
        createDuringFlight(lcxbak,LY500popup,airports.LCX.coord,airports.BAK.coord,aircrafts.DG_70.speed,test555,medium);


        createDuringFlight(tzymir,LY500popup,airports.TZY.coord,airports.MIR.coord,aircrafts.AV_Nieida200.speed,tzy,small);

        // if ((LY500live-now)/1000 > -1 * duration(getDistanceFromLatLonInKm(airports.SIA.coord, airports.LYR.coord),DG_80) && (LY500live-now)/1000 < 0 && !(LY500.isRunning())){
        //     var LY500new = L.Marker.movingMarker([positionRetrieval(airports.SIA.coord,airports.LYR.coord,duration(getDistanceFromLatLonInKm(airports.SIA.coord,airports.LYR.coord),DG_80),(LY500live-now)/1000), airports.LYR.coord], [(duration(getDistanceFromLatLonInKm(airports.SIA.coord, airports.LYR.coord),DG_80) + (LY500live - now)/1000) * 1000], { rotationAngle: angle(airports.SIA.coord, airports.LYR.coord) - 45, icon: large }).addTo(map);
        //     LY500new.start(); LY500new.bindPopup(LY500popup); }}
    }
    
    function schedule(){
        //UTC parameters
        var today = new Date();
        var now = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), today.getUTCHours(), today.getUTCMinutes(), today.getUTCSeconds());
        //schedule
        const LY500schedule = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), 11, 0, 0);
        const OA990schedule = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), 11, 29, 0);
        const test_01 = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), 8, 5, 0);

        const sbdlcx = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), 23, 7, 0, 0);
        const lcxbak = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), 24, 8, 0, 0);

        const tzymir = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), 24, 11, 30, 0);

        //main
        function createBeforeLift(scheduleVar,visibleBeforeSeconds,invisibleAfterSeconds,markerVar,popup,from,to,aircraft){
            if ((scheduleVar-now)/1000 <= visibleBeforeSeconds && (scheduleVar-now)/1000 > 0){markerVar.setOpacity(1);} if ((scheduleVar-now) == 0){ markerVar.start(); markerVar.setOpacity(1); markerVar.bindPopup(popup);}
            if ((scheduleVar-now)/1000 <= -1 * duration(getDistanceFromLatLonInKm(from, to),aircraft)  && (scheduleVar-now)/1000 >=  (-1 * duration(getDistanceFromLatLonInKm(from, to),aircraft) - invisibleAfterSeconds)){markerVar.stop(); markerVar.setOpacity(1)} else { if ((scheduleVar-now)/1000 < (-1 * duration(getDistanceFromLatLonInKm(from, to),aircraft) - invisibleAfterSeconds)){ markerVar.setOpacity(0)}};
        }
        //functions
        createBeforeLift(LY500schedule,60*60,60*30,LY500,LY500popup,airports.SIA.coord,airports.LYR.coord,aircrafts.DG_80.speed);
        createBeforeLift(OA990schedule,60*60,60*30,OA990,LY500popup,airports.SIA.coord,airports.CRS.coord,aircrafts.SPT_21.speed);
        createBeforeLift(test_01,60*60,60*30,test0,LY500popup,airports.SIA.coord,airports.CRS.coord,aircrafts.DG_86.speed);

        createBeforeLift(sbdlcx,60*60,60*30,test222,LY500popup,airports.SBD.coord,airports.LCX.coord,aircrafts.Contair_001.speed);
        createBeforeLift(lcxbak,60*60,60*30,test555,LY500popup,airports.LCX.coord,airports.BAK.coord,aircrafts.DG_70.speed);

        createBeforeLift(tzymir,60*60,60*30,tzy,LY500popup,airports.TZY.coord,airports.MIR.coord,aircrafts.AV_Nieida200.speed);
        

        // if ((LY500schedule-now)/1000 <= 60*60 && (LY500schedule-now)/1000 > 0){LY500.setOpacity(1);} if ((LY500schedule-now) == 0){ LY500.start(); LY500.setOpacity(1); LY500.bindPopup(LY500popup);}
        // if ((LY500schedule-now)/1000 <= -1 * duration(getDistanceFromLatLonInKm(airports.SIA.coord, airports.LYR.coord),DG_80)  && (LY500schedule-now)/1000 >=  -1 * duration(getDistanceFromLatLonInKm(airports.SIA.coord, airports.LYR.coord),DG_80) - 60*10 /*layoff time*/){LY500.setOpacity(1)};
        setTimeout(function () { schedule()}, 1000);


    }


    var LY500 = L.Marker.movingMarker([airports.SIA.coord, airports.LYR.coord], [duration(getDistanceFromLatLonInKm(airports.SIA.coord, airports.LYR.coord),aircrafts.DG_80.speed) * 1000], { rotationAngle: angle(airports.SIA.coord, airports.LYR.coord) - 45, icon: large }).addTo(map); LY500.setOpacity(0);
    var OA990 = L.Marker.movingMarker([airports.SIA.coord, airports.CRS.coord], [duration(getDistanceFromLatLonInKm(airports.SIA.coord, airports.CRS.coord),aircrafts.SPT_21.speed) * 1000], { rotationAngle: angle(airports.SIA.coord, airports.CRS.coord), icon: luxury}).addTo(map); OA990.setOpacity(0);
    // var test0 = L.Marker.movingMarker([airports.STI.coord, airports.PHA.coord], [duration(getDistanceFromLatLonInKm(airports.STI.coord, airports.PHA.coord),DG_86) * 1000], { rotationAngle: angle(airports.STI.coord, airports.PHA.coord) - 45, icon: large}).addTo(map); test0.setOpacity(0);

    function makeMarker(from, to, aircraft, resource_name){
        var offset = 0;
        if (resource_name===large){offset = -45;}
        return point = L.Marker.movingMarker([from, to], [duration(getDistanceFromLatLonInKm(from, to),aircraft) * 1000], { rotationAngle: angle(from, to) + offset, icon: resource_name }).addTo(map);
    }
   
    var test0 = makeMarker(airports.STI.coord, airports.PHA.coord, aircrafts.DG_86.speed, large); test0.setOpacity(0);
    var test222 = makeMarker(airports.SBD.coord, airports.LCX.coord, aircrafts.Contair_001.speed, contair001); test222.setOpacity(0);
    var test555 = makeMarker(airports.LCX.coord, airports.BAK.coord, aircrafts.DG_70.speed, luxury); test555.setOpacity(0);

    var tzy = makeMarker(airports.TZY.coord, airports.MIR.coord, aircrafts.AV_Nieida200.speed, small); tzy.setOpacity(0);

    live();
    schedule();






}


