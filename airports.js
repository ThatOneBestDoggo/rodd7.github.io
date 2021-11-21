const flag = `
{
    "Ohemia" : "<img src='https://wiki.opengeofiction.net/images/9/94/Ohemian_Imperial_Flag_Large.png' width='30'>",
    "FSA" : "<img src='https://wiki.opengeofiction.net/images/thumb/6/6f/Flag_of_the_FSA.svg/2880px-Flag_of_the_FSA.svg.png' width='30'>"
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
        "ANACA" : "NCRS",
        "runway": 3
    },
    "SIA": {
        "name": "Soprasser International Airport", 
        "coord": [-33.09586, 35.44253], 
        "country": "Ohemia",
        "class": "A",
        "WAAT": "SIA",
        "ANACA" : "NSIA",
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
        "name": "Tazów-Tymeń Airport", 
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
    
    "STI": {
        "name": "Stanton International Airport", 
        "coord": [-40.0207, 159.5987], 
        "country": "FSA",
        "class": "A",
        "WAAT": "STI",
        "ANACA" : "BASI",
        "runway": "unknown"
    }

}`

