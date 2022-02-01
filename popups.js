var today = new Date();
var now = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), today.getUTCHours(), today.getUTCMinutes(), today.getUTCSeconds());
 
var testingpic = "https://media.discordapp.net/attachments/768854582989422662/912684315534573598/unknown.png"
var pic1 = "https://media.discordapp.net/attachments/768854582989422662/912640127342350356/1599px-Island_Air_AV-Nieida200.jpg";

function zoneText(x){
    if (x >= 0 & x%1 == 0){
        return "+" + x + ":00";
    }
    if (x >= 0 & x%1 != 0){
        var g = Math.round(x%1 * 60);
        return "+" + (x - x%1) + ":" + g;
    }
    if (x < 0 & x%1 == 0){
        return x + ":00";
    }
    if (x < 0 & x%1 != 0){
        var g = Math.round(x%1 * 60);
        return (x - x%1) + ":" + Math.abs(g);
    }
}
function minutes(x){
    if (x < 10){
        return "0" + x;
    }
    return x;
}

function secondsToHms(d) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    
    return ('0' + h).slice(-2) + "hr " + ('0' + m).slice(-2) + "min";
}

function hoursarrival(d){
    d = Number(d);
    var h = Math.floor(d / 3600);
    return h;
}
function minutesarrival(d){
    d = Number(d);
    var m = Math.floor(d % 3600 / 60);
    return m;
}

const flights = JSON.parse(flight);
const airlines = JSON.parse(airline);
const aircrafts = JSON.parse(aircraft);

