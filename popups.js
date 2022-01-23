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
var GK001popup = flightdetail("GK001", "GK", "Operated by GekLines",aircrafts.W34.image,5,5,flags.Gekdreg,onesky); 