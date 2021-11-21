//icons
    // airport classification by:
    //      primary hub of the country
    //      regional hubs
    //      minor airports/bases (if important)

var primaryAirport = L.icon({
    iconUrl: 'resources/redmarker.png',
    iconSize: [14, 14],
    iconAnchor: [7, 14],
    popupAnchor: [0, -15],
});

var secondaryAirport = L.icon({
    iconUrl: 'resources/bluemarker.png',
    iconSize: [14, 14],
    iconAnchor: [7, 14],
    popupAnchor: [0, -15],
});

var tertiaryAirport = L.icon({
    iconUrl: 'resources/greymarker.png',
    iconSize: [14, 14],
    iconAnchor: [7, 14],
    popupAnchor: [0, -15],
});

var airplane_large = L.icon({
    iconUrl: 'resources/airplane_large.png',
    iconSize: [16, 16],
    iconAnchor: [8, 10],
    popupAnchor: [10, -20],
});

var airplane_largeY = L.icon({
    iconUrl: 'resources/airplane_largeY.png',
    iconSize: [17, 17],
    iconAnchor: [8, 10],
    popupAnchor: [5, -20],
});