function flightdetail(flightobject, airlineobject, optcollab, image, fromZone, toZone, flag, allianceimage){
    const schedule = new Date (Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), flights[flightobject].liftoff_hour , flights[flightobject].liftoff_minute, 0));

    var flighthours = schedule.getUTCHours() + hoursarrival(Math.round(duration(getDistanceFromLatLonInKm((airports[flights[flightobject].from_WAAT].coord),(airports[flights[flightobject].to_WAAT].coord)),aircrafts[flights[flightobject].aircraft].cruise)));
    var flightminutes = schedule.getUTCMinutes() + minutesarrival(Math.round(duration(getDistanceFromLatLonInKm((airports[flights[flightobject].from_WAAT].coord),(airports[flights[flightobject].to_WAAT].coord)),aircrafts[flights[flightobject].aircraft].cruise)));
   
    var arrival = flighthours*60*60*1000 + flightminutes*60*1000 + (toZone*60*60*1000);
    var departure = schedule.getUTCHours()*60*60*1000 + schedule.getUTCMinutes()*60*1000 + (fromZone*60*60*1000);
    var updatedArrival = new Date(arrival);
    var updatedDeparture = new Date(departure);

    if (flightminutes >= 60){
        flightminutes = flightminutes%60;
        flighthours+=1;
    }
    if (schedule.getUTCMinutes() >= 60){
        schedule.getUTCMinutes() = schedule.getUTCMinutes()%60;
        schedule.getUTCHours()+=1;
    }

    var datapopup = "<div><div class=\"leaflet-popup-content-flight\"> <div class=\"infoheader\"> <p><b class='callname'>" + flights[flightobject].name + "</b> <img style=\"float:right\" src='" + airlines[airlineobject].image  +"' width='100' > </p> <p style=\"position:absolute; top:30px; left:10px; font-size:14;\">" + airlines[airlineobject].name + "</p> <p style=\"position:absolute; font-style: italic; color: #696969; top:48px; font-size:14;\"> " + optcollab + "</p> </div> <br><br><br> <img class='center' src='" + image +"' width='350'> <br> <table> <tr style=\"height=1px;\"><td class=\"flightcode data\">" + flights[flightobject].from_WAAT + "</td><td class=\"flightcode data\">"+ flights[flightobject].to_WAAT +"</td></tr> <tr height=\"1px\"><td class=\"data\"><p style=\"color:grey; font-size:11;\">(WUT" + zoneText(fromZone) + ")</p></td><td class=\"data\"><p style=\"color:grey; font-size:11;\">(WUT" + zoneText(toZone) + ")</p></td></tr> <tr><td class=\"data\"><b style=\"font-size:13\">" + (airports[flights[flightobject].from_WAAT].city).toUpperCase() + "</b></td><td class=\"data\"><b style=\"font-size:13\">" + (airports[flights[flightobject].to_WAAT].city).toUpperCase() + "</b></td></tr> </table> </div><hr><table><tr><td style=\"text-align:left; padding-left:15px; font-size:15;\">Departure  <b style=\"padding-left: 5px; font-size:15;\">" + updatedDeparture.getUTCHours() + ":" + minutes(updatedDeparture.getUTCMinutes())   + "</b></td><td style=\"text-align:left; font-size:15;\">Arrival  <b style=\"padding-left: 35px; font-size:15;\">" + updatedArrival.getUTCHours() + ":" + minutes(updatedArrival.getUTCMinutes()) + "</b></td></tr><tr><td style=\"text-align:left; padding-left:15px; font-size:15;\">Duration  <b style=\"padding-left: 15px; font-size:15;\">";
    datapopup = datapopup + secondsToHms(Math.round(duration(getDistanceFromLatLonInKm((airports[flights[flightobject].from_WAAT].coord),(airports[flights[flightobject].to_WAAT].coord)),aircrafts[flights[flightobject].aircraft].cruise))) + "</b></td><td style=\"text-align:left; font-size:15;\">Distance <b style=\"padding-left: 20px; font-size:15;\">" + Math.round(getDistanceFromLatLonInKm(airports[flights[flightobject].from_WAAT].coord,airports[flights[flightobject].to_WAAT].coord))  + "km</b></td></tr></table> <br>";
    datapopup = datapopup + " <table> <tr><td colspan=\"2\" style=\"text-align:left; padding-left:15px; padding-bottom:2px; font-size:15; color:black; background-color:#DCDCDC;\"> <b>Aircraft Details </b> </td> </tr> <tr><td colspan=\"2\" style=\"text-align:left; padding-top: 8px; padding-left:15px; font-size:15; color:grey;\"> <b>Aircraft </b>  <span style=\"padding-left: 15px; color:black; font-size:15;\">" + aircrafts[flights[flightobject].aircraft].name + "</span></td> </tr> <tr><td colspan=\"2\" style=\"text-align:left; padding-left:15px; font-size:15; color:grey;\"> <b>Class </b>  <span style=\"padding-left: 28px; font-size:15; color:black;\">" + aircrafts[flights[flightobject].aircraft].class + "</span></td> </tr> <tr><td style=\"text-align:left; color:grey; padding-left:15px; font-size:15;\"><b>Cr. speed </b>  <span style=\"padding-left: 15px; color:black; font-size:15;\">" + aircrafts[flights[flightobject].aircraft].cruise + " km/h</span></td><td style=\"text-align:left; font-size:15; color:grey;\"> <b>Capacity</b>  <span style=\"padding-left: 35px; font-size:15; color:black;\">" + aircrafts[flights[flightobject].aircraft].capacity + "</span></td></tr> <tr><td style=\"text-align:left; color:grey; padding-left:15px; font-size:15;\"><b>Age </b>  <span style=\"padding-left: 55px; color:black; font-size:15;\">" + flights[flightobject].age + "</span></td><td style=\"text-align:left; font-size:15; color:grey;\"> <b>Country Reg. &nbsp </b>" +  flag + "</td></tr> </table> ";
    datapopup = datapopup + " <table> <tr><td colspan=\"2\" style=\"text-align:left; padding-left:15px; padding-bottom:2px; font-size:15; color:black; background-color:#DCDCDC;\"> <b>Airline Details </b> </td> </tr> <tr><td colspan=\"2\" style=\"text-align:left; padding-top: 8px; padding-left:15px; font-size:15; color:grey;\"> <b>Airline </b>  <span style=\"padding-left: 15px; color:black; font-size:15;\">" + airlines[airlineobject].name + "</span></td> </tr> <tr><td style=\"text-align:left; color:grey; padding-left:15px; font-size:15;\"><b>WAAT </b>  <span style=\"padding-left: 19px; color:black; font-size:15;\">" + airlines[airlineobject].WAAT + "</span></td><td style=\"text-align:left; font-size:15; color:grey;\"> <b style=\"padding-left: 62px;\">Callsign</b>  <span style=\"padding-left: 15px; font-size:15; color:black;\">" + (airlines[airlineobject].callsign).toUpperCase() + "</span></td></tr>  </tr> <tr><td colspan=\"2\" style=\"text-align:left; padding-left:15px; font-size:15; color:grey;\"> <b>Alliance </b>  <span style=\"padding-left: 5px; color:black; font-size:15;\">" + airlines[airlineobject].alliance + "&nbsp &nbsp" + allianceimage + "</span></td> </tr> ";
    return datapopup;
}
var UE401popup = flightdetail("UE401", "UE", "", aircrafts.NM90.image, 8, 8, flags.Izaland, onesky);
var UE403popup = flightdetail("UE403", "UE", "", aircrafts.W36.image, 8, 8, flags.Izaland, onesky);
var UE405popup = flightdetail("UE405", "UE", "", aircrafts.W36.image, 8, 8, flags.Izaland, onesky);
var UE407popup = flightdetail("UE407", "UE", "", aircrafts.W34.image, 8, 8, flags.Izaland, onesky);
var UE409popup = flightdetail("UE409", "UE", "", aircrafts.W36.image, 8, 8, flags.Izaland, onesky);
var UE411popup = flightdetail("UE411", "UE", "", aircrafts.W36.image, 8, 8, flags.Izaland, onesky);
var UE413popup = flightdetail("UE413", "UE", "", aircrafts.W36.image, 8, 8, flags.Izaland, onesky);
var UE415popup = flightdetail("UE415", "UE", "", aircrafts.W36.image, 8, 8, flags.Izaland, onesky);
var UE417popup = flightdetail("UE417", "UE", "", aircrafts.W39_B.image, 8, 8, flags.Izaland, onesky);
var UE419popup = flightdetail("UE419", "UE", "", aircrafts.W36.image, 8, 8, flags.Izaland, onesky);
var UE421popup = flightdetail("UE421", "UE", "", aircrafts.W36.image, 8, 8, flags.Izaland, onesky);
var UE400popup = flightdetail("UE400", "UE", "", aircrafts.W39_B.image, 8, 8, flags.Izaland, onesky);
var UE300popup = flightdetail("UE300", "UE", "FR4500",aircrafts.W36.image,8,8,flags.Izaland,onesky); 
var UE301popup = flightdetail("UE301", "UE", "FR4501",aircrafts.W36.image,8,8,flags.Izaland,onesky); 
var UE305popup = flightdetail("UE305", "UE", "FR4505",aircrafts.W36.image,8,8,flags.Izaland,onesky); 
var UE307popup = flightdetail("UE307", "UE", "FR4507",aircrafts.W36.image,8,8,flags.Izaland,onesky); 
var UE100popup = flightdetail("UE100", "UE", "FR4850",aircrafts.W36.image,8,9.5,flags.Izaland,onesky); 
var UE102popup = flightdetail("UE102", "UE", "",aircrafts.W36.image,8,9.5,flags.Izaland,onesky); 
var UE104popup = flightdetail("UE104", "UE", "",aircrafts.W36.image,8,9.5,flags.Izaland,onesky); 
var UE101popup = flightdetail("UE101", "UE", "",aircrafts.W36.image,9.5,8,flags.Izaland,onesky); 
var UE103popup = flightdetail("UE103", "UE", "",aircrafts.W36.image,9.5,8,flags.Izaland,onesky); 
var UE105popup = flightdetail("UE105", "UE", "",aircrafts.W36.image,9.5,8,flags.Izaland,onesky); 
var UE050popup = flightdetail("UE050", "UE", "",aircrafts.W39.image,8,4,flags.Izaland,onesky); 
var UE051popup = flightdetail("UE051", "UE", "",aircrafts.W39.image,4,8,flags.Izaland,onesky); 

var FR001popup = flightdetail("FR001", "FR", "", aircrafts.W39.image, 2, 5, flags.Freedemia, onesky);
var FR002popup = flightdetail("FR002", "FR", "", aircrafts.W39.image, 5, 2, flags.Freedemia, onesky);
var FR015popup = flightdetail("FR015", "FR", "", aircrafts.W36.image, 2, 9, flags.Freedemia, onesky);
var FR017popup = flightdetail("FR017", "FR", "", aircrafts.W36.image, 2, 9, flags.Freedemia, onesky);
var FR019popup = flightdetail("FR019", "FR", "", aircrafts.W36.image, 2, 9, flags.Freedemia, onesky);
var FR016popup = flightdetail("FR016", "FR", "", aircrafts.W36.image, 9, 2, flags.Freedemia, onesky);
var FR018popup = flightdetail("FR018", "FR", "", aircrafts.W36.image, 9, 2, flags.Freedemia, onesky);
var FR020popup = flightdetail("FR020", "FR", "", aircrafts.W36.image, 9, 2, flags.Freedemia, onesky);

