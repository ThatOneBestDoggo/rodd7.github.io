//icons
    // airport classification by:
    //      primary hub of the country
    //      regional hubs
    //      minor airports/bases (if important)

var primaryAirport = L.icon({
    iconUrl: 'resources/greymarker.png',
    iconSize: [15, 15],
    iconAnchor: [7, 15],
    popupAnchor: [-3, -76],
});

var secondaryAirport = L.icon({
    iconUrl: 'resources/redmarker.png',
    iconSize: [15, 15],
    iconAnchor: [7, 15],
    popupAnchor: [-3, -76],
});