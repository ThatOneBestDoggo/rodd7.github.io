
const flag = `
{
    "Ohemia" : "<img src='https://wiki.opengeofiction.net/images/9/94/Ohemian_Imperial_Flag_Large.png' width='35' >",
    "FSA" : "<img src='https://wiki.opengeofiction.net/images/thumb/6/6f/Flag_of_the_FSA.svg/2880px-Flag_of_the_FSA.svg.png' width='35'>"
}
`
const airport = `
{
    "CRS": {
        "name": "Corrostance Ohemian International Airport", 
        "coord": [-34.85432, 35.80759], 
        "country": "Ohemia",
        "class": "A",
        "WAAT": "CRS",
        "ANACA" : "NOCR",
        "runway": 3
    },
    "SIA": {
        "name": "Soprasser International Airport", 
        "coord": [-33.09586, 35.44253], 
        "country": "Ohemia",
        "class": "A",
        "WAAT": "SIA",
        "ANACA" : "NOSO",
        "runway": 2
    },
    "PEP": {
        "name": "Tlapepenatlaca International Airport", 
        "coord": [-7.4940, 14.6762], 
        "country": "Teotiyolcan",
        "class": "A",
        "WAAT": "PEP",
        "ANACA" : "MTPE",
        "runway": 3
    },
    "layrcraft": {
        "name": "Layr", 
        "coord": [-35.29846, 45.04518], 
        "country": "Layr",
        "class": "A",
        "WAAT": "layrcraft",
        "ANACA" : "layrcraft",
        "runway": 2
    },
    "QWI": {
        "name": "Qawari International Airport", 
        "coord": [31.91718, 55.33781], 
        "country": "Mazan",
        "class": "B",
        "WAAT": "QWI",
        "ANACA" : "KQWI",
        "runway": 1
    },
    "TZY": {
        "name": "Port Lotniczy Tazów-Tymeń im. Mieczysława Wielkiego", 
        "coord": [58.96928, 77.26251], 
        "country": "Lany",
        "class": "B",
        "WAAT": "TZY",
        "ANACA" : "ITAZ",
        "runway": 1
    },
    "AMB": {
        "name": "Aeroport Marescal Belmont, Barzona", 
        "coord": [-14.3329, 19.4918], 
        "country": "Barzona",
        "class": "B",
        "WAAT": "AMB",
        "ANACA" : "MBCA",
        "runway": 1
    },
    "TSA": {
        "name": "Toussaint Airport", 
        "coord": [9.5737, 177.1767], 
        "country": "Arecales",
        "class": "C",
        "WAAT": "TSA",
        "ANACA" : "CTSA",
        "runway": 1
    },
    "DIA": {
        "name": "Dennison International Airport", 
        "coord": [-32.6952, 140.9003], 
        "country": "FSA",
        "class": "A",
        "WAAT": "DIA",
        "ANACA" : "BADE",
        "runway": 3
    },
    "ELR": {
        "name": "Elvira Regional Airport", 
        "coord": [-32.9856, 141.1414], 
        "country": "FSA",
        "class": "C",
        "WAAT": "ELR",
        "ANACA" : "BAEL",
        "runway": 2
    },
    "LON": {
        "name": "Lola-Fort Nickerson Regional Airport", 
        "coord": [-33.4628, 141.0138], 
        "country": "FSA",
        "class": "C",
        "WAAT": "LON",
        "ANACA" : "BALN",
        "runway": 1
    },
    "SDA": {
        "name": "San Daniel Airport", 
        "coord": [-33.1804, 142.6472], 
        "country": "FSA",
        "class": "C",
        "WAAT": "SDA",
        "ANACA" : "BASD",
        "runway": 1
    },
    "ARC": {
        "name": "Arecales International Airport", 
        "coord": [9.4313, 178.6601], 
        "country": "Arecales",
        "class": "B",
        "WAAT": "ARC",
        "ANACA" : "CARE",
        "runway": 1
    },
    "SJA": {
        "name": "Lyndon W. Barnet Saint John Airport", 
        "coord": [10.4665, 174.4073], 
        "country": "Arecales",
        "class": "C",
        "WAAT": "SJA",
        "ANACA" : "CSJA",
        "runway": 1
    },
    "SCR": {
        "name": "St Catherine Regional Airport", 
        "coord": [10.1349, 176.2697], 
        "country": "Arecales",
        "class": "C",
        "WAAT": "SCR",
        "ANACA" : "CSCR",
        "runway": 1
    },
    "RBC": {
        "name": "Rock Bottom Airport", 
        "coord": [10.5883, 175.1788], 
        "country": "Arecales",
        "class": "C",
        "WAAT": "RBC",
        "ANACA" : "CRBC",
        "runway": 1
    },
    "KRI": {
        "name": "Cretra International Airport", 
        "coord": [16.5943, 53.6345], 
        "country": "Arion",
        "class": "A",
        "WAAT": "KRI",
        "ANACA" : "KARK",
        "runway": 2
    },
    "SEL": {
        "name": "Selebes International Airport", 
        "coord": [17.2902, 51.8192], 
        "country": "Arion",
        "class": "A",
        "WAAT": "SEL",
        "ANACA" : "KARS",
        "runway": 2
    },
    "IPS": {
        "name": "Ipsore International Airport", 
        "coord": [18.1641, 49.5668], 
        "country": "Arion",
        "class": "B",
        "WAAT": "IPS",
        "ANACA" : "KARI",
        "runway": 1
    },
    "ONI": {
        "name": "Orlioni International Airport", 
        "coord": [18.4782, 51.9263], 
        "country": "Arion",
        "class": "B",
        "WAAT": "ONI",
        "ANACA" : "KARO",
        "runway": 1
    },
    "ICI": {
        "name": "Escu Enternatonal Aerport", 
        "coord": [2.1014, 92.2974], 
        "country": "Iscu",
        "class": "A",
        "WAAT": "ICI",
        "ANACA" : "GICI",
        "runway": 1
    },
    "LOC": {
        "name": "Loconon Airstrip", 
        "coord": [1.69991, 91.54221], 
        "country": "Iscu",
        "class": "C",
        "WAAT": "LOC",
        "ANACA" : "GICL",
        "runway": 1
    },
    "BSG": {
        "name": "Illbádh Brotoque-Sanne Girmágne", 
        "coord": [-20.1854, 21.6736], 
        "country": "Airannia",
        "class": "B",
        "WAAT": "BSG",
        "ANACA" : "BABS",
        "runway": 3
    },
    "JBA": {
        "name": "Illbádh Jean Boulard Ardoux", 
        "coord":  [-18.5046796, 23.1485363], 
        "country": "Airannia",
        "class": "C",
        "WAAT": "JBA",
        "ANACA" : "BAJB",
        "runway": 1
    },
    "AVG": {
        "name": "Illbádh Gardédhayay Aerá-Vorácy", 
        "coord":  [-20.3041213, 23.3129697], 
        "country": "Airannia",
        "class": "A",
        "WAAT": "AVG",
        "ANACA" : "BAAV",
        "runway": 1
    },
    "MAH": {
        "name": "Mahhájohk - AhkaaVuoi Girdišillju", 
        "coord":  [63.7721587, 63.0467157], 
        "country": "Ruoguovvás",
        "class": "C",
        "WAAT": "MAH",
        "ANACA" : "EFMA",
        "runway": 2
    },
    "PHA": {
        "name": "Pohhállakksót Girdišillju", 
        "coord":  [65.8761, 69.7305], 
        "country": "Ruoguovvás",
        "class": "C",
        "WAAT": "PHA",
        "ANACA" : "ESPH",
        "runway": 1
    },
    "SBD": {
        "name": "Sean Bond International Airport", 
        "coord":  [-21.1481, 28.6220], 
        "country": "Freedemia",
        "class": "A",
        "WAAT": "SBD",
        "ANACA" : "MFSB",
        "runway": 3
    },
    "MAT": {
        "name": "Mathers National Airfield", 
        "coord":  [-21.0388, 28.4977], 
        "country": "Freedemia",
        "class": "B",
        "WAAT": "MAT",
        "ANACA" : "MFMT",
        "runway": 2
    },
    "LCX": {
        "name": "Lake City International Airport", 
        "coord":  [-41.5628, 141.3036], 
        "country": "FSA",
        "class": "A",
        "WAAT": "LCX",
        "ANACA" : "BALC",
        "runway": 7
    },
    "GNN": {
        "name": "Gunnison International Airport", 
        "coord":  [-41.5264, 141.5609], 
        "country": "FSA",
        "class": "B",
        "WAAT": "GNN",
        "ANACA" : "BAGN",
        "runway": 2
    },
    "NMN": {
        "name": "Northern Minnonigan Regional Airport", 
        "coord":  [-39.9923, 140.2289], 
        "country": "FSA",
        "class": "B",
        "WAAT": "NMN",
        "ANACA" : "BANM",
        "runway": 3
    },
    "BRR": {
        "name": "Gridland Gateway International Airport", 
        "coord":  [-41.7122, 139.9046], 
        "country": "FSA",
        "class": "B",
        "WAAT": "BRR",
        "ANACA" : "BARR",
        "runway": 2
    },
    "BUX": {
        "name": "Ondassagam-Bucks County Regional Airport", 
        "coord":  [-41.1417, 140.5155], 
        "country": "FSA",
        "class": "B",
        "WAAT": "BUX",
        "ANACA" : "BAON",
        "runway": 2
    },
    "SUL": {
        "name": "Sainðaul Kanui Kūnkō", 
        "coord":  [36.1119, 128.6506], 
        "country": "Izaland",
        "class": "A",
        "WAAT": "SUL",
        "ANACA" : "DZSL",
        "runway": 3
    },
    "KNU": {
        "name": "Sainðaul Asunahama Kukujai Kūnkō", 
        "coord": [35.999, 129.0767], 
        "country": "Izaland",
        "class": "C",
        "WAAT": "KNU",
        "ANACA" : "DZKU",
        "runway": 1
    },
    "WRH": {
        "name": "Warohan Takarun Kukujai Kūnkō", 
        "coord": [33.6039, 125.8823], 
        "country": "Izaland",
        "class": "A",
        "WAAT": "WRH",
        "ANACA" : "DZWH",
        "runway": 3
    },
    "PTR": {
        "name": "Pyapyor Teranej Airport", 
        "coord": [22.4421, 139.6870], 
        "country": "Grinzez",
        "class": "A",
        "WAAT": "PTR",
        "ANACA" : "CGTR",
        "runway": 3
    },
    "HCO": {
        "name": "Hithercèko Goikam Airport", 
        "coord":  [18.8436, 141.5701], 
        "country": "Grinzez",
        "class": "A",
        "WAAT": "HCO",
        "ANACA" : "CGHC",
        "runway": 2
    },

    "TEM": {
        "name": "Aeroporto Internazionale di Temisa Daniele Vuluta", 
        "coord": [45.3892, 57.6216], 
        "country": "Plevia",
        "city":" Temisa",
        "class": "A",
        "WAAT": "TEM",
        "ANACA" : "GPTM",
        "runway": 2
    },

    "OSI": {
        "name": "Aeroporto Internazionale di Osianopoli Francesco Balti", 
        "coord": [45.5486, 64.0302], 
        "country": "Plevia",
        "city":" Osianopoli",
        "class": "A",
        "WAAT": "OSI",
        "ANACA" : "GPOP",
        "runway": 3
    },
    
    "STI": {
        "name": "Stanton International Airport", 
        "coord": [-40.0207, 159.5987], 
        "country": "FSA",
        "class": "A",
        "WAAT": "STI",
        "ANACA" : "BASI",
        "runway": "unknown"
    },

    "BKD": {
        "name": "飞航战胜 Phi Hàng Chiến Thắng", 
        "coord": [28.4726,158.4604], 
        "country": "Kuehong",
        "city":"Bakdep",
        "class": "B",
        "WAAT": "BKD",
        "ANACA" : "CQBD",
        "runway": 2
    },
    "NMI": {
        "name": "飞航南美 Phi hàng Nam Mĩ", 
        "coord": [26.5674,160.2376], 
        "country": "Kuehong",
        "city":"Namthinhvuong",
        "class": "B",
        "WAAT": "NMI",
        "ANACA" : "CQMI",
        "runway": 2
    },
    "CHT": {
        "name": "飞航樟宜 Phi hàng Chương Ngơi", 
        "coord": [30.1844,160.6164], 
        "country": "Kuehong",
        "city":"Vang Ngat",
        "class": "C",
        "WAAT": "CHT",
        "ANACA" : "CQVN",
        "runway": 2
    },
    "BDN": {
        "name": "北端机场 (Beiduan International Airport", 
        "coord": [22.2727,150.0995], 
        "country": "Bai Empire",
        "city":"Xiongjing",
        "class": "C",
        "WAAT": "BDN",
        "ANACA" : "CBXJ",
        "runway": 1
    }, 
    "DGY": {
        "name": "雄京东越国际机场 (Xiongjing Dongyue International Airport", 
        "coord": [21.9575,150.2395], 
        "country": "Bai Empire",
        "city":"Xiongjing",
        "class": "A",
        "WAAT": "DGY",
        "ANACA" : "CBXD",
        "runway": 2
    },
    "LOR": {
        "name": "Leiran Revithin Duthaiçak Adhair", 
        "coord": [35.8082, 85.8043], 
        "country": "Lorantis",
        "city": "Neril",
        "class": "B",
        "WAAT": "LOR",
        "ANACA" : "GLNR",
        "runway": 2
    },
    "DRG": {
        "name": "Aeraport Cara Aliaksandra IV", 
        "coord": [42.7770, 73.8200], 
        "country": "White Dregovine",
        "city": "Litusava",
        "class": "B",
        "WAAT": "DRG",
        "ANACA" : "GDRG",
        "runway": 2
    },
    "DDA": {
        "name": "Erdoğan Ahmet Paşa Havalimanı", 
        "coord": [39.2479, 84.3387], 
        "country": "Demirhan Empire",
        "city": "Ardeşehir",
        "class": "A",
        "WAAT": "DDA",
        "ANACA" : "GDAR",
        "runway": 4
    },
    "DDT": {
        "name": "Sultan II. Selim Ulasrarası Havalimanı", 
        "coord": [37.6816, 81.1658], 
        "country": "Demirhan Empire",
        "city": "Tarsınar",
        "class": "B",
        "WAAT": "DDT",
        "ANACA" : "GDTR",
        "runway": 1
    },
    "DDI": {
        "name": "Sultan Bayezid Havalimanı", 
        "coord": [39.0036, 79.6632], 
        "country": "Demirhan Empire",
        "city": "İslahisar",
        "class": "B",
        "WAAT": "DDI",
        "ANACA" : "GDIS",
        "runway": 2
    },
    "DDK": {
        "name": "Sultan III. Demirhan Havalimanı", 
        "coord": [38.1795, 77.6603], 
        "country": "Demirhan Empire",
        "city": "Kayramtor",
        "class": "B",
        "WAAT": "DDK",
        "ANACA" : "GDKR",
        "runway": 1
    },
    "DDN": {
        "name": "Sultan VI. Mehmet Havalimanı", 
        "coord": [40.2858,76.3676], 
        "country": "Demirhan Empire",
        "city": "Nehirhisar",
        "class": "B",
        "WAAT": "DDN",
        "ANACA" : "GDNH",
        "runway": 2
    },
    "BAK": {
        "name": "Bako-Huz International Airport", 
        "coord": [-50.15606, 72.94397], 
        "country": "Kofuku",
        "city": "Bako-Huz",
        "class": "A",
        "WAAT": "BAK",
        "ANACA" : "OKBK",
        "runway": 2
    },
    "SJC": {
        "name": "Jack Sánchez (San Juan) Airport", 
        "coord": [-49.53862, 71.32645], 
        "country": "San Juan de Castellán",
        "city": "San Juan",
        "class": "B",
        "WAAT": "SJC",
        "ANACA" : "OSJC",
        "runway": 1
    },
    "FYR": {
        "name": "Filosoyer Airbase", 
        "coord": [-48.69522, 72.28110], 
        "country": "Kofuku",
        "city": "Safport",
        "class": "C",
        "WAAT": "FYR",
        "ANACA" : "OFYR",
        "runway": 1
    },
    "AUS": {
        "name": "Kof-GT Airfield", 
        "coord": [-68.06527, 21.27300], 
        "country": "Southern Islands",
        "city": "Australis Base",
        "class": "C",
        "WAAT": "AUS",
        "ANACA" : "OAUS",
        "runway": 1
    },
    "EZV": {
        "name": "Aerspiņiă Intersapală Erez - Vadar", 
        "coord": [39.7482,83.8436], 
        "country": "Qennes",
        "city": "Erez",
        "class": "C",
        "WAAT": "EZV",
        "ANACA" : "GQEV",
        "runway": 1
    },
    "MTA":{
        "name": "Aerspiņiă Intersapală Keptoș", 
        "coord": [39.6863,84.1939], 
        "country": "Qennes",
        "city": "Malvertta",
        "class": "B",
        "WAAT": "MTA",
        "ANACA" : "GQKE",
        "runway": 1
    },
    "ALJ": {
        "name": "Aljaraf Airport", 
        "coord": [31.80878, 56.84462], 
        "country": "Mazan",
        "city":" Aljaraf",
        "class": "B",
        "WAAT": "ALJ",
        "ANACA" : "GALJ",
        "runway": 1
    } 


}`
var airports = JSON.parse(airport);
var flags = JSON.parse(flag);
var now = new Date();
function addZero(x) {
    if (x < 10) {
        x = "0" + x;
    }
    return x;
}

