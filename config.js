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
    L.marker(airports.DIA.coord, { icon: primaryAirport }).addTo(map).bindPopup(details(airports.DIA, flags.FSA, 0));
    L.marker(airports.ELR.coord, { icon: tertiaryAirport }).addTo(map).bindPopup(details(airports.ELR, flags.FSA, 0));
    L.marker(airports.LON.coord, { icon: tertiaryAirport }).addTo(map).bindPopup(details(airports.LON, flags.FSA, 0));
    L.marker(airports.SDA.coord, { icon: tertiaryAirport }).addTo(map).bindPopup(details(airports.SDA, flags.FSA, 0));
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
    L.marker(airports.LIS.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.LIS, flags.Vilvetia, 3));
    L.marker(airports.TTD.coord, { icon: primaryAirport }).addTo(map).bindPopup(details(airports.TTD, flags.Vilvetia, 3));
    L.marker(airports.WCA.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.WCA, flags.FSA, 0));
    L.marker(airports.WMD.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.WMD, flags.FSA, 0));
    L.marker(airports.CCR.coord, { icon: tertiaryAirport }).addTo(map).bindPopup(details(airports.CCR, flags.FSA, 0));
    L.marker(airports.VMW.coord, { icon: tertiaryAirport }).addTo(map).bindPopup(details(airports.VMW, flags.FSA, 0));
    L.marker(airports.MGX.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.MGX, flags.FSA, 0));
    L.marker(airports.WFF.coord, { icon: primaryAirport }).addTo(map).bindPopup(details(airports.WFF, flags.FSA, 0));
    L.marker(airports.WVN.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.WVN, flags.FSA, 0));
    L.marker(airports.KSE.coord, { icon: primaryAirport }).addTo(map).bindPopup(details(airports.KSE, flags.Default, 0));
    L.marker(airports.WHN.coord, { icon: primaryAirport }).addTo(map).bindPopup(details(airports.WHN, flags.Default, 0));
    L.marker(airports.NAO.coord, { icon: primaryAirport }).addTo(map).bindPopup(details(airports.NAO, flags.Default, 0));
    L.marker(airports.FWM.coord, { icon: primaryAirport }).addTo(map).bindPopup(details(airports.FWM, flags.Default, 0));
    L.marker(airports.BBH.coord, { icon: primaryAirport }).addTo(map).bindPopup(details(airports.BBH, flags.Default, 0));
    L.marker(airports.RBI.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.RBI, flags.Default, 0));
    L.marker(airports.YOU.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.YOU, flags.Default, 0));
    L.marker(airports.ACS.coord, { icon: primaryAirport }).addTo(map).bindPopup(details(airports.ACS, flags.Default, 0));
    L.marker(airports.JHD.coord, { icon: primaryAirport }).addTo(map).bindPopup(details(airports.JHD, flags.Freedemia, 2));
    L.marker(airports.JHA.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.JHA, flags.Freedemia, 2));
    L.marker(airports.GWP.coord, { icon: primaryAirport }).addTo(map).bindPopup(details(airports.GWP, flags.Gobras, 0));
    L.marker(airports.BAB.coord, { icon: secondaryAirport }).addTo(map).bindPopup(details(airports.BAB, flags.Barzona, 1));
    L.marker(airports.MON.coord, { icon: tertiaryAirport }).addTo(map).bindPopup(details(airports.MON, flags.Barzona, 1));
    L.marker(airports.NAR.coord, { icon: tertiaryAirport }).addTo(map).bindPopup(details(airports.NAR, flags.Barzona, 1));
    L.marker(airports.MTF.coord, { icon: tertiaryAirport }).addTo(map).bindPopup(details(airports.MTF, flags.Barzona, 1));
    L.marker(airports.CMR.coord, { icon: tertiaryAirport }).addTo(map).bindPopup(details(airports.CMR, flags.Barzona, 1));

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
        createDuringFlight(LY500live,LY500popup,airports.SIA.coord,airports.LYR.coord,aircrafts.AV_Nieida200.speed,LY500,small);

        createDuringFlight(UE403live,UE403popup,airports.SAG.coord,airports.KNU.coord,aircrafts.W36.speed,UE403,medium);
        createDuringFlight(UE405live,UE405popup,airports.SAG.coord,airports.KNU.coord,aircrafts.W36.speed,UE405,medium);
        createDuringFlight(UE407live,UE407popup,airports.SAG.coord,airports.KNU.coord,aircrafts.W34.speed,UE407,medium);
        createDuringFlight(UE409live,UE409popup,airports.SAG.coord,airports.KNU.coord,aircrafts.W36.speed,UE409,medium);
        createDuringFlight(UE411live,UE411popup,airports.SAG.coord,airports.KNU.coord,aircrafts.W36.speed,UE411,medium);
        createDuringFlight(UE413live,UE413popup,airports.SAG.coord,airports.KNU.coord,aircrafts.W36.speed,UE413,medium);
        createDuringFlight(UE415live,UE415popup,airports.SAG.coord,airports.KNU.coord,aircrafts.W36.speed,UE415,medium);
        createDuringFlight(UE417live,UE417popup,airports.SAG.coord,airports.KNU.coord,aircrafts.W39_B.speed,UE417,medium);
        createDuringFlight(UE419live,UE419popup,airports.SAG.coord,airports.KNU.coord,aircrafts.W36.speed,UE419,medium);

    }
    
    function schedule(){
        //UTC parameters
        var today = new Date();
        var now = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), today.getUTCHours(), today.getUTCMinutes(), today.getUTCSeconds());
        //schedule
        const LY500schedule = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), 1, 0, 0, 0);
        const UE403schedule = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), flights.UE403.liftoff_hour, flights.UE403.liftoff_minute, 0);
        const UE405schedule = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), flights.UE405.liftoff_hour, flights.UE405.liftoff_minute, 0);
        const UE407schedule = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), flights.UE405.liftoff_hour, flights.UE407.liftoff_minute, 0);
        const UE409schedule = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), flights.UE409.liftoff_hour, flights.UE409.liftoff_minute, 0);
        const UE411schedule = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), flights.UE411.liftoff_hour, flights.UE411.liftoff_minute, 0);
        const UE413schedule = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), flights.UE413.liftoff_hour, flights.UE413.liftoff_minute, 0);
        const UE415schedule = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), flights.UE415.liftoff_hour, flights.UE415.liftoff_minute, 0);
        const UE417schedule = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), flights.UE417.liftoff_hour, flights.UE417.liftoff_minute, 0);
        const UE419schedule = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), flights.UE419.liftoff_hour, flights.UE419.liftoff_minute, 0);


        //main
        function createBeforeLift(scheduleVar,visibleBeforeSeconds,invisibleAfterSeconds,markerVar,popup,from,to,aircraft){
            if ((scheduleVar-now)/1000 <= visibleBeforeSeconds && (scheduleVar-now)/1000 > 0){markerVar.setOpacity(1);} if ((scheduleVar-now) == 0){ markerVar.start(); markerVar.setOpacity(1); markerVar.bindPopup(popup);}
            if ((scheduleVar-now)/1000 <= -1 * duration(getDistanceFromLatLonInKm(from, to),aircraft)  && (scheduleVar-now)/1000 >=  (-1 * duration(getDistanceFromLatLonInKm(from, to),aircraft) - invisibleAfterSeconds)){markerVar.stop(); markerVar.setOpacity(1)} else { if ((scheduleVar-now)/1000 < (-1 * duration(getDistanceFromLatLonInKm(from, to),aircraft) - invisibleAfterSeconds)){ markerVar.setOpacity(0)}};
        }
        //functions
        createBeforeLift(LY500schedule,60*60,60*30,LY500,LY500popup,airports.SIA.coord,airports.LYR.coord,aircrafts.AV_Nieida200.speed);
        createBeforeLift(UE403schedule,60*60,60*30,UE403,UE403popup,airports.SAG.coord,airports.KNU.coord,aircrafts.W36.speed);
        createBeforeLift(UE405schedule,60*60,60*30,UE405,UE405popup,airports.SAG.coord,airports.KNU.coord,aircrafts.W36.speed);
        createBeforeLift(UE407schedule,60*60,60*30,UE407,UE407popup,airports.SAG.coord,airports.KNU.coord,aircrafts.W34.speed);
        createBeforeLift(UE409schedule,60*60,60*30,UE409,UE409popup,airports.SAG.coord,airports.KNU.coord,aircrafts.W36.speed);
        createBeforeLift(UE411schedule,60*60,60*30,UE411,UE411popup,airports.SAG.coord,airports.KNU.coord,aircrafts.W36.speed);
        createBeforeLift(UE413schedule,60*60,60*30,UE413,UE413popup,airports.SAG.coord,airports.KNU.coord,aircrafts.W36.speed);
        createBeforeLift(UE415schedule,60*60,60*30,UE415,UE415popup,airports.SAG.coord,airports.KNU.coord,aircrafts.W36.speed);
        createBeforeLift(UE417schedule,60*60,60*30,UE417,UE417popup,airports.SAG.coord,airports.KNU.coord,aircrafts.W39_B.speed);
        createBeforeLift(UE419schedule,60*60,60*30,UE419,UE419popup,airports.SAG.coord,airports.KNU.coord,aircrafts.W36.speed);
        


        setTimeout(function () { schedule()}, 1000);
    }

    var today = new Date();
    var now = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), today.getUTCHours(), today.getUTCMinutes(), today.getUTCSeconds());

    function makeMarker(from, to, aircraft, resource_name){
        var offset = 0;
        if (resource_name===large){offset = -45;}
        return point = L.Marker.movingMarker([from, to], [duration(getDistanceFromLatLonInKm(from, to),aircraft) * 1000], { rotationAngle: angle(from, to) + offset, icon: resource_name }).addTo(map);
    }

    
        
    const LY500live = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), 1, 23, 10, 0);
    // const UE400live = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), 20, 23, 10, 0);
    const UE403live = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), flights.UE403.liftoff_hour, flights.UE403.liftoff_minute, 0);
    const UE405live = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), flights.UE405.liftoff_hour, flights.UE405.liftoff_minute, 0);
    const UE407live = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), flights.UE405.liftoff_hour, flights.UE407.liftoff_minute, 0);
    const UE409live = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), flights.UE409.liftoff_hour, flights.UE409.liftoff_minute, 0);
    const UE411live = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), flights.UE411.liftoff_hour, flights.UE411.liftoff_minute, 0);
    const UE413live = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), flights.UE413.liftoff_hour, flights.UE413.liftoff_minute, 0);
    const UE415live = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), flights.UE415.liftoff_hour, flights.UE415.liftoff_minute, 0);
    const UE417live = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), flights.UE417.liftoff_hour, flights.UE417.liftoff_minute, 0);
    const UE419live = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), flights.UE419.liftoff_hour, flights.UE419.liftoff_minute, 0);

    var LY500 = makeMarker(airports.SIA.coord, airports.LYR.coord, aircrafts.AV_Nieida200.speed, small); LY500.setOpacity(0);
    // var UE400 = makeMarker(airports.KNU.coord, airports.SAG.coord, aircrafts.W36.speed, medium); UE400.setOpacity(0);
    var UE403 = makeMarker(airports.SAG.coord, airports.KNU.coord, aircrafts.W36.speed, medium); UE403.setOpacity(0);
    var UE405 = makeMarker(airports.SAG.coord, airports.KNU.coord, aircrafts.W36.speed, medium); UE405.setOpacity(0);
    var UE407 = makeMarker(airports.SAG.coord, airports.KNU.coord, aircrafts.W34.speed, medium); UE407.setOpacity(0);
    var UE409 = makeMarker(airports.SAG.coord, airports.KNU.coord, aircrafts.W36.speed, medium); UE409.setOpacity(0);
    var UE411 = makeMarker(airports.SAG.coord, airports.KNU.coord, aircrafts.W36.speed, medium); UE411.setOpacity(0);
    var UE413 = makeMarker(airports.SAG.coord, airports.KNU.coord, aircrafts.W36.speed, medium); UE413.setOpacity(0);
    var UE415 = makeMarker(airports.SAG.coord, airports.KNU.coord, aircrafts.W36.speed, medium); UE415.setOpacity(0);
    var UE417 = makeMarker(airports.SAG.coord, airports.KNU.coord, aircrafts.W39_B.speed, medium); UE417.setOpacity(0);
    var UE419 = makeMarker(airports.SAG.coord, airports.KNU.coord, aircrafts.W36.speed, medium); UE419.setOpacity(0);
    
    live();
    schedule();

}