var LT001popup = flightdetail("LT001", "LT", "", aircrafts.Contair_D20a.image, 1, 2, flags.Barzona, worldstar);
var LT003popup = flightdetail("LT003", "LT", "", aircrafts.Contair_D20a.image, 1, 2, flags.Barzona, worldstar);
var LT005popup = flightdetail("LT005", "LT", "", aircrafts.Contair_D20a.image, 1, 2, flags.Barzona, worldstar);
var LT007popup = flightdetail("LT007", "LT", "", aircrafts.Contair_D20a.image, 1, 2, flags.Barzona, worldstar);
var LT009popup = flightdetail("LT009", "LT", "", aircrafts.Contair_D20a.image, 1, 2, flags.Barzona, worldstar);
var LT011popup = flightdetail("LT011", "LT", "", aircrafts.Contair_D20a.image, 1, 2, flags.Barzona, worldstar);
var LT013popup = flightdetail("LT013", "LT", "", aircrafts.Contair_D20a.image, 1, 2, flags.Barzona, worldstar);

var SA0001popup = flightdetail("SA0001", "SA", "",aircrafts.DG_80.image,9,10,flags.FSA,fourcorners); 
var IC001popup = flightdetail("IC001", "IC", "",aircrafts.DG_70.image,6,5,flags.Iscu,onesky); 
var AL714popup = flightdetail("AL714", "AL", "",aircrafts.W36.image,1,5,flags.Allendea,""); 
var UE204popup = flightdetail("UE204", "UE", "",aircrafts.W36.image,8,5,flags.Izaland,onesky); 
var UE205popup = flightdetail("UE205", "UE", "",aircrafts.W36.image,5,8,flags.Izaland,onesky); 
var UE070popup = flightdetail("UE070", "UE", "",aircrafts.W34.image,8,8,flags.Izaland,onesky); 
var UE071popup = flightdetail("UE071", "UE", "",aircrafts.W34.image,8,8,flags.Izaland,onesky); 
var UE072popup = flightdetail("UE072", "UE", "FR5250",aircrafts.W34.image,8,8,flags.Izaland,onesky); 
var UE073popup = flightdetail("UE073", "UE", "FR5251",aircrafts.W34.image,8,8,flags.Izaland,onesky); 
var UE074popup = flightdetail("UE074", "UE", "FR5252",aircrafts.W34.image,8,8,flags.Izaland,onesky); 
var UE075popup = flightdetail("UE075", "UE", "FR5253",aircrafts.W34.image,8,8,flags.Izaland,onesky); 
var UE076popup = flightdetail("UE076", "UE", "",aircrafts.W36.image,8,8,flags.Izaland,onesky); 
var UE077popup = flightdetail("UE077", "UE", "",aircrafts.W36.image,8,8,flags.Izaland,onesky); 
var UE064popup = flightdetail("UE064", "UE", "",aircrafts.W36.image,8,11.5,flags.Izaland,onesky); 
var UE065popup = flightdetail("UE065", "UE", "",aircrafts.W36.image,11.5,8,flags.Izaland,onesky); 
var UE004popup = flightdetail("UE004", "UE", "",aircrafts.W39.image,8,10,flags.Izaland,onesky); 
var UE005popup = flightdetail("UE005", "UE", "",aircrafts.W39.image,10,8,flags.Izaland,onesky); 
var UE106popup = flightdetail("UE106", "UE", "FR5106",aircrafts.W34.image,8,10,flags.Izaland,onesky); 
var UE108popup = flightdetail("UE108", "UE", "FR5108",aircrafts.W34.image,8,10,flags.Izaland,onesky); 
var UE107popup = flightdetail("UE107", "UE", "FR5107",aircrafts.W34.image,10,8,flags.Izaland,onesky); 
var UE109popup = flightdetail("UE109", "UE", "FR5109",aircrafts.W34.image,10,8,flags.Izaland,onesky); 
var UE002popup = flightdetail("UE002", "UE", "",aircrafts.W36.image,8,9,flags.Izaland,onesky); 
var UE003popup = flightdetail("UE003", "UE", "",aircrafts.W36.image,9,8,flags.Izaland,onesky); 
var UE328popup = flightdetail("UE328", "UE", "",aircrafts.W34.image,8,8,flags.Izaland,onesky); 
var UE330popup = flightdetail("UE330", "UE", "",aircrafts.W34.image,8,8,flags.Izaland,onesky); 
var UE332popup = flightdetail("UE332", "UE", "",aircrafts.W34.image,8,8,flags.Izaland,onesky); 
var UE334popup = flightdetail("UE334", "UE", "",aircrafts.W34.image,8,8,flags.Izaland,onesky); 
var UE329popup = flightdetail("UE329", "UE", "",aircrafts.W34.image,8,8,flags.Izaland,onesky); 
var UE331popup = flightdetail("UE331", "UE", "",aircrafts.W34.image,8,8,flags.Izaland,onesky); 
var UE333popup = flightdetail("UE333", "UE", "",aircrafts.W34.image,8,8,flags.Izaland,onesky); 
var UE335popup = flightdetail("UE335", "UE", "",aircrafts.W34.image,8,8,flags.Izaland,onesky); 
var LY617popup = flightdetail("LY617", "LY", "",aircrafts.W34.image,3,0,flags.Layr,); 
var LY023popup = flightdetail("LY023", "LY", "",aircrafts.W36.image,3,5,flags.Layr,); 
var GK001popup = flightdetail("GK001", "GK", "Operated by GekLines",aircrafts.Contair_B30b.image,5,5,flags.Gekdreg,onesky); 
var IZ200popup = flightdetail("IZ200", "IZ", "",aircrafts.DG_80.image,8,9,flags.Izaland,worldstar); 
var IZ201popup = flightdetail("IZ201", "IZ", "",aircrafts.DG_80.image,9,8,flags.Izaland,worldstar); 
var IZ300popup = flightdetail("IZ300", "IZ", "",aircrafts.DG_80.image,8,5,flags.Izaland,worldstar); 
var IZ302popup = flightdetail("IZ302", "IZ", "",aircrafts.DG_80.image,8,5,flags.Izaland,worldstar); 
var IZ301popup = flightdetail("IZ301", "IZ", "",aircrafts.DG_80.image,5,8,flags.Izaland,worldstar); 
var IZ303popup = flightdetail("IZ303", "IZ", "",aircrafts.DG_80.image,5,8,flags.Izaland,worldstar); 
var IZ304popup = flightdetail("IZ304", "IZ", "",aircrafts.W36.image,8,5,flags.Izaland,worldstar); 
var IZ305popup = flightdetail("IZ305", "IZ", "",aircrafts.W36.image,5,8,flags.Izaland,worldstar); 
var IZ306popup = flightdetail("IZ306", "IZ", "",aircrafts.W34.image,8,6,flags.Izaland,worldstar); 
var IZ307popup = flightdetail("IZ307", "IZ", "",aircrafts.W34.image,6,8,flags.Izaland,worldstar); 
var IZ240popup = flightdetail("IZ240", "IZ", "",aircrafts.W39.image,8,2.5,flags.Izaland,onesky); 
var IZ241popup = flightdetail("IZ241", "IZ", "",aircrafts.W39.image,2.5,8,flags.Izaland,onesky); 
var PV100popup = flightdetail("PV100", "PV", "",aircrafts.W34.image,3,4,flags.Plevia,onesky); 
var PV102popup = flightdetail("PV102", "PV", "",aircrafts.W34.image,3,4,flags.Plevia,onesky); 
var PV104popup = flightdetail("PV104", "PV", "",aircrafts.W34.image,3,4,flags.Plevia,onesky); 
var PV101popup = flightdetail("PV101", "PV", "",aircrafts.W34.image,4,3,flags.Plevia,onesky); 
var PV103popup = flightdetail("PV103", "PV", "",aircrafts.W34.image,4,3,flags.Plevia,onesky); 
var PV105popup = flightdetail("PV105", "PV", "",aircrafts.W34.image,4,3,flags.Plevia,onesky); 
var PV180popup = flightdetail("PV180", "PV", "",aircrafts.W36.image,3,5,flags.Plevia,onesky); 
var PV182popup = flightdetail("PV182", "PV", "",aircrafts.W36.image,3,5,flags.Plevia,onesky); 
var PV181popup = flightdetail("PV181", "PV", "",aircrafts.W36.image,5,3,flags.Plevia,onesky); 
var PV183popup = flightdetail("PV183", "PV", "",aircrafts.W36.image,5,3,flags.Plevia,onesky); 
var PV190popup = flightdetail("PV190", "PV", "FR2190",aircrafts.DG_86.image,3,2,flags.Plevia,onesky); 
var PV191popup = flightdetail("PV191", "PV", "FR2191",aircrafts.DG_86.image,2,3,flags.Plevia,onesky); 
var FR003popup = flightdetail("FR003", "FR", "",aircrafts.W39.image,2,5,flags.Freedemia,onesky); 
var FR005popup = flightdetail("FR005", "FR", "",aircrafts.W39.image,2,5,flags.Freedemia,onesky); 
var FR004popup = flightdetail("FR004", "FR", "",aircrafts.W39.image,5,2,flags.Freedemia,onesky); 
var FR006popup = flightdetail("FR006", "FR", "",aircrafts.W39.image,5,2,flags.Freedemia,onesky); 
var LY035popup = flightdetail("LY035", "LY", "",aircrafts.W36.image,9,3,flags.Layr,""); 
var LY034popup = flightdetail("LY034", "LY", "",aircrafts.W36.image,3,9,flags.Layr,""); 
var LY244popup = flightdetail("LY244", "LY", "",aircrafts.W36.image,3,2,flags.Layr,""); 
var LY523popup = flightdetail("LY523", "LY", "",aircrafts.W39.image,4,3,flags.Layr,""); 
var LY522popup = flightdetail("LY522", "LY", "",aircrafts.W39.image,3,4,flags.Layr,""); 
var LY888popup = flightdetail("LY888", "LY", "",aircrafts.W36.image,5,9.5,flags.Layr,""); 
var LY238popup = flightdetail("LY238", "LY", "",aircrafts.W34.image,3,3,flags.Layr,""); 
var LY236popup = flightdetail("LY236", "LY", "",aircrafts.W36.image,3,5,flags.Layr,""); 
var LY450popup = flightdetail("LY450", "LY", "",aircrafts.W36.image,3,4,flags.Layr,""); 
var LY044popup = flightdetail("LY044", "LY", "",aircrafts.W36.image,5,8,flags.Layr,""); 
var LY117popup = flightdetail("LY117", "LY", "",aircrafts.W34.image,3,2,flags.Layr,""); 
var LY117popup = flightdetail("LY117", "LY", "",aircrafts.W36.image,3,1,flags.Layr,""); 
var LY051popup = flightdetail("LY051", "LY", "",aircrafts.W36.image,3,3,flags.Layr,""); 
var UE390popup = flightdetail("UE390", "UE", "",aircrafts.NM70.image,8,8,flags.Izaland,onesky); 
var UE391popup = flightdetail("UE391", "UE", "",aircrafts.NM70.image,8,8,flags.Izaland,onesky); 
var UE392popup = flightdetail("UE392", "UE", "",aircrafts.NM70.image,8,8,flags.Izaland,onesky); 
var UE393popup = flightdetail("UE393", "UE", "",aircrafts.NM70.image,8,8,flags.Izaland,onesky); 
var UE394popup = flightdetail("UE394", "UE", "",aircrafts.NM70.image,8,8,flags.Izaland,onesky); 
var UE395popup = flightdetail("UE395", "UE", "",aircrafts.NM70.image,8,8,flags.Izaland,onesky); 
var UE450popup = flightdetail("UE450", "UE", "",aircrafts.NM90.image,8,8,flags.Izaland,onesky); 
var UE451popup = flightdetail("UE451", "UE", "",aircrafts.NM90.image,8,8,flags.Izaland,onesky); 
var UE452popup = flightdetail("UE452", "UE", "",aircrafts.NM90.image,8,8,flags.Izaland,onesky); 
var UE453popup = flightdetail("UE453", "UE", "",aircrafts.NM90.image,8,8,flags.Izaland,onesky); 
var UE454popup = flightdetail("UE454", "UE", "",aircrafts.NM90.image,8,8,flags.Izaland,onesky); 
var UE455popup = flightdetail("UE455", "UE", "",aircrafts.NM90.image,8,8,flags.Izaland,onesky); 
var UE456popup = flightdetail("UE456", "UE", "",aircrafts.NM90.image,8,8,flags.Izaland,onesky); 
var UE457popup = flightdetail("UE457", "UE", "",aircrafts.NM90.image,8,8,flags.Izaland,onesky); 
var UE458popup = flightdetail("UE458", "UE", "",aircrafts.NM90.image,8,8,flags.Izaland,onesky); 
var UE459popup = flightdetail("UE459", "UE", "",aircrafts.NM90.image,8,8,flags.Izaland,onesky); 
var IZ500popup = flightdetail("IZ500", "IZ", "",aircrafts.W34.image,8,9,flags.Izaland,worldstar); 
var IZ501popup = flightdetail("IZ501", "IZ", "",aircrafts.W34.image,9,8,flags.Izaland,worldstar); 
var IZ502popup = flightdetail("IZ502", "IZ", "",aircrafts.W34.image,8,9,flags.Izaland,worldstar); 
var IZ503popup = flightdetail("IZ503", "IZ", "",aircrafts.W34.image,9,8,flags.Izaland,worldstar); 
var IZ320popup = flightdetail("IZ320", "IZ", "",aircrafts.W39_B.image,8,4,flags.Izaland,worldstar); 
var IZ321popup = flightdetail("IZ321", "IZ", "",aircrafts.W39.image,4,8,flags.Izaland,worldstar); 
var IZ260popup = flightdetail("IZ260", "IZ", "",aircrafts.W34.image,8,5,flags.Izaland,worldstar); 
var IZ261popup = flightdetail("IZ261", "IZ", "",aircrafts.W34.image,5,8,flags.Izaland,worldstar); 
var IZ264popup = flightdetail("IZ264", "IZ", "",aircrafts.W36.image,8,2,flags.Izaland,worldstar); 
var IZ265popup = flightdetail("IZ265", "IZ", "",aircrafts.W36.image,2,8,flags.Izaland,worldstar); 
var IZ202popup = flightdetail("IZ202", "IZ", "",aircrafts.W39.image,8,10,flags.Izaland,worldstar); 
var IZ203popup = flightdetail("IZ203", "IZ", "",aircrafts.W39.image,10,8,flags.Izaland,worldstar); 
var IZ204popup = flightdetail("IZ204", "IZ", "",aircrafts.W39.image,8,9,flags.Izaland,worldstar); 
var IZ205popup = flightdetail("IZ205", "IZ", "",aircrafts.W39.image,9,8,flags.Izaland,worldstar); 
var IZ206popup = flightdetail("IZ206", "IZ", "",aircrafts.W36.image,8,10,flags.Izaland,worldstar); 
var IZ207popup = flightdetail("IZ207", "IZ", "",aircrafts.W36.image,10,8,flags.Izaland,worldstar); 
var IZ208popup = flightdetail("IZ208", "IZ", "",aircrafts.W36.image,8,11,flags.Izaland,worldstar); 
var IZ210popup = flightdetail("IZ210", "IZ", "",aircrafts.W36.image,8,11,flags.Izaland,worldstar); 
var IZ209popup = flightdetail("IZ209", "IZ", "",aircrafts.W36.image,11,8,flags.Izaland,worldstar); 
var IZ211popup = flightdetail("IZ211", "IZ", "",aircrafts.W36.image,11,8,flags.Izaland,worldstar); 
var IZ224popup = flightdetail("IZ224", "IZ", "",aircrafts.W39.image,8,4,flags.Izaland,worldstar); 
var IZ225popup = flightdetail("IZ225", "IZ", "",aircrafts.W39.image,4,8,flags.Izaland,worldstar); 
var UE080popup = flightdetail("UE080", "UE", "",aircrafts.W39_B.image,8,2,flags.Izaland,onesky); 
var UE081popup = flightdetail("UE081", "UE", "",aircrafts.W39_B.image,2,8,flags.Izaland,onesky); 
var UE052popup = flightdetail("UE052", "UE", "",aircrafts.W34.image,8,5,flags.Izaland,onesky); 
var UE053popup = flightdetail("UE053", "UE", "",aircrafts.W34.image,5,8,flags.Izaland,onesky); 
var UE054popup = flightdetail("UE054", "UE", "",aircrafts.W34.image,8,8,flags.Izaland,onesky); 
var UE055popup = flightdetail("UE055", "UE", "",aircrafts.W34.image,8,8,flags.Izaland,onesky); 
var UE200popup = flightdetail("UE200", "UE", "",aircrafts.W39.image,8,5,flags.Izaland,onesky); 
var UE202popup = flightdetail("UE202", "UE", "",aircrafts.W34.image,8,5,flags.Izaland,onesky); 
var UE201popup = flightdetail("UE201", "UE", "",aircrafts.W39.image,5,8,flags.Izaland,onesky); 
var UE203popup = flightdetail("UE203", "UE", "",aircrafts.W39.image,5,8,flags.Izaland,onesky);
var SA0002popup = flightdetail("SA0002", "SA", "",aircrafts.Contair_D20a.image,10,9,flags.FSA,fourcorners); 
var SA0003popup = flightdetail("SA0003", "SA", "",aircrafts.Contair_D20a.image,9,10,flags.FSA,fourcorners); 
var SA0004popup = flightdetail("SA0004", "SA", "",aircrafts.Contair_D20a.image,10,9,flags.FSA,fourcorners); 
var SA0005popup = flightdetail("SA0005", "SA", "",aircrafts.Contair_D20a.image,9,10,flags.FSA,fourcorners); 
var SA0006popup = flightdetail("SA0006", "SA", "",aircrafts.Contair_D20a.image,10,9,flags.FSA,fourcorners); 
var SA0007popup = flightdetail("SA0007", "SA", "",aircrafts.Contair_D20a.image,9,10,flags.FSA,fourcorners); 
var SA0008popup = flightdetail("SA0008", "SA", "",aircrafts.DG_80.image,10,9,flags.FSA,fourcorners); 
var SA0009popup = flightdetail("SA0009", "SA", "",aircrafts.Contair_D20a.image,9,10,flags.FSA,fourcorners); 
var SA0010popup = flightdetail("SA0010", "SA", "",aircrafts.Contair_D20a.image,10,9,flags.FSA,fourcorners); 
var SA0011popup = flightdetail("SA0011", "SA", "",aircrafts.Contair_D20a.image,9,10,flags.FSA,fourcorners); 
var SA0012popup = flightdetail("SA0012", "SA", "",aircrafts.Contair_D20a.image,10,9,flags.FSA,fourcorners); 
var SA0013popup = flightdetail("SA0013", "SA", "",aircrafts.Contair_D20a.image,9,10,flags.FSA,fourcorners); 
var SA0014popup = flightdetail("SA0014", "SA", "",aircrafts.Contair_D20a.image,10,9,flags.FSA,fourcorners); 
var SA0015popup = flightdetail("SA0015", "SA", "",aircrafts.Contair_D20a.image,9,10,flags.FSA,fourcorners); 
var SA0016popup = flightdetail("SA0016", "SA", "",aircrafts.Contair_D20a.image,10,9,flags.FSA,fourcorners); 
var SA0017popup = flightdetail("SA0017", "SA", "",aircrafts.Contair_D20a.image,9,10,flags.FSA,fourcorners); 
var SA0018popup = flightdetail("SA0018", "SA", "",aircrafts.Contair_D20a.image,10,9,flags.FSA,fourcorners); 
var SA0019popup = flightdetail("SA0019", "SA", "",aircrafts.Contair_D20a.image,9,10,flags.FSA,fourcorners); 
var SA0020popup = flightdetail("SA0020", "SA", "",aircrafts.Contair_D20a.image,10,9,flags.FSA,fourcorners); 
var SA0021popup = flightdetail("SA0021", "SA", "",aircrafts.Contair_D20a.image,9,10,flags.FSA,fourcorners); 
var SA0022popup = flightdetail("SA0022", "SA", "",aircrafts.Contair_D20a.image,10,9,flags.FSA,fourcorners); 
var SA0023popup = flightdetail("SA0023", "SA", "",aircrafts.Contair_D20a.image,9,10,flags.FSA,fourcorners); 
var SA0024popup = flightdetail("SA0024", "SA", "",aircrafts.Contair_D20a.image,10,9,flags.FSA,fourcorners); 
var SA0025popup = flightdetail("SA0025", "SA", "",aircrafts.Contair_D20a.image,9,10,flags.FSA,fourcorners); 
var SA0026popup = flightdetail("SA0026", "SA", "",aircrafts.Contair_D20a.image,10,9,flags.FSA,fourcorners); 
var SA0027popup = flightdetail("SA0027", "SA", "",aircrafts.Contair_D20a.image,9,10,flags.FSA,fourcorners); 
var SA0028popup = flightdetail("SA0028", "SA", "",aircrafts.Contair_D20a.image,10,9,flags.FSA,fourcorners); 
var SA0029popup = flightdetail("SA0029", "SA", "",aircrafts.Contair_D20a.image,9,10,flags.FSA,fourcorners); 
var SA0030popup = flightdetail("SA0030", "SA", "",aircrafts.Contair_D20a.image,10,9,flags.FSA,fourcorners); 
var SA0031popup = flightdetail("SA0031", "SA", "",aircrafts.Contair_D20a.image,9,10,flags.FSA,fourcorners); 
var SA0032popup = flightdetail("SA0032", "SA", "",aircrafts.Contair_D20a.image,10,9,flags.FSA,fourcorners); 
var SA0033popup = flightdetail("SA0033", "SA", "",aircrafts.Contair_D20a.image,9,10,flags.FSA,fourcorners); 
var SA0034popup = flightdetail("SA0034", "SA", "",aircrafts.Contair_D20a.image,10,9,flags.FSA,fourcorners); 
var SA0035popup = flightdetail("SA0035", "SA", "",aircrafts.Contair_D20a.image,9,10,flags.FSA,fourcorners); 
var SA0036popup = flightdetail("SA0036", "SA", "",aircrafts.Contair_D20a.image,10,9,flags.FSA,fourcorners); 
var SA0037popup = flightdetail("SA0037", "SA", "",aircrafts.W39.image,9,2,flags.FSA,fourcorners); 
var SA0038popup = flightdetail("SA0038", "SA", "",aircrafts.W39.image,2,9,flags.FSA,fourcorners); 
var SA0039popup = flightdetail("SA0039", "SA", "",aircrafts.DG_86.image,9,5,flags.FSA,fourcorners); 
var SA0040popup = flightdetail("SA0040", "SA", "",aircrafts.DG_86.image,5,9,flags.FSA,fourcorners); 
var SA0041popup = flightdetail("SA0041", "SA", "",aircrafts.DG_86.image,9,5,flags.FSA,fourcorners); 
var SA0042popup = flightdetail("SA0042", "SA", "",aircrafts.DG_86.image,5,9,flags.FSA,fourcorners); 
var SA0043popup = flightdetail("SA0043", "SA", "",aircrafts.DG_80.image,9,4,flags.FSA,fourcorners); 
var SA0044popup = flightdetail("SA0044", "SA", "",aircrafts.DG_80.image,4,9,flags.FSA,fourcorners); 
var SA0045popup = flightdetail("SA0045", "SA", "",aircrafts.W39.image,9,-10,flags.FSA,fourcorners); 
var SA0046popup = flightdetail("SA0046", "SA", "",aircrafts.W39.image,-10,9,flags.FSA,fourcorners); 
var SA0050popup = flightdetail("SA0050", "SA", "",aircrafts.DG_70.image,10,9,flags.FSA,fourcorners); 
var SA0051popup = flightdetail("SA0051", "SA", "",aircrafts.DG_70.image,9,10,flags.FSA,fourcorners); 
var SA0052popup = flightdetail("SA0052", "SA", "",aircrafts.DG_70.image,10,9,flags.FSA,fourcorners); 
var SA0053popup = flightdetail("SA0053", "SA", "",aircrafts.DG_70.image,9,10,flags.FSA,fourcorners); 
var SA0054popup = flightdetail("SA0054", "SA", "",aircrafts.DG_70.image,10,9,flags.FSA,fourcorners); 
var SA0055popup = flightdetail("SA0055", "SA", "",aircrafts.DG_70.image,9,10,flags.FSA,fourcorners); 
var SA0056popup = flightdetail("SA0056", "SA", "",aircrafts.DG_70.image,10,9,flags.FSA,fourcorners); 
var SA0057popup = flightdetail("SA0057", "SA", "",aircrafts.DG_70.image,9,10,flags.FSA,fourcorners); 
var SA0058popup = flightdetail("SA0058", "SA", "",aircrafts.DG_70.image,10,9,flags.FSA,fourcorners); 
var SA0059popup = flightdetail("SA0059", "SA", "",aircrafts.DG_70.image,9,10,flags.FSA,fourcorners); 
var SA0060popup = flightdetail("SA0060", "SA", "",aircrafts.Contair_D20a.image,9.5,9,flags.FSA,fourcorners); 
var SA0061popup = flightdetail("SA0061", "SA", "",aircrafts.Contair_D20a.image,9,9.5,flags.FSA,fourcorners); 
var SA0062popup = flightdetail("SA0062", "SA", "",aircrafts.Contair_D20a.image,9.5,9,flags.FSA,fourcorners); 
var SA0063popup = flightdetail("SA0063", "SA", "",aircrafts.Contair_D20a.image,9,9.5,flags.FSA,fourcorners); 
var SA0064popup = flightdetail("SA0064", "SA", "",aircrafts.Contair_D20a.image,9.5,9,flags.FSA,fourcorners); 
var SA0065popup = flightdetail("SA0065", "SA", "",aircrafts.Contair_D20a.image,9,9.5,flags.FSA,fourcorners); 
var SA0066popup = flightdetail("SA0066", "SA", "",aircrafts.Contair_D20a.image,9.5,9,flags.FSA,fourcorners); 
var SA0067popup = flightdetail("SA0067", "SA", "",aircrafts.Contair_D20a.image,9,9.5,flags.FSA,fourcorners); 
var SA0068popup = flightdetail("SA0068", "SA", "",aircrafts.Contair_D20a.image,9.5,9,flags.FSA,fourcorners); 
var SA0069popup = flightdetail("SA0069", "SA", "",aircrafts.Contair_D20a.image,9,9.5,flags.FSA,fourcorners); 
var SA0070popup = flightdetail("SA0070", "SA", "",aircrafts.Contair_D20a.image,9,9,flags.FSA,fourcorners); 
var SA0071popup = flightdetail("SA0071", "SA", "",aircrafts.Contair_D20a.image,9,9,flags.FSA,fourcorners); 
var SA0072popup = flightdetail("SA0072", "SA", "",aircrafts.Contair_D20a.image,9,9,flags.FSA,fourcorners); 
var SA0073popup = flightdetail("SA0073", "SA", "",aircrafts.Contair_D20a.image,9,9,flags.FSA,fourcorners); 
var SA0074popup = flightdetail("SA0074", "SA", "",aircrafts.Contair_D20a.image,9,9,flags.FSA,fourcorners); 
var SA0075popup = flightdetail("SA0075", "SA", "",aircrafts.Contair_D20a.image,9,9,flags.FSA,fourcorners); 
var SA0076popup = flightdetail("SA0076", "SA", "",aircrafts.Contair_D20a.image,9,9,flags.FSA,fourcorners); 
var SA0077popup = flightdetail("SA0077", "SA", "",aircrafts.Contair_D20a.image,9,9,flags.FSA,fourcorners); 
var SA0078popup = flightdetail("SA0078", "SA", "",aircrafts.Contair_D20a.image,9,9,flags.FSA,fourcorners); 
var SA0079popup = flightdetail("SA0079", "SA", "",aircrafts.Contair_D20a.image,9,9,flags.FSA,fourcorners); 
var SA0137popup = flightdetail("SA0137", "SA", "",aircrafts.DG_70.image,9,11.5,flags.FSA,fourcorners); 
var SA0138popup = flightdetail("SA0138", "SA", "",aircrafts.DG_70.image,11.5,9,flags.FSA,fourcorners); 
var SA0139popup = flightdetail("SA0139", "SA", "",aircrafts.Contair_D20a.image,9,9,flags.FSA,fourcorners); 
var SA0140popup = flightdetail("SA0140", "SA", "",aircrafts.Contair_D20a.image,9,9,flags.FSA,fourcorners); 
var SA0141popup = flightdetail("SA0141", "SA", "",aircrafts.Contair_D20a.image,9,9,flags.FSA,fourcorners); 
var SA0142popup = flightdetail("SA0142", "SA", "",aircrafts.Contair_D20a.image,9,9,flags.FSA,fourcorners); 
var FS001popup = flightdetail("FS001", "FS", "",aircrafts.Contair_D20a.image,9,9,flags.FSA,worldstar); 
var FS003popup = flightdetail("FS003", "FS", "",aircrafts.Contair_D20a.image,9,9,flags.FSA,worldstar); 
var FS005popup = flightdetail("FS005", "FS", "",aircrafts.Contair_D20a.image,9,9,flags.FSA,worldstar); 
var FS007popup = flightdetail("FS007", "FS", "",aircrafts.Contair_D20a.image,9,9,flags.FSA,worldstar); 
var FS009popup = flightdetail("FS009", "FS", "",aircrafts.Contair_D20a.image,9,9,flags.FSA,worldstar); 
var FS011popup = flightdetail("FS011", "FS", "",aircrafts.Contair_D20a.image,9,9,flags.FSA,worldstar); 
var FS002popup = flightdetail("FS002", "FS", "",aircrafts.Contair_D20a.image,9,9,flags.FSA,worldstar); 
var FS004popup = flightdetail("FS004", "FS", "",aircrafts.Contair_D20a.image,9,9,flags.FSA,worldstar); 
var FS006popup = flightdetail("FS006", "FS", "",aircrafts.Contair_D20a.image,9,9,flags.FSA,worldstar); 
var FS008popup = flightdetail("FS008", "FS", "",aircrafts.Contair_D20a.image,9,9,flags.FSA,worldstar); 
var FS010popup = flightdetail("FS010", "FS", "",aircrafts.Contair_D20a.image,9,9,flags.FSA,worldstar); 
var FS012popup = flightdetail("FS012", "FS", "",aircrafts.Contair_D20a.image,9,9,flags.FSA,worldstar); 
var PV430popup = flightdetail("PV430", "PV", "",aircrafts.Contair_D20a.image,3,3,flags.Plevia,onesky); 
var PV431popup = flightdetail("PV431", "PV", "",aircrafts.Contair_D20a.image,3,3,flags.Plevia,onesky); 
var PV432popup = flightdetail("PV432", "PV", "",aircrafts.Contair_D20a.image,3,3,flags.Plevia,onesky); 
var PV433popup = flightdetail("PV433", "PV", "",aircrafts.Contair_D20a.image,3,3,flags.Plevia,onesky); 
var PV434popup = flightdetail("PV434", "PV", "",aircrafts.Contair_D20a.image,3,3,flags.Plevia,onesky); 
var PV435popup = flightdetail("PV435", "PV", "",aircrafts.Contair_D20a.image,3,3,flags.Plevia,onesky); 
var PV436popup = flightdetail("PV436", "PV", "",aircrafts.Contair_D20a.image,3,3,flags.Plevia,onesky); 
var PV437popup = flightdetail("PV437", "PV", "",aircrafts.Contair_D20a.image,3,3,flags.Plevia,onesky); 
var PV108popup = flightdetail("PV108", "PV", "",aircrafts.W34.image,3,2,flags.Plevia,onesky); 
var PV109popup = flightdetail("PV109", "PV", "",aircrafts.W34.image,2,3,flags.Plevia,onesky); 
var PV110popup = flightdetail("PV110", "PV", "",aircrafts.W34.image,3,2,flags.Plevia,onesky); 
var PV111popup = flightdetail("PV111", "PV", "",aircrafts.W34.image,2,3,flags.Plevia,onesky); 
var PV112popup = flightdetail("PV112", "PV", "",aircrafts.W34.image,3,5,flags.Plevia,onesky); 
var PV113popup = flightdetail("PV113", "PV", "",aircrafts.W34.image,5,3,flags.Plevia,onesky); 
var PV114popup = flightdetail("PV114", "PV", "",aircrafts.W34.image,3,5,flags.Plevia,onesky); 
var PV115popup = flightdetail("PV115", "PV", "",aircrafts.W34.image,5,3,flags.Plevia,onesky); 
var PV116popup = flightdetail("PV116", "PV", "",aircrafts.W34.image,3,5,flags.Plevia,onesky); 
var PV117popup = flightdetail("PV117", "PV", "",aircrafts.W34.image,5,3,flags.Plevia,onesky); 
var PV130popup = flightdetail("PV130", "PV", "",aircrafts.DG_80.image,3,9.5,flags.Plevia,onesky); 
var PV131popup = flightdetail("PV131", "PV", "",aircrafts.DG_80.image,9.5,3,flags.Plevia,onesky); 
var PV132popup = flightdetail("PV132", "PV", "UE5632",aircrafts.W36.image,3,8,flags.Plevia,onesky); 
var PV134popup = flightdetail("PV134", "PV", "UE5634",aircrafts.W36.image,3,8,flags.Plevia,onesky); 
var PV133popup = flightdetail("PV133", "PV", "UE5633",aircrafts.W36.image,8,3,flags.Plevia,onesky); 
var PV135popup = flightdetail("PV135", "PV", "UE5635",aircrafts.W36.image,8,3,flags.Plevia,onesky); 
var PV180popup = flightdetail("PV180", "PV", "",aircrafts.DG_86.image,3,9,flags.Plevia,onesky); 
var PV181popup = flightdetail("PV181", "PV", "",aircrafts.DG_86.image,9,3,flags.Plevia,onesky); 
var PV124popup = flightdetail("PV124", "PV", "",aircrafts.W34.image,3,2.5,flags.Plevia,onesky); 
var PV126popup = flightdetail("PV126", "PV", "",aircrafts.W34.image,3,2.5,flags.Plevia,onesky); 
var PV125popup = flightdetail("PV125", "PV", "",aircrafts.W34.image,2.5,3,flags.Plevia,onesky); 
var PV127popup = flightdetail("PV127", "PV", "",aircrafts.W34.image,2.5,3,flags.Plevia,onesky); 
var PV129popup = flightdetail("PV129", "PV", "",aircrafts.W34.image,2.5,3,flags.FSA,onesky); 
var PV128popup = flightdetail("PV128", "PV", "",aircrafts.W34.image,3,2.5,flags.Plevia,onesky); 
var DS001popup = flightdetail("DS001", "DS", "",aircrafts.LC_13.image,4,4,flags.Kofuku,""); 
var DS002popup = flightdetail("DS002", "DS", "",aircrafts.LC_13.image,4,4,flags.Kofuku,""); 
var DS101popup = flightdetail("DS101", "DS", "",aircrafts.W39.image,4,4,flags.Kofuku,""); 
var DS102popup = flightdetail("DS102", "DS", "",aircrafts.W39.image,4,4,flags.Kofuku,""); 
var DS103popup = flightdetail("DS103", "DS", "",aircrafts.W39.image,4,4,flags.Kofuku,""); 
var DS104popup = flightdetail("DS104", "DS", "",aircrafts.W39.image,4,4,flags.Kofuku,""); 
var DS105popup = flightdetail("DS105", "DS", "",aircrafts.W34.image,4,4,flags.Kofuku,""); 
var DS106popup = flightdetail("DS106", "DS", "",aircrafts.W34.image,4,4,flags.Kofuku,""); 
var DS107popup = flightdetail("DS107", "DS", "",aircrafts.W34.image,4,4,flags.Kofuku,""); 
var DS108popup = flightdetail("DS108", "DS", "",aircrafts.W34.image,4,4,flags.Kofuku,""); 
var DS109popup = flightdetail("DS109", "DS", "",aircrafts.DG_86.image,4,3,flags.Kofuku,""); 
var DS110popup = flightdetail("DS110", "DS", "",aircrafts.DG_86.image,3,4,flags.Kofuku,""); 
var DS112popup = flightdetail("DS112", "DS", "",aircrafts.W39.image,4,5,flags.Kofuku,""); 
var DS113popup = flightdetail("DS113", "DS", "",aircrafts.W39.image,5,4,flags.Kofuku,""); 
var DS114popup = flightdetail("DS114", "DS", "",aircrafts.LC_13.image,4,3,flags.Kofuku,""); 
var DS115popup = flightdetail("DS115", "DS", "",aircrafts.LC_13.image,3,0,flags.Kofuku,""); 
