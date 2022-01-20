var ogf = OGFUtil();
globalThis.map;
var layer;
var mapOptions = {};
var synconst = 1000;
function loadMap() {
    map = L.map('map', mapOptions).setView([17.95, 91.29], 0);
    map.flyTo([17.95, 91.29],3);
    

    var loadingControl = L.Control.loading({
        separate: true
    });
    map.addControl(loadingControl);
    var ogfMap = ogf.map(map, { layers: 'Standard,TopoMap' });

    var t = L.terminator({fillOpacity: 0.39});
    t.addTo(map);
    
    setInterval(function () { updateTerminator(t) }, synconst);
    function updateTerminator(t) {
        t.setTime();
    }
    // setTimeout(function(){ map.setZoom(5); }, 2000);

    const airports = JSON.parse(airport);
    const flags = JSON.parse(flag);
    const aircrafts = JSON.parse(aircraft);
    // const airlines = JSON.parse(airline);
    var test = L.marker(airports.CRS.coord, { icon: primaryAirport }).addTo(map).bindPopup(details(airports.CRS, flags.Ohemia, 2, "Federal City of"));
    L.marker(airports.STI.coord, { icon: primaryAirport }).addTo(map).bindPopup(details(airports.STI, flags.FSA, 10));
    L.marker(airports.SIA.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.SIA, flags.Ohemia, 2, "Federal City of"));
    L.marker(airports.LYR.coord, { icon: primaryAirport }).addTo(map).bindPopup(details(airports.LYR, flags.Layr, 3, "Bi Leregk,"));
    L.marker(airports.PEP.coord, { icon: primaryAirport }).addTo(map).bindPopup(details(airports.PEP, flags.Teotiyolcan, 1));
    L.marker(airports.QWI.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.QWI, flags.Mazan, 3));
    L.marker(airports.TZY.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.TZY, flags.Lany, 5));
    L.marker(airports.AMB.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.AMB, flags.Barzona, 1));
    L.marker(airports.TSA.coord, { icon: tertiaryAirport }).addTo(map).bindPopup(details(airports.TSA, flags.Arecales, 11.5));
    L.marker(airports.DIA.coord, { icon: primaryAirport }).addTo(map).bindPopup(details(airports.DIA, flags.FSA, 9));
    L.marker(airports.ELR.coord, { icon: tertiaryAirport }).addTo(map).bindPopup(details(airports.ELR, flags.FSA, 9));
    L.marker(airports.LON.coord, { icon: tertiaryAirport }).addTo(map).bindPopup(details(airports.LON, flags.FSA, 9));
    L.marker(airports.SDA.coord, { icon: tertiaryAirport }).addTo(map).bindPopup(details(airports.SDA, flags.FSA, 9));
    L.marker(airports.ARC.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.ARC, flags.Arecales, 11.5));
    L.marker(airports.SJA.coord, { icon: tertiaryAirport }).addTo(map).bindPopup(details(airports.SJA, flags.Arecales, 11.5));
    L.marker(airports.SCR.coord, { icon: tertiaryAirport }).addTo(map).bindPopup(details(airports.SCR, flags.Arecales, 11.5));
    L.marker(airports.RBC.coord, { icon: tertiaryAirport }).addTo(map).bindPopup(details(airports.RBC, flags.Arecales, 11.5));
    L.marker(airports.KRI.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.KRI, flags.Default, 0));
    L.marker(airports.SEL.coord, { icon: primaryAirport }).addTo(map).bindPopup(details(airports.SEL, flags.Default, 0));
    L.marker(airports.IPS.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.IPS, flags.Default, 0));
    L.marker(airports.ICI.coord, { icon: primaryAirport }).addTo(map).bindPopup(details(airports.ICI, flags.Iscu, 6));
    L.marker(airports.LOC.coord, { icon: tertiaryAirport }).addTo(map).bindPopup(details(airports.LOC, flags.Iscu, 6, "Lonocon Atoll,"));
    L.marker(airports.BSG.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.BSG, flags.Airannia, 1));
    L.marker(airports.JBA.coord, { icon: tertiaryAirport }).addTo(map).bindPopup(details(airports.JBA, flags.Airannia, 1));
    L.marker(airports.AVG.coord, { icon: primaryAirport }).addTo(map).bindPopup(details(airports.AVG, flags.Airannia, 1));
    L.marker(airports.MAH.coord, { icon: tertiaryAirport }).addTo(map).bindPopup(details(airports.MAH, flags.Ruoguovvas, 2, "<img src='https://old.opengeofiction.wiki/images/thumb/b/b0/Ruo_Gaskus_flag.png/800px-Ruo_Gaskus_flag.png' width='35'> &nbsp "));
    L.marker(airports.PHA.coord, { icon: tertiaryAirport }).addTo(map).bindPopup(details(airports.PHA, flags.Ruoguovvas, 2));
    L.marker(airports.QBX.coord, { icon: primaryAirport }).addTo(map).bindPopup(details(airports.QBX, flags.Freedemia, 2));
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
    L.marker(airports.AUS.coord, { icon: generalAirport }).addTo(map).bindPopup(details(airports.AUS, flags.Kofuku, 0));
    L.marker(airports.MTA.coord, { icon: primaryAirport }).addTo(map).bindPopup(details(airports.MTA, flags.Qennes, 5));
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
    L.marker(airports.VFR.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.VFR, flags.Freedemia, 2));
    L.marker(airports.SVD.coord, { icon: tertiaryAirport }).addTo(map).bindPopup(details(airports.SVD, flags.FSA, 9));
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
    L.marker(airports.LIS.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.LIS, flags.Vilvetia, 3));
    L.marker(airports.TTD.coord, { icon: primaryAirport }).addTo(map).bindPopup(details(airports.TTD, flags.Vilvetia, 3));
    L.marker(airports.WCA.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.WCA, flags.FSA, 0));
    L.marker(airports.WMD.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.WMD, flags.FSA, 0));
    L.marker(airports.CCR.coord, { icon: tertiaryAirport }).addTo(map).bindPopup(details(airports.CCR, flags.FSA, 0));
    L.marker(airports.VMW.coord, { icon: tertiaryAirport }).addTo(map).bindPopup(details(airports.VMW, flags.FSA, 0));
    L.marker(airports.MGX.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.MGX, flags.FSA, 0));
    L.marker(airports.WFF.coord, { icon: primaryAirport }).addTo(map).bindPopup(details(airports.WFF, flags.FSA, 0));
    L.marker(airports.WLW.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.WLW, flags.FSA, 0));
    L.marker(airports.KSE.coord, { icon: primaryAirport }).addTo(map).bindPopup(details(airports.KSE, flags.Default, 0));
    L.marker(airports.WHN.coord, { icon: primaryAirport }).addTo(map).bindPopup(details(airports.WHN, flags.Default, 0));
    L.marker(airports.NAO.coord, { icon: primaryAirport }).addTo(map).bindPopup(details(airports.NAO, flags.Default, 0));
    L.marker(airports.FWM.coord, { icon: primaryAirport }).addTo(map).bindPopup(details(airports.FWM, flags.Default, 0));
    L.marker(airports.BBH.coord, { icon: primaryAirport }).addTo(map).bindPopup(details(airports.BBH, flags.Default, 0));
    L.marker(airports.RBI.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.RBI, flags.Default, 0));
    L.marker(airports.YOU.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.YOU, flags.Default, 0));
    L.marker(airports.ACS.coord, { icon: primaryAirport }).addTo(map).bindPopup(details(airports.ACS, flags.Default, 0));
    L.marker(airports.JIX.coord, { icon: primaryAirport }).addTo(map).bindPopup(details(airports.JIX, flags.Freedemia, 2));
    L.marker(airports.JHA.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.JHA, flags.Freedemia, 2));
    L.marker(airports.GWP.coord, { icon: primaryAirport }).addTo(map).bindPopup(details(airports.GWP, flags.Gobras, 5));
    L.marker(airports.BAB.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.BAB, flags.Barzona, 1));
    L.marker(airports.MON.coord, { icon: tertiaryAirport }).addTo(map).bindPopup(details(airports.MON, flags.Barzona, 1));
    L.marker(airports.NAR.coord, { icon: tertiaryAirport }).addTo(map).bindPopup(details(airports.NAR, flags.Barzona, 1));
    L.marker(airports.MTF.coord, { icon: tertiaryAirport }).addTo(map).bindPopup(details(airports.MTF, flags.Barzona, 1));
    L.marker(airports.CMR.coord, { icon: tertiaryAirport }).addTo(map).bindPopup(details(airports.CMR, flags.Barzona, 1));
    L.marker(airports.DOB.coord, { icon: primaryAirport }).addTo(map).bindPopup(details(airports.DOB, flags.Gekdreg, 5));
    L.marker(airports.CSV.coord, { icon: primaryAirport }).addTo(map).bindPopup(details(airports.CSV, flags.Gekdreg, 5));
    L.marker(airports.BOG.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.BOG, flags.Gekdreg, 5));
    L.marker(airports.TZH.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.TZH, flags.Gekdreg, 5));

    L.marker([-38.74783, 32.14310], { icon: generalAirport }).addTo(map); //flying school

    //no zone


    function live() {
        function createDuringFlight(scheduleVar,popup,from,to,aircraft,otherflight, resource_name){
            var offset = 0;
            if (resource_name===large){offset = -45;}
            if ((scheduleVar-now)/1000 > -1 * duration(getDistanceFromLatLonInKm(from, to), aircraft) && (scheduleVar-now)/1000 < 0 && !(otherflight.isRunning())){
                var point = L.Marker.movingMarker([positionRetrieval(from,to,duration(getDistanceFromLatLonInKm(from,to),aircraft),(scheduleVar-now)/1000), to], [(duration(getDistanceFromLatLonInKm(from, to),aircraft) + (scheduleVar - now)/1000) * 1000], { rotationAngle: angle(from, to) + offset, icon: resource_name}).addTo(map);
                const popupOptions = { 'maxWidth' : '300', 'minWidth': '350', 'className': 'flights' };
                point.start(); point.bindPopup(popup, popupOptions) ;}
        }

        //functions
        createDuringFlight(LY500live,LY500popup,airports.SIA.coord,airports.LYR.coord,aircrafts.AV_Nieida200.cruise,LY500,small);
        
        createDuringFlight(UE401live,UE401popup,airports.SAG.coord,airports.KNU.coord,aircrafts.NM90.cruise,UE401,medium);
        createDuringFlight(UE403live,UE403popup,airports.SAG.coord,airports.KNU.coord,aircrafts.W36.cruise,UE403,medium);
        createDuringFlight(UE405live,UE405popup,airports.SAG.coord,airports.KNU.coord,aircrafts.W36.cruise,UE405,medium);
        createDuringFlight(UE407live,UE407popup,airports.SAG.coord,airports.KNU.coord,aircrafts.W34.cruise,UE407,medium);
        createDuringFlight(UE409live,UE409popup,airports.SAG.coord,airports.KNU.coord,aircrafts.W36.cruise,UE409,medium);
        createDuringFlight(UE411live,UE411popup,airports.SAG.coord,airports.KNU.coord,aircrafts.W36.cruise,UE411,medium);
        createDuringFlight(UE413live,UE413popup,airports.SAG.coord,airports.KNU.coord,aircrafts.W36.cruise,UE413,medium);
        createDuringFlight(UE415live,UE415popup,airports.SAG.coord,airports.KNU.coord,aircrafts.W36.cruise,UE415,medium);
        createDuringFlight(UE417live,UE417popup,airports.SAG.coord,airports.KNU.coord,aircrafts.W39_B.cruise,UE417,large);
        createDuringFlight(UE419live,UE419popup,airports.SAG.coord,airports.KNU.coord,aircrafts.W36.cruise,UE419,medium);
        createDuringFlight(UE421live,UE421popup,airports.SAG.coord,airports.KNU.coord,aircrafts.W34.cruise,UE421,medium);
        createDuringFlight(UE400live,UE400popup,airports.KNU.coord,airports.SAG.coord,aircrafts.W39_B.cruise,UE400,large);
        createDuringFlight(UE300live,UE300popup,airports.KNU.coord,airports.WRH.coord,aircrafts.W36.cruise,UE300,medium);
        createDuringFlight(UE301live,UE301popup,airports.WRH.coord,airports.KNU.coord,aircrafts.W36.cruise,UE301,medium);
        createDuringFlight(UE305live,UE305popup,airports.WRH.coord,airports.KNU.coord,aircrafts.W36.cruise,UE305,medium);
        createDuringFlight(UE307live,UE307popup,airports.WRH.coord,airports.KNU.coord,aircrafts.W36.cruise,UE307,medium);
        createDuringFlight(UE100live,UE100popup,airports.SUL.coord,airports.DGY.coord,aircrafts.W36.cruise,UE100,medium);
        createDuringFlight(UE102live,UE102popup,airports.SUL.coord,airports.DGY.coord,aircrafts.W36.cruise,UE102,medium);
        createDuringFlight(UE104live,UE104popup,airports.SUL.coord,airports.DGY.coord,aircrafts.W36.cruise,UE104,medium);
        createDuringFlight(UE101live,UE101popup,airports.DGY.coord,airports.SUL.coord,aircrafts.W36.cruise,UE101,medium);
        createDuringFlight(UE103live,UE103popup,airports.DGY.coord,airports.SUL.coord,aircrafts.W36.cruise,UE103,medium);
        createDuringFlight(UE105live,UE105popup,airports.DGY.coord,airports.SUL.coord,aircrafts.W36.cruise,UE105,medium);
        createDuringFlight(UE050live,UE050popup,airports.SUL.coord,airports.OSI.coord,aircrafts.W39.cruise,UE050,large);
        createDuringFlight(UE051live,UE051popup,airports.OSI.coord,airports.SUL.coord,aircrafts.W39.cruise,UE051,large);
        createDuringFlight(SA0001live,SA0001popup,airports.LCX.coord,airports.STI.coord,aircrafts.DG_80.cruise,SA0001,medium);
        createDuringFlight(IC001live,IC001popup,airports.ICI.coord,airports.GWP.coord,aircrafts.DG_70.cruise,IC001,medium);
        createDuringFlight(AL714live,AL714popup,airports.FJA.coord,airports.GWP.coord,aircrafts.W36.cruise,AL714,medium);




        createDuringFlight(FR001live,FR001popup,airports.QBX.coord,airports.GWP.coord,aircrafts.W39.cruise,FR001,large);
        createDuringFlight(FR002live,FR002popup,airports.GWP.coord,airports.QBX.coord,aircrafts.W39.cruise,FR002,large);
        createDuringFlight(FR015live,FR015popup,airports.QBX.coord,airports.LCX.coord,aircrafts.W36.cruise,FR015,medium);
        createDuringFlight(FR017live,FR017popup,airports.QBX.coord,airports.LCX.coord,aircrafts.W36.cruise,FR017,medium);
        createDuringFlight(FR019live,FR019popup,airports.QBX.coord,airports.LCX.coord,aircrafts.W36.cruise,FR019,medium);
        createDuringFlight(FR016live,FR016popup,airports.LCX.coord,airports.QBX.coord,aircrafts.W36.cruise,FR016,medium);
        createDuringFlight(FR018live,FR018popup,airports.LCX.coord,airports.QBX.coord,aircrafts.W36.cruise,FR018,medium);
        createDuringFlight(FR020live,FR020popup,airports.LCX.coord,airports.QBX.coord,aircrafts.W36.cruise,FR020,medium);

        createDuringFlight(LT001live,LT001popup,airports.AMB.coord,airports.QBX.coord,aircrafts.Contair_D20a.cruise,LT001,medium);
        createDuringFlight(LT003live,LT003popup,airports.AMB.coord,airports.QBX.coord,aircrafts.Contair_D20a.cruise,LT003,medium);
        createDuringFlight(LT005live,LT005popup,airports.AMB.coord,airports.QBX.coord,aircrafts.Contair_D20a.cruise,LT005,medium);
        createDuringFlight(LT007live,LT007popup,airports.AMB.coord,airports.QBX.coord,aircrafts.Contair_D20a.cruise,LT007,medium);
        createDuringFlight(LT009live,LT009popup,airports.AMB.coord,airports.QBX.coord,aircrafts.Contair_D20a.cruise,LT009,medium);
        createDuringFlight(LT011live,LT011popup,airports.AMB.coord,airports.QBX.coord,aircrafts.Contair_D20a.cruise,LT011,medium);
        createDuringFlight(LT013live,LT013popup,airports.AMB.coord,airports.QBX.coord,aircrafts.Contair_D20a.cruise,LT013,medium);

    }
    
    function schedule(){
        //UTC parameters
        var today = new Date();
        var now = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), today.getUTCHours(), today.getUTCMinutes(), today.getUTCSeconds());
        //schedule
        const LY500schedule = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), 0, 0, 0);

        const UE401schedule = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), first.getUTCDate(), flights.UE401.liftoff_hour, flights.UE401.liftoff_minute, 0);
        const UE403schedule = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), flights.UE403.liftoff_hour, flights.UE403.liftoff_minute, 0);
        const UE405schedule = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), flights.UE405.liftoff_hour, flights.UE405.liftoff_minute, 0);
        const UE407schedule = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), flights.UE407.liftoff_hour, flights.UE407.liftoff_minute, 0);
        const UE409schedule = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), flights.UE409.liftoff_hour, flights.UE409.liftoff_minute, 0);
        const UE411schedule = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), flights.UE411.liftoff_hour, flights.UE411.liftoff_minute, 0);
        const UE413schedule = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), flights.UE413.liftoff_hour, flights.UE413.liftoff_minute, 0);
        const UE415schedule = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), flights.UE415.liftoff_hour, flights.UE415.liftoff_minute, 0);
        const UE417schedule = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), flights.UE417.liftoff_hour, flights.UE417.liftoff_minute, 0);
        const UE419schedule = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), flights.UE419.liftoff_hour, flights.UE419.liftoff_minute, 0);
        const UE421schedule = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), flights.UE421.liftoff_hour, flights.UE421.liftoff_minute, 0);
        const UE400schedule = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), first.getUTCDate(), flights.UE400.liftoff_hour, flights.UE400.liftoff_minute, 0);
        const UE300schedule = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), flights.UE300.liftoff_hour, flights.UE300.liftoff_minute, 0);
        const UE301schedule = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), flights.UE301.liftoff_hour, flights.UE301.liftoff_minute, 0);
        const UE305schedule = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), flights.UE305.liftoff_hour, flights.UE305.liftoff_minute, 0);
        const UE307schedule = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), flights.UE307.liftoff_hour, flights.UE307.liftoff_minute, 0);
        const UE100schedule = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), flights.UE100.liftoff_hour, flights.UE100.liftoff_minute, 0);
        const UE102schedule = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), flights.UE102.liftoff_hour, flights.UE102.liftoff_minute, 0);
        const UE104schedule = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), flights.UE104.liftoff_hour, flights.UE104.liftoff_minute, 0);
        const UE101schedule = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), flights.UE101.liftoff_hour, flights.UE101.liftoff_minute, 0);
        const UE103schedule = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), flights.UE103.liftoff_hour, flights.UE103.liftoff_minute, 0);
        const UE105schedule = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), flights.UE105.liftoff_hour, flights.UE105.liftoff_minute, 0);
        const UE050schedule = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), flights.UE050.liftoff_hour, flights.UE050.liftoff_minute, 0);
        const UE051schedule = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), first.getUTCDate(), flights.UE051.liftoff_hour, flights.UE051.liftoff_minute, 0);
        const SA0001schedule = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), flights.SA0001.liftoff_hour, flights.SA0001.liftoff_minute, 0);
        const IC001schedule = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), flights.IC001.liftoff_hour, flights.IC001.liftoff_minute, 0);
        const AL714schedule = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), flights.AL714.liftoff_hour, flights.AL714.liftoff_minute, 0);
        

        const FR001schedule = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), first.getUTCDate(), flights.FR001.liftoff_hour, flights.FR001.liftoff_minute, 0);
        const FR002schedule = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), flights.FR002.liftoff_hour, flights.FR002.liftoff_minute, 0);
        const FR015schedule = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), flights.FR015.liftoff_hour, flights.FR015.liftoff_minute, 0);
        const FR017schedule = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), flights.FR017.liftoff_hour, flights.FR017.liftoff_minute, 0);
        const FR019schedule = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), first.getUTCDate(), flights.FR019.liftoff_hour, flights.FR019.liftoff_minute, 0);
        const FR016schedule = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), first.getUTCDate(), flights.FR016.liftoff_hour, flights.FR016.liftoff_minute, 0);
        const FR018schedule = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), flights.FR018.liftoff_hour, flights.FR018.liftoff_minute, 0);
        const FR020schedule = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), flights.FR020.liftoff_hour, flights.FR020.liftoff_minute, 0);

        const LT001schedule = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), flights.LT001.liftoff_hour, flights.LT001.liftoff_minute, 0);
        const LT003schedule = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), flights.LT003.liftoff_hour, flights.LT003.liftoff_minute, 0);
        const LT005schedule = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), flights.LT005.liftoff_hour, flights.LT005.liftoff_minute, 0);
        const LT007schedule = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), flights.LT007.liftoff_hour, flights.LT007.liftoff_minute, 0);
        const LT009schedule = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), flights.LT009.liftoff_hour, flights.LT009.liftoff_minute, 0);
        const LT011schedule = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), flights.LT011.liftoff_hour, flights.LT011.liftoff_minute, 0);
        const LT013schedule = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), flights.LT013.liftoff_hour, flights.LT013.liftoff_minute, 0);
        
        
        //main
        function createBeforeLift(scheduleVar,visibleBeforeSeconds,invisibleAfterSeconds,markerVar,popup,from,to,aircraft){
            if ((scheduleVar-now)/1000 <= visibleBeforeSeconds && (scheduleVar-now)/1000 > 0){markerVar.setOpacity(1);} if ((scheduleVar-now) == 0){ markerVar.start(); markerVar.setOpacity(1); markerVar.bindPopup(popup);}
            if ((scheduleVar-now)/1000 <= -1 * duration(getDistanceFromLatLonInKm(from, to),aircraft)  && (scheduleVar-now)/1000 >=  (-1 * duration(getDistanceFromLatLonInKm(from, to),aircraft) - invisibleAfterSeconds)){markerVar.stop(); markerVar.setOpacity(1)} else { if ((scheduleVar-now)/1000 < (-1 * duration(getDistanceFromLatLonInKm(from, to),aircraft) - invisibleAfterSeconds)){ markerVar.setOpacity(0)}};
        }
        //functions
        createBeforeLift(LY500schedule,60*60,60*30,LY500,LY500popup,airports.SIA.coord,airports.LYR.coord,aircrafts.AV_Nieida200.cruise);
        createBeforeLift(UE401schedule,60*60,60*30,UE401,UE401popup,airports.SAG.coord,airports.KNU.coord,aircrafts.NM90.cruise);
        createBeforeLift(UE403schedule,60*60,60*30,UE403,UE403popup,airports.SAG.coord,airports.KNU.coord,aircrafts.W36.cruise);
        createBeforeLift(UE405schedule,60*60,60*30,UE405,UE405popup,airports.SAG.coord,airports.KNU.coord,aircrafts.W36.cruise);
        createBeforeLift(UE407schedule,60*60,60*30,UE407,UE407popup,airports.SAG.coord,airports.KNU.coord,aircrafts.W34.cruise);
        createBeforeLift(UE409schedule,60*60,60*30,UE409,UE409popup,airports.SAG.coord,airports.KNU.coord,aircrafts.W36.cruise);
        createBeforeLift(UE411schedule,60*60,60*30,UE411,UE411popup,airports.SAG.coord,airports.KNU.coord,aircrafts.W36.cruise);
        createBeforeLift(UE413schedule,60*60,60*30,UE413,UE413popup,airports.SAG.coord,airports.KNU.coord,aircrafts.W36.cruise);
        createBeforeLift(UE415schedule,60*60,60*30,UE415,UE415popup,airports.SAG.coord,airports.KNU.coord,aircrafts.W36.cruise);
        createBeforeLift(UE417schedule,60*60,60*30,UE417,UE417popup,airports.SAG.coord,airports.KNU.coord,aircrafts.W39_B.cruise);
        createBeforeLift(UE419schedule,60*60,60*30,UE419,UE419popup,airports.SAG.coord,airports.KNU.coord,aircrafts.W36.cruise);
        createBeforeLift(UE421schedule,60*60,60*30,UE421,UE421popup,airports.SAG.coord,airports.KNU.coord,aircrafts.W34.cruise);
        createBeforeLift(UE400schedule,60*60,60*30,UE400,UE400popup,airports.KNU.coord,airports.SAG.coord,aircrafts.W39_B.cruise);
        createBeforeLift(UE300schedule,60*60,60*30,UE300,UE300popup,airports.KNU.coord,airports.WRH.coord,aircrafts.W36.cruise);
        createBeforeLift(UE301schedule,60*60,60*30,UE301,UE301popup,airports.WRH.coord,airports.KNU.coord,aircrafts.W36.cruise);
        createBeforeLift(UE305schedule,60*60,60*30,UE305,UE305popup,airports.WRH.coord,airports.KNU.coord,aircrafts.W36.cruise);
        createBeforeLift(UE307schedule,60*60,60*30,UE307,UE307popup,airports.WRH.coord,airports.KNU.coord,aircrafts.W36.cruise);
        createBeforeLift(UE100schedule,60*60,60*30,UE100,UE100popup,airports.SUL.coord,airports.DGY.coord,aircrafts.W36.cruise);
        createBeforeLift(UE102schedule,60*60,60*30,UE102,UE102popup,airports.SUL.coord,airports.DGY.coord,aircrafts.W36.cruise);
        createBeforeLift(UE104schedule,60*60,60*30,UE104,UE104popup,airports.SUL.coord,airports.DGY.coord,aircrafts.W36.cruise);
        createBeforeLift(UE101schedule,60*60,60*30,UE101,UE101popup,airports.DGY.coord,airports.SUL.coord,aircrafts.W36.cruise);
        createBeforeLift(UE103schedule,60*60,60*30,UE103,UE103popup,airports.DGY.coord,airports.SUL.coord,aircrafts.W36.cruise);
        createBeforeLift(UE105schedule,60*60,60*30,UE105,UE105popup,airports.DGY.coord,airports.SUL.coord,aircrafts.W36.cruise);
        createBeforeLift(UE050schedule,60*60,60*30,UE050,UE050popup,airports.SUL.coord,airports.OSI.coord,aircrafts.W39.cruise);
        createBeforeLift(UE051schedule,60*60,60*30,UE051,UE051popup,airports.OSI.coord,airports.SUL.coord,aircrafts.W39.cruise);

        createBeforeLift(FR001schedule,60*70,60*40,FR001,FR001popup,airports.QBX.coord,airports.GWP.coord,aircrafts.W39.cruise);
        createBeforeLift(FR002schedule,60*70,60*40,FR002,FR002popup,airports.GWP.coord,airports.QBX.coord,aircrafts.W39.cruise);
        createBeforeLift(FR015schedule,60*60,60*30,FR015,FR015popup,airports.QBX.coord,airports.LCX.coord,aircrafts.W36.cruise);
        createBeforeLift(FR017schedule,60*60,60*30,FR017,FR017popup,airports.QBX.coord,airports.LCX.coord,aircrafts.W36.cruise);
        createBeforeLift(FR019schedule,60*60,60*30,FR019,FR019popup,airports.QBX.coord,airports.LCX.coord,aircrafts.W36.cruise);
        createBeforeLift(FR016schedule,60*60,60*30,FR016,FR016popup,airports.LCX.coord,airports.QBX.coord,aircrafts.W36.cruise);
        createBeforeLift(FR018schedule,60*60,60*30,FR018,FR018popup,airports.LCX.coord,airports.QBX.coord,aircrafts.W36.cruise);
        createBeforeLift(FR020schedule,60*60,60*30,FR020,FR020popup,airports.LCX.coord,airports.QBX.coord,aircrafts.W36.cruise);
        
        createBeforeLift(LT001schedule,60*40,60*30,LT001,LT001popup,airports.AMB.coord,airports.QBX.coord,aircrafts.Contair_D20a.cruise);
        createBeforeLift(LT003schedule,60*40,60*30,LT003,LT003popup,airports.AMB.coord,airports.QBX.coord,aircrafts.Contair_D20a.cruise);
        createBeforeLift(LT005schedule,60*40,60*30,LT005,LT005popup,airports.AMB.coord,airports.QBX.coord,aircrafts.Contair_D20a.cruise);
        createBeforeLift(LT007schedule,60*40,60*30,LT007,LT007popup,airports.AMB.coord,airports.QBX.coord,aircrafts.Contair_D20a.cruise);
        createBeforeLift(LT009schedule,60*40,60*30,LT009,LT009popup,airports.AMB.coord,airports.QBX.coord,aircrafts.Contair_D20a.cruise);
        createBeforeLift(LT011schedule,60*40,60*30,LT011,LT011popup,airports.AMB.coord,airports.QBX.coord,aircrafts.Contair_D20a.cruise);
        createBeforeLift(LT013schedule,60*40,60*30,LT013,LT013popup,airports.AMB.coord,airports.QBX.coord,aircrafts.Contair_D20a.cruise);

        createBeforeLift(SA0001schedule,0,0,SA0001,SA0001popup,airports.LCX.coord,airports.STI.coord,aircrafts.DG_80.cruise);
        createBeforeLift(IC001schedule,3600,1800,IC001,IC001popup,airports.ICI.coord,airports.GWP.coord,aircrafts.DG_70.cruise);
        createBeforeLift(AL714schedule,0,0,AL714,AL714popup,airports.FJA.coord,airports.GWP.coord,aircrafts.W36.cruise);
        

        setTimeout(function () { schedule()}, 1000);
    }

    var today = new Date();
    var now = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), today.getUTCHours(), today.getUTCMinutes(), today.getUTCSeconds());
    var first = new Date(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), today.getUTCHours()-11, today.getUTCMinutes(), today.getUTCSeconds());
    function makeMarker(from, to, aircraft, resource_name){
        var offset = 0;
        if (resource_name===large){offset = -45;}
        return point = L.Marker.movingMarker([from, to], [duration(getDistanceFromLatLonInKm(from, to),aircraft) * 1000], { rotationAngle: angle(from, to) + offset, icon: resource_name }).addTo(map);
    }

    
        
    const LY500live = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), 0, 0, 0);
    // const UE400live = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), 20, 23, 10, 0);
    const UE401live = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), first.getUTCDate(), flights.UE401.liftoff_hour, flights.UE401.liftoff_minute, 0);
    const UE403live = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), flights.UE403.liftoff_hour, flights.UE403.liftoff_minute, 0);
    const UE405live = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), flights.UE405.liftoff_hour, flights.UE405.liftoff_minute, 0);
    const UE407live = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), flights.UE407.liftoff_hour, flights.UE407.liftoff_minute, 0);
    const UE409live = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), flights.UE409.liftoff_hour, flights.UE409.liftoff_minute, 0);
    const UE411live = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), flights.UE411.liftoff_hour, flights.UE411.liftoff_minute, 0);
    const UE413live = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), flights.UE413.liftoff_hour, flights.UE413.liftoff_minute, 0);
    const UE415live = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), flights.UE415.liftoff_hour, flights.UE415.liftoff_minute, 0);
    const UE417live = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), flights.UE417.liftoff_hour, flights.UE417.liftoff_minute, 0);
    const UE419live = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), flights.UE419.liftoff_hour, flights.UE419.liftoff_minute, 0);
    const UE421live = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), flights.UE421.liftoff_hour, flights.UE421.liftoff_minute, 0);
    const UE400live = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), first.getUTCDate(), flights.UE400.liftoff_hour, flights.UE400.liftoff_minute, 0);
    const UE300live = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), flights.UE300.liftoff_hour, flights.UE300.liftoff_minute, 0);
    const UE301live = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), flights.UE301.liftoff_hour, flights.UE301.liftoff_minute, 0);
    const UE305live = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), flights.UE305.liftoff_hour, flights.UE305.liftoff_minute, 0);
    const UE307live = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), flights.UE307.liftoff_hour, flights.UE307.liftoff_minute, 0);
    const UE100live = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), flights.UE100.liftoff_hour, flights.UE100.liftoff_minute, 0);
    const UE102live = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), flights.UE102.liftoff_hour, flights.UE102.liftoff_minute, 0);
    const UE104live = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), flights.UE104.liftoff_hour, flights.UE104.liftoff_minute, 0);
    const UE101live = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), flights.UE101.liftoff_hour, flights.UE101.liftoff_minute, 0);
    const UE103live = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), flights.UE103.liftoff_hour, flights.UE103.liftoff_minute, 0);
    const UE105live = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), flights.UE105.liftoff_hour, flights.UE105.liftoff_minute, 0);
    const UE050live = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), flights.UE050.liftoff_hour, flights.UE050.liftoff_minute, 0);
    const UE051live = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), first.getUTCDate(), flights.UE051.liftoff_hour, flights.UE051.liftoff_minute, 0);

    const FR001live = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), first.getUTCDate(), flights.FR001.liftoff_hour, flights.FR001.liftoff_minute, 0);
    const FR002live = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), flights.FR002.liftoff_hour, flights.FR002.liftoff_minute, 0);
    const FR015live = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), flights.FR015.liftoff_hour, flights.FR015.liftoff_minute, 0);
    const FR017live = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), flights.FR017.liftoff_hour, flights.FR017.liftoff_minute, 0);
    const FR019live = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), first.getUTCDate(), flights.FR019.liftoff_hour, flights.FR019.liftoff_minute, 0);
    const FR016live = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), first.getUTCDate(), flights.FR016.liftoff_hour, flights.FR016.liftoff_minute, 0);
    const FR018live = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), flights.FR018.liftoff_hour, flights.FR018.liftoff_minute, 0);
    const FR020live = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), flights.FR020.liftoff_hour, flights.FR020.liftoff_minute, 0);

    const LT001live = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), flights.LT001.liftoff_hour, flights.LT001.liftoff_minute, 0);
    const LT003live = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), flights.LT003.liftoff_hour, flights.LT003.liftoff_minute, 0);
    const LT005live = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), flights.LT005.liftoff_hour, flights.LT005.liftoff_minute, 0);
    const LT007live = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), flights.LT007.liftoff_hour, flights.LT007.liftoff_minute, 0);
    const LT009live = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), flights.LT009.liftoff_hour, flights.LT009.liftoff_minute, 0);
    const LT011live = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), flights.LT011.liftoff_hour, flights.LT011.liftoff_minute, 0);
    const LT013live = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), flights.LT013.liftoff_hour, flights.LT013.liftoff_minute, 0);

    const SA0001live = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), flights.SA0001.liftoff_hour, flights.SA0001.liftoff_minute, 0);
    const IC001live = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), flights.IC001.liftoff_hour, flights.IC001.liftoff_minute, 0);
    const AL714live = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), flights.AL714.liftoff_hour, flights.AL714.liftoff_minute, 0);


    var LY500 = makeMarker(airports.SIA.coord, airports.LYR.coord, aircrafts.AV_Nieida200.cruise, small); LY500.setOpacity(0);
    var UE401 = makeMarker(airports.SAG.coord, airports.KNU.coord, aircrafts.NM90.cruise, medium); UE401.setOpacity(0);
    var UE403 = makeMarker(airports.SAG.coord, airports.KNU.coord, aircrafts.W36.cruise, medium); UE403.setOpacity(0);
    var UE405 = makeMarker(airports.SAG.coord, airports.KNU.coord, aircrafts.W36.cruise, medium); UE405.setOpacity(0);
    var UE407 = makeMarker(airports.SAG.coord, airports.KNU.coord, aircrafts.W34.cruise, medium); UE407.setOpacity(0);
    var UE409 = makeMarker(airports.SAG.coord, airports.KNU.coord, aircrafts.W36.cruise, medium); UE409.setOpacity(0);
    var UE411 = makeMarker(airports.SAG.coord, airports.KNU.coord, aircrafts.W36.cruise, medium); UE411.setOpacity(0);
    var UE413 = makeMarker(airports.SAG.coord, airports.KNU.coord, aircrafts.W36.cruise, medium); UE413.setOpacity(0);
    var UE415 = makeMarker(airports.SAG.coord, airports.KNU.coord, aircrafts.W36.cruise, medium); UE415.setOpacity(0);
    var UE417 = makeMarker(airports.SAG.coord, airports.KNU.coord, aircrafts.W39_B.cruise, large); UE417.setOpacity(0);
    var UE419 = makeMarker(airports.SAG.coord, airports.KNU.coord, aircrafts.W36.cruise, medium); UE419.setOpacity(0);
    var UE421 = makeMarker(airports.SAG.coord, airports.KNU.coord, aircrafts.W34.cruise, medium); UE421.setOpacity(0);
    var UE400 = makeMarker(airports.KNU.coord, airports.SAG.coord, aircrafts.W39_B.cruise, large); UE400.setOpacity(0);
    var UE300= makeMarker(airports.KNU.coord,airports.WRH.coord,aircrafts.W36.cruise,medium); UE300.setOpacity(0);
    var UE301= makeMarker(airports.WRH.coord,airports.KNU.coord,aircrafts.W36.cruise,medium); UE301.setOpacity(0);
    var UE305= makeMarker(airports.WRH.coord,airports.KNU.coord,aircrafts.W36.cruise,medium); UE305.setOpacity(0);
    var UE307= makeMarker(airports.WRH.coord,airports.KNU.coord,aircrafts.W36.cruise,medium); UE307.setOpacity(0);
    var UE100= makeMarker(airports.SUL.coord,airports.DGY.coord,aircrafts.W36.cruise,medium); UE100.setOpacity(0);
    var UE102= makeMarker(airports.SUL.coord,airports.DGY.coord,aircrafts.W36.cruise,medium); UE102.setOpacity(0);
    var UE104= makeMarker(airports.SUL.coord,airports.DGY.coord,aircrafts.W36.cruise,medium); UE104.setOpacity(0);
    var UE101= makeMarker(airports.DGY.coord,airports.SUL.coord,aircrafts.W36.cruise,medium); UE101.setOpacity(0);
    var UE103= makeMarker(airports.DGY.coord,airports.SUL.coord,aircrafts.W36.cruise,medium); UE103.setOpacity(0);
    var UE105= makeMarker(airports.DGY.coord,airports.SUL.coord,aircrafts.W36.cruise,medium); UE105.setOpacity(0);
    var UE050= makeMarker(airports.SUL.coord,airports.OSI.coord,aircrafts.W39.cruise,large); UE050.setOpacity(0);
    var UE051= makeMarker(airports.OSI.coord,airports.SUL.coord,aircrafts.W39.cruise,large); UE051.setOpacity(0);
    var SA0001= makeMarker(airports.LCX.coord,airports.STI.coord,aircrafts.DG_80.cruise,medium); SA0001.setOpacity(0);
    var IC001= makeMarker(airports.ICI.coord,airports.GWP.coord,aircrafts.DG_70.cruise,medium); IC001.setOpacity(0);
    var AL714= makeMarker(airports.FJA.coord,airports.GWP.coord,aircrafts.W36.cruise,medium); AL714.setOpacity(0);

    var FR001 = makeMarker(airports.QBX.coord, airports.GWP.coord, aircrafts.W39.cruise, large); FR001.setOpacity(0);
    var FR002 = makeMarker(airports.GWP.coord, airports.QBX.coord, aircrafts.W39.cruise, large); FR002.setOpacity(0);
    var FR015 = makeMarker(airports.QBX.coord, airports.LCX.coord, aircrafts.W36.cruise, medium); FR015.setOpacity(0);
    var FR017 = makeMarker(airports.QBX.coord, airports.LCX.coord, aircrafts.W36.cruise, medium); FR017.setOpacity(0);
    var FR019 = makeMarker(airports.QBX.coord, airports.LCX.coord, aircrafts.W36.cruise, medium); FR019.setOpacity(0);
    var FR016 = makeMarker(airports.LCX.coord, airports.QBX.coord, aircrafts.W36.cruise, medium); FR016.setOpacity(0);
    var FR018 = makeMarker(airports.LCX.coord, airports.QBX.coord, aircrafts.W36.cruise, medium); FR018.setOpacity(0);
    var FR020 = makeMarker(airports.LCX.coord, airports.QBX.coord, aircrafts.W36.cruise, medium); FR020.setOpacity(0);
    
    var LT001 = makeMarker(airports.AMB.coord, airports.QBX.coord, aircrafts.Contair_D20a.cruise, medium); LT001.setOpacity(0);
    var LT003 = makeMarker(airports.AMB.coord, airports.QBX.coord, aircrafts.Contair_D20a.cruise, medium); LT003.setOpacity(0);
    var LT005 = makeMarker(airports.AMB.coord, airports.QBX.coord, aircrafts.Contair_D20a.cruise, medium); LT005.setOpacity(0);
    var LT007 = makeMarker(airports.AMB.coord, airports.QBX.coord, aircrafts.Contair_D20a.cruise, medium); LT007.setOpacity(0);
    var LT009 = makeMarker(airports.AMB.coord, airports.QBX.coord, aircrafts.Contair_D20a.cruise, medium); LT009.setOpacity(0);
    var LT011 = makeMarker(airports.AMB.coord, airports.QBX.coord, aircrafts.Contair_D20a.cruise, medium); LT011.setOpacity(0);
    var LT013 = makeMarker(airports.AMB.coord, airports.QBX.coord, aircrafts.Contair_D20a.cruise, medium); LT013.setOpacity(0);

    live();
    schedule();

}