var CRSpopup = "<b class='airportname'>" + airports.CRS.name + "</b> <p class= 'location'> <i>Corrostance Federal City, " + airports.CRS.country + "</i> &nbsp  " + flags.Ohemia + "</p> <hr> <p class= 'location'> <b>Coordinates: </b>" + airports.CRS.coord + "</p> <table> <th></th><th></th>  <tr><td><b>WAAT: </b>" + airports.CRS.WAAT +"</td> <td><b>ANACA: </b>" + airports.CRS.ANACA +"</td> </tr> <tr><td><b>Runways: </b>" + airports.CRS.runway +"</td><td><b>Class: </b>" + airports.CRS.class +"</td> </tr></table> <p class= 'location'><b>Local Time: </b>" + (now.getUTCHours()+2) + ":" + addZero(now.getUTCMinutes()) + " (WUT+2) </p>";
var STIpopup = "<b class='airportname'>" + airports.STI.name + "</b> <p class= 'location'> <i>Stanton, " + airports.STI.country + "</i> &nbsp  " + flags.FSA + "</p> <hr> <p class= 'location'> <b>Coordinates: </b>" + airports.STI.coord + "</p> <table> <th></th><th></th>  <tr><td><b>WAAT: </b>" + airports.STI.WAAT +"</td> <td><b>ANACA: </b>" + airports.STI.ANACA +"</td> </tr> <tr><td><b>Runways: </b>" + airports.STI.runway +"</td><td><b>Class: </b>" + airports.STI.class +"</td> </tr></table> <p class= 'location'><b>Local Time: </b>" + (now.getUTCHours()+9) + ":" + addZero(now.getUTCMinutes()) + " (WUT+2) </p>";
var SIApopup = "<b class='airportname'>" + airports.SIA.name + "</b> <p class= 'location'> <i>Soprasser Federal City, " + airports.SIA.country + "</i> &nbsp  " + flags.Ohemia + "</p> <hr> <p class= 'location'> <b>Coordinates: </b>" + airports.SIA.coord + "</p> <table> <th></th><th></th>  <tr><td><b>WAAT: </b>" + airports.SIA.WAAT +"</td> <td><b>ANACA: </b>" + airports.SIA.ANACA +"</td> </tr> <tr><td><b>Runways: </b>" + airports.SIA.runway +"</td><td><b>Class: </b>" + airports.SIA.class +"</td> </tr></table> <p class= 'location'><b>Local Time: </b>" + (now.getUTCHours()+2) + ":" + addZero(now.getUTCMinutes()) + " (WUT+2) </p>";



