const airline = `
{
    "LY": {
        "name": "Layr", 
        "WAAT": "LY", 
        "callsign": "LAYR",
        "image": "https://old.opengeofiction.wiki/images/thumb/2/25/Layr_logo_slogan1.png/1200px-Layr_logo_slogan1.png",
        "alliance": ""
    }
}
`

const flight = `
{
    "LY": {
        "name": "LY500", 
        "WAAT": "LY", 
        "callsign": "LAYR",
        "image": "https://old.opengeofiction.wiki/images/thumb/2/25/Layr_logo_slogan1.png/1200px-Layr_logo_slogan1.png",
        "alliance": ""
    }
}
`

const flights = JSON.parse(flight);
const airlines = JSON.parse(airline);


// var LY500popup = "<p><b class='callname'>" + flights.LY.name + "</b> <img style=\"float:right\" src='" + airlines.LY.image  +"' width='100' > </p> <p style=\"top:40px; font-size:14; margin-bottom:25px;\">" + airlines.LY.name + "<br>"
var LY500popup = "<p>creating invidual flight route data </p>"
