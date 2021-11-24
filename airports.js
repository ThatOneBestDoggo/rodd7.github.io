
const flag = `
{
    "Ohemia" : "<img src='https://wiki.opengeofiction.net/images/9/94/Ohemian_Imperial_Flag_Large.png' width='35' >",
    "Default" : "<img src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/google/56/black-question-mark-ornament_2753.png' width='15' height='15' >",
    "FSA" : "<img src='https://wiki.opengeofiction.net/images/thumb/6/6f/Flag_of_the_FSA.svg/2880px-Flag_of_the_FSA.svg.png' width='35'>",
    "Izaland": "<img src='https://wiki.opengeofiction.net/images/7/79/Izaland_flag.png' width='35'>",
    "Layr": "<img src='https://wiki.opengeofiction.net/images/thumb/f/f2/LayrFlag.svg/932px-LayrFlag.svg.png' width='35'>",
    "Demirhan": "<img src='https://wiki.opengeofiction.net/images/4/43/Flag_of_Demirhan_Empire.png' width='35'>",
    "Kofuku": "<img src='https://wiki.opengeofiction.net/images/b/b9/FlagKofuku.jpg' width='35'>",
    "Allendea": "<img src='https://wiki.opengeofiction.net/images/b/b1/Allendea-Flag.png' width='35'>",
    "Barzona": "<img src='https://wiki.opengeofiction.net/images/7/79/Bandiera_na_Barzona.png' width='35'>",
    "Airannia": "<img src='https://wiki.opengeofiction.net/images/e/e4/AiranniaFlag.png' width='35'>",
    "Freedemia": "<img src='https://wiki.opengeofiction.net/images/6/62/FreedemianFlag.png' width='35'>",
    "Teotiyolcan": "<img src='https://wiki.opengeofiction.net/images/f/f6/Teotiyolcan-flag.png' width='35'>",
    "GT": "<img src='https://wiki.opengeofiction.net/images/a/a2/Gt-flag.png' width='35'>",
    "Iscu": "<img src='https://wiki.opengeofiction.net/images/a/ab/Iscu.png' width='35'>",
    "Kuehong": "<img src='https://wiki.opengeofiction.net/images/0/02/Flag_of_Kuehong.png' width='35'>",
    "Lany": "<img src='https://wiki.opengeofiction.net/images/9/9e/Flag_Lany.png' width='35'>",
    "Mazan": "<img src='https://wiki.opengeofiction.net/images/8/81/Mazan_Flag.png' width='35'>",
    "Qennes": "<img src='https://wiki.opengeofiction.net/images/d/d5/FlagQennes.png' width='35'>",
    "Arecales": "<img src='https://old.opengeofiction.wiki/images/thumb/8/83/Flag_of_Arecales_1.png/1200px-Flag_of_Arecales_1.png' width='35'>",
    "Wallea": "<img src='https://old.opengeofiction.wiki/images/thumb/d/d1/Walleanflag.jpg/1200px-Walleanflag.jpg' width='35'>",
    "CCA": "<img src='https://old.opengeofiction.wiki/images/thumb/4/4e/CCA-Flag2-01.jpg/1200px-CCA-Flag2-01.jpg' width='35'>",
    "Majesia": "<img src='https://old.opengeofiction.wiki/images/thumb/5/50/Majesia_flag.png/1200px-Majesia_flag.png' width='35'>",
    "Ruoguovvas": "<img src='https://old.opengeofiction.wiki/images/6/63/Ruoguovv%C3%A1s_flag.png' width='35'>",
    "Bromley": "<img src='https://wiki.opengeofiction.net/images/3/3f/Bromley_Flag_Update_August_2021.png' width='35'>",
    "Suria": "<img src='https://wiki.opengeofiction.net/images/a/a4/Flag_of_Suria.png' width='35'>",
    "Mauretia": "<img src='https://old.opengeofiction.wiki/images/c/c5/MauretiaFlag.svg' width='35'>",
    "Adaria": "<img src='https://wiki.opengeofiction.net/images/1/17/Adariaflag.png' width='35'>",
    "Bai": "<img src='https://wiki.opengeofiction.net/images/d/d1/Bai_flag.png' width='35'>",
    "Aden": "<img src='https://wiki.opengeofiction.net/images/2/2d/Aden_New_Flag.png' width='35'>"

    
    
    
    
    
}
`
const airport = `
{
    "CRS": {
        "name": "Corrostance Ohemian International Airport", 
        "coord": [-34.85432, 35.80759], 
        "country": "Ohemia",
        "city": "Corrostance",
        "class": "A",
        "WAAT": "CRS",
        "ANACA" : "NOCR",
        "runway": 3
    },
    "SIA": {
        "name": "Soprasser International Airport", 
        "coord": [-33.09586, 35.44253], 
        "country": "Ohemia",
        "city" : "Soprasser",
        "class": "A",
        "WAAT": "SIA",
        "ANACA" : "NOSO",
        "runway": 2
    },
    "PEP": {
        "name": "Tlapepenatlaca International Airport", 
        "coord": [-7.4940, 14.6762], 
        "country": "Teotiyolcan",
        "city": "Tlapepenatlaca",
        "class": "A",
        "WAAT": "PEP",
        "ANACA" : "MTPE",
        "runway": 3
    },
    "LYR": {
        "name": "Layrìtyan International Airport", 
        "coord": [-35.29846, 45.04518], 
        "country": "Layr",
        "city": "Layrìtyan",
        "class": "A",
        "WAAT": "LYR",
        "ANACA" : "NLYN",
        "runway": 2
    },
    "QWI": {
        "name": "Qawari International Airport", 
        "coord": [31.91718, 55.33781], 
        "country": "Mazan",
        "city": "Qawari",
        "class": "B",
        "WAAT": "QWI",
        "ANACA" : "KQWI",
        "runway": 1
    },
    "TZY": {
        "name": "Port Lotniczy Tazów-Tymeń im. Mieczysława Wielkiego", 
        "coord": [58.96928, 77.26251], 
        "country": "Lany",
        "city": "Tazów",
        "class": "B",
        "WAAT": "TZY",
        "ANACA" : "ITAZ",
        "runway": 1
    },
    "AMB": {
        "name": "Aeroport Marescal Belmont, Barzona", 
        "coord": [-14.3329, 19.4918], 
        "country": "Barzona",
        "city": "Belmont",
        "class": "B",
        "WAAT": "AMB",
        "ANACA" : "MBCA",
        "runway": 1
    },
    "TSA": {
        "name": "Toussaint Airport", 
        "coord": [9.5737, 177.1767], 
        "country": "Arecales",
        "city": "Toussaint",
        "class": "C",
        "WAAT": "TSA",
        "ANACA" : "CTSA",
        "runway": 1
    },
    "DIA": {
        "name": "Dennison International Airport", 
        "coord": [-32.6952, 140.9003], 
        "country": "FSA",
        "city": "Dennison",
        "class": "A",
        "WAAT": "DIA",
        "ANACA" : "BADE",
        "runway": 3
    },
    "ELR": {
        "name": "Elvira Regional Airport", 
        "coord": [-32.9856, 141.1414], 
        "country": "FSA",
        "city": "Elvira",
        "class": "C",
        "WAAT": "ELR",
        "ANACA" : "BAEL",
        "runway": 2
    },
    "LON": {
        "name": "Lola-Fort Nickerson Regional Airport", 
        "coord": [-33.4628, 141.0138], 
        "country": "FSA",
        "city": "Lola",
        "class": "C",
        "WAAT": "LON",
        "ANACA" : "BALN",
        "runway": 1
    },
    "SDA": {
        "name": "San Daniel Airport", 
        "coord": [-33.1804, 142.6472], 
        "country": "FSA",
        "city": "San Daniel",
        "class": "C",
        "WAAT": "SDA",
        "ANACA" : "BASD",
        "runway": 1
    },
    "ARC": {
        "name": "Arecales International Airport", 
        "coord": [9.4313, 178.6601], 
        "country": "Arecales",
        "city": "Arecales Air Force Base",
        "class": "B",
        "WAAT": "ARC",
        "ANACA" : "CARE",
        "runway": 1
    },
    "SJA": {
        "name": "Lyndon W. Barnet Saint John Airport", 
        "coord": [10.4665, 174.4073], 
        "country": "Arecales",
        "city": "Saint John",
        "class": "C",
        "WAAT": "SJA",
        "ANACA" : "CSJA",
        "runway": 1
    },
    "SCR": {
        "name": "St Catherine Regional Airport", 
        "coord": [10.1349, 176.2697], 
        "country": "Arecales",
        "city": "Kaetown",
        "class": "C",
        "WAAT": "SCR",
        "ANACA" : "CSCR",
        "runway": 1
    },
    "RBC": {
        "name": "Rock Bottom Airport", 
        "coord": [10.5883, 175.1788], 
        "country": "Arecales",
        "city": "Rock Bottom Cay",
        "class": "C",
        "WAAT": "RBC",
        "ANACA" : "CRBC",
        "runway": 1
    },
    "KRI": {
        "name": "Cretra International Airport", 
        "coord": [16.5943, 53.6345], 
        "country": "Arion",
        "city": "Cretra",
        "class": "A",
        "WAAT": "KRI",
        "ANACA" : "KARK",
        "runway": 2
    },
    "SEL": {
        "name": "Selebes International Airport", 
        "coord": [17.2902, 51.8192], 
        "country": "Arion",
        "city": "Selebes",
        "class": "A",
        "WAAT": "SEL",
        "ANACA" : "KARS",
        "runway": 2
    },
    "IPS": {
        "name": "Ipsore International Airport", 
        "coord": [18.1641, 49.5668], 
        "country": "Arion",
        "city": "Ispore",
        "class": "B",
        "WAAT": "IPS",
        "ANACA" : "KARI",
        "runway": 1
    },
    "ONI": {
        "name": "Orlioni International Airport", 
        "coord": [18.4782, 51.9263], 
        "country": "Arion",
        "city": "Orlioni",
        "class": "B",
        "WAAT": "ONI",
        "ANACA" : "KARO",
        "runway": 1
    },
    "ICI": {
        "name": "Escu Enternatonal Aerport", 
        "coord": [2.1014, 92.2974], 
        "country": "Iscu",
        "city": "Escu",
        "class": "A",
        "WAAT": "ICI",
        "ANACA" : "GICI",
        "runway": 1
    },
    "LOC": {
        "name": "Loconon Airstrip", 
        "coord": [1.69991, 91.54221], 
        "country": "Iscu",
        "city": "Lonocon",
        "class": "C",
        "WAAT": "LOC",
        "ANACA" : "GICL",
        "runway": 1
    },
    "BSG": {
        "name": "Illbádh Brotoque-Sanne Girmágne", 
        "coord": [-20.1854, 21.6736], 
        "country": "Airannia",
        "city": "Brotoque",
        "class": "B",
        "WAAT": "BSG",
        "ANACA" : "BABS",
        "runway": 3
    },
    "JBA": {
        "name": "Illbádh Jean Boulard Ardoux", 
        "coord":  [-18.5046796, 23.1485363], 
        "country": "Airannia",
        "city": "Ardoux",
        "class": "C",
        "WAAT": "JBA",
        "ANACA" : "BAJB",
        "runway": 1
    },
    "AVG": {
        "name": "Illbádh Gardédhayay Aerá-Vorácy", 
        "coord":  [-20.3041213, 23.3129697], 
        "country": "Airannia",
        "city": "Péck Heinucu, Vorácy",
        "class": "A",
        "WAAT": "AVG",
        "ANACA" : "BAAV",
        "runway": 3
    },
    "MAH": {
        "name": "Mahhájohk - AhkaaVuoi Girdišillju", 
        "coord": [63.7721587, 63.0467157], 
        "country": "Ruoguovvás",
        "city": "Mahhájohk",
        "class": "C",
        "WAAT": "MAH",
        "ANACA" : "EFMA",
        "runway": 1
    },
    "PHA": {
        "name": "Pohhállakksót Girdišillju", 
        "coord": [65.87962, 69.73205], 
        "country": "Ruoguovvás",
        "city": "Pohhállaksót",
        "class": "C",
        "WAAT": "PHA",
        "ANACA" : "ESPH",
        "runway": 1
    },
    "SBD": {
        "name": "Sean Bond International Airport", 
        "coord":  [-21.1481, 28.6220], 
        "country": "Freedemia",
        "city" : "Quentinsburgh",
        "class": "A",
        "WAAT": "SBD",
        "ANACA" : "MFSB",
        "runway": 3
    },
    "MAT": {
        "name": "Mathers National Airfield", 
        "coord":  [-21.0388, 28.4977], 
        "country": "Freedemia",
        "city" : "Mathers, Quentinsburgh",
        "class": "B",
        "WAAT": "MAT",
        "ANACA" : "MFMA",
        "runway": 2
    },
    "LCX": {
        "name": "Lake City International Airport", 
        "coord":  [-41.5628, 141.3036], 
        "country": "FSA",
        "city" : "Lake City",
        "class": "A",
        "WAAT": "LCX",
        "ANACA" : "BALC",
        "runway": 7
    },
    "GNN": {
        "name": "Gunnison International Airport", 
        "coord":  [-41.5264, 141.5609], 
        "country": "FSA",
        "city" : "Lake City",
        "class": "B",
        "WAAT": "GNN",
        "ANACA" : "BAGN",
        "runway": 2
    },
    "NMN": {
        "name": "Northern Minnonigan Regional Airport", 
        "coord":  [-39.9923, 140.2289], 
        "country": "FSA",
        "city": "Carbonridge",
        "class": "B",
        "WAAT": "NMN",
        "ANACA" : "BANM",
        "runway": 3
    },
    "BRR": {
        "name": "Gridland Gateway International Airport", 
        "coord":  [-41.7122, 139.9046], 
        "country": "FSA",
        "city": "Barre Harbor",
        "class": "B",
        "WAAT": "BRR",
        "ANACA" : "BARR",
        "runway": 2
    },
    "BUX": {
        "name": "Ondassagam-Bucks County Regional Airport", 
        "coord":  [-41.1417, 140.5155], 
        "country": "FSA",
        "city": "Ondassagam",
        "class": "B",
        "WAAT": "BUX",
        "ANACA" : "BAON",
        "runway": 2
    },
    "SUL": {
        "name": "Sainðaul Asunahama Kukujai Kūnkō", 
        "coord":  [36.1119, 128.6506], 
        "country": "Izaland",
        "city":" Sainðaul",
        "class": "A",
        "WAAT": "SUL",
        "ANACA" : "DZSL",
        "runway": 3
    },
    "KNU": {
        "name": "Sainðaul Kanui Kūnkō", 
        "coord": [35.999, 129.0767], 
        "country": "Izaland",
        "city":" Sainðaul",
        "class": "C",
        "WAAT": "KNU",
        "ANACA" : "DZKU",
        "runway": 1
    },
    "WRH": {
        "name": "Warohan Takarun Kukujai Kūnkō", 
        "coord": [33.6039, 125.8823], 
        "country": "Izaland",
        "city":" Warohan",
        "class": "A",
        "WAAT": "WRH",
        "ANACA" : "DZWH",
        "runway": 3
    },
    "PTR": {
        "name": "Pyapyor Teranej Airport", 
        "coord": [22.4421, 139.6870], 
        "country": "Grinzez",
        "city":" Pyapyor",
        "class": "A",
        "WAAT": "PTR",
        "ANACA" : "CGTR",
        "runway": 3
    },
    "HCO": {
        "name": "Hithercèko Goikam Airport", 
        "coord":  [18.8436, 141.5701], 
        "country": "Grinzez",
        "city":" Hithercèko",
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
        "city":"Osianopoli",
        "class": "A",
        "WAAT": "OSI",
        "ANACA" : "GPOP",
        "runway": 3
    },
    
    "STI": {
        "name": "Stanton International Airport", 
        "coord": [-40.0207, 159.5987], 
        "country": "FSA",
        "city":"Stanton",
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
        "city": "Safeport",
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
        "class": "A",
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
        "ANACA" : "KALJ",
        "runway": 1
    },
    "HAR": {
        "name": "Hanif Al Rabahi International Airport", 
        "coord": [26.36854, 57.44427], 
        "country": "Mazan",
        "city":" Hanif",
        "class": "A",
        "WAAT": "HAR",
        "ANACA" : "KHAR",
        "runway": 7
    }, 
    "SAR": {
        "name": "Sarai International Airport", 
        "coord": [-46.46845, 65.45245], 
        "country": "Grisean-Thrirranic Commonwealth",
        "city":" Aragansa",
        "class": "B",
        "WAAT": "SAR",
        "ANACA" : "OSAR",
        "runway": 1
    },
    "NCH": {
        "name": "Nichiuri 4th of May International Airport", 
        "coord": [-24.60210,132.15087], 
        "country": "Adaria",
        "city":"Nichiuri",
        "class": "A",
        "WAAT": "NCH",
        "ANACA" : "FINI",
        "runway": 2
    },
    "MOE": {
        "name": "Aeropuerto de Moépolis", 
        "coord": [-21.70927,132.09219], 
        "country": "Adaria",
        "city":"Moépolis",
        "class": "B",
        "WAAT": "MOE",
        "ANACA" : "FIMO",
        "runway": 1
    },
    "TVM": {
        "name": "Torrevega-Maldín International Airport", 
        "coord": [-20.16600,130.79019], 
        "country": "Cordinia",
        "city":"Torrevega",
        "class": "B",
        "WAAT": "TVM",
        "ANACA" : "FCTM",
        "runway": 1
    },
    "FJA": {
        "name": "Fojenica-Abayabuque Airport", 
        "coord": [-17.7454, 18.7938], 
        "country": "Allendea",
        "city":" Fojenica",
        "class": "B",
        "WAAT": "FJA",
        "ANACA" : "MAFA",
        "runway": 2
    },
    "SNM": { 
        "name": "Raja Damai International Airport",
        "coord": [-15.1642,128.4531], 
        "country": "Wallea", 
        "city":"San Martin", 
        "class": "A", 
        "WAAT": "SNM", 
        "ANACA" : "EWRD", 
        "runway": 2 
    },
    "TGR": { 
        "name": "Tinggipura Airport",
        "coord": [-10.59087,128.82986], 
        "country": "Wallea", 
        "city":"Tinggipura", 
        "class": "C", 
        "WAAT": "TGR", 
        "ANACA" : "EWTP", 
        "runway": 1
    },
    "PLB": { 
        "name": "John Mbazwazan International Airport",
        "coord": [-19.4795,136.0465], 
        "country": "Commonwealth of Central Archanta", 
        "city":"Port Lagbard", 
        "class": "A", 
        "WAAT": "PLB", 
        "ANACA" : "ECPL", 
        "runway": 2
    },
    "BMO": { 
        "name": "Robert Meleku International Airport",
        "coord": [-16.6629,136.3036], 
        "country": "Commonwealth of Central Archanta", 
        "city":"Bambusho", 
        "class": "A", 
        "WAAT": "BMO", 
        "ANACA" : "ECBO", 
        "runway": 4
    },
    "MTB": { 
        "name": "Matsaamabeli International Airport",
        "coord": [-10.9504,142.6816], 
        "country": "Kwinatu", 
        "city":"Matsaamabeli", 
        "class": "A", 
        "WAAT": "MTB", 
        "ANACA" : "EKMB", 
        "runway": 1
    },
    "MJP": { 
        "name": "Sultan Mustafa International Airport",
        "coord": [-6.6916,125.7277], 
        "country": "Majesia", 
        "city":"Majapura", 
        "class": "B", 
        "WAAT": "MJP", 
        "ANACA" : "EMJP", 
        "runway": 2
    },
    "RJP": { 
        "name": "Sultan Mashmidan International Airport",
        "coord": [-5.5027,125.6606], 
        "country": "Majesia", 
        "city":"Rajapura", 
        "class": "A", 
        "WAAT": "RJP", 
        "ANACA" : "EMRP", 
        "runway": 4
    },
    "BRN": { 
        "name": "J. P. Atkins International Airport",
        "coord": [-38.5750,143.2917], 
        "country": "Federal States", 
        "city":"Barstone", 
        "class": "B", 
        "WAAT": "BRN", 
        "ANACA" : "BABN", 
        "runway": 3
    },
    "DAI": {
        "name": "Daishin Ennuntawi International Airport", 
        "coord": [33.5923, 126.9804], 
        "country": "Izaland",
        "city":"Daishin",
        "class": "B",
        "WAAT": "DAI",
        "ANACA" : "DZEW",
        "runway": 2
    },
    "GTN": {
        "name": "Izaland North International Airport", 
        "coord": [37.6495, 128.5791], 
        "country": "Izaland",
        "city":"Gaintei",
        "class": "B",
        "WAAT": "GTN",
        "ANACA" : "DZGT",
        "runway": 1
    },
    "ILL": {
        "name": "Illashiya Rikotān International Airport", 
        "coord": [35.6516, 128.2819], 
        "country": "Izaland",
        "city":"Illashiya",
        "class": "B",
        "WAAT": "ILL",
        "ANACA" : "DZIS",
        "runway": 2
    },
    "ISA": {
        "name": "Isadashi International Airport", 
        "coord": [37.1494, 128.9634], 
        "country": "Izaland",
        "city":"Isadashi",
        "class": "B",
        "WAAT": "ISA",
        "ANACA" : "DZID",
        "runway": 2
    },
    "KLS": {
        "name": "Kanlisahna Makohei International Airport", 
        "coord": [34.5074, 128.4736], 
        "country": "Izaland",
        "city":"Kanlisahna",
        "class": "B",
        "WAAT": "KLS",
        "ANACA" : "DZKG",
        "runway": 2
    },
    "KTS": {
        "name": "Warohan Katasogi International Airport", 
        "coord": [34.5074, 128.4736], 
        "country": "Izaland",
        "city":"Warohan, Katasogi",
        "class": "B",
        "WAAT": "KLS",
        "ANACA" : "DZKS",
        "runway": 1
    },
    "NKV": {
        "name": "Nukusavo Arotsāi Regional Airport", 
        "coord": [33.6795, 124.2044], 
        "country": "Izaland",
        "city":"Nukusavo",
        "class": "C",
        "WAAT": "NKV",
        "ANACA" : "DZNV",
        "runway": 1
    },
    "NTS": {
        "name": "Nutsuno Pedonka Regional Airport", 
        "coord": [33.6024, 127.5693], 
        "country": "Izaland",
        "city":"Nutsuno",
        "class": "C",
        "WAAT": "NTSV",
        "ANACA" : "DZNS",
        "runway": 1
    },
    "OGO": {
        "name": "Oingos Regional Airport", 
        "coord": [32.9153, 125.5518], 
        "country": "Izaland",
        "city":"Oingos",
        "class": "C",
        "WAAT": "OGO",
        "ANACA" : "DZOO",
        "runway": 1
    },
    "OGT": {
        "name": "Ogamoton Otsumihama International Airport", 
        "coord": [31.7986, 126.4066], 
        "country": "Izaland",
        "city":"Ogamoton",
        "class": "B",
        "WAAT": "OGT",
        "ANACA" : "DZOT",
        "runway": 1
    },
    "RYO": {
        "name": "Rimayoshi Regional Airport", 
        "coord": [34.2303, 127.0948], 
        "country": "Izaland",
        "city":"Ma-su-hu metropolitan area",
        "class": "C",
        "WAAT": "RYO",
        "ANACA" : "DZRY",
        "runway": 1
    },
    "SAG": {
        "name": "Sagoma International Airport", 
        "coord": [33.7304, 124.689], 
        "country": "Izaland",
        "city":"Sagoma",
        "class": "B",
        "WAAT": "SAG",
        "ANACA" : "DZSO",
        "runway": 2
    },
    "SKM": {
        "name": "Shirukami Hongō International Airport", 
        "coord": [36.9769, 128.5312], 
        "country": "Izaland",
        "city":"Shirukami",
        "class": "B",
        "WAAT": "SKM",
        "ANACA" : "DZSK",
        "runway": 2
    },
    "BSC": {
        "name": "Basotachi Regional Airport", 
        "coord": [32.5041, 126.8053], 
        "country": "Izaland",
        "city":"Basotachi",
        "class": "C",
        "WAAT": "BSC",
        "ANACA" : "DZBT",
        "runway": 1
     },
    "FUE": {
        "name": "Fuendaru International Airport", 
        "coord": [36.6492, 128.0036], 
        "country": "Izaland",
        "city":"Fuendaru",
        "class": "C",
        "WAAT": "FUE",
        "ANACA" : "DZFD",
        "runway": 1
     },
    "FUK": {
        "name": "Fukuyau Nurihara Negari Sau International Airport", 
        "coord": [36.1780, 127.2400], 
        "country": "Izaland",
        "city":"Fukuyau",
        "class": "B",
        "WAAT": "FUK",
        "ANACA" : "DZFK",
        "runway": 2
     },
    "KIX": {
        "name": "Kichatsura International Airport", 
        "coord": [35.5144, 127.0946], 
        "country": "Izaland",
        "city":"Kichatsura",
        "class": "B",
        "WAAT": "KIX",
        "ANACA" : "DZKR",
        "runway": 1
    },
    "AJL": {
        "name": "Atsujīl International Airport", 
        "coord": [33.1338, 124.5080], 
        "country": "Izaland",
        "city":"Atsujīl",
        "class": "B",
        "WAAT": "AJL",
        "ANACA" : "DZAL",
        "runway": 1
    },
    "KKK": {
        "name": "Kikknās International Airport", 
        "coord": [33.0337, 125.1020], 
        "country": "Izaland",
        "city":"Kikknās",
        "class": "B",
        "WAAT": "KKK",
        "ANACA" : "DZKK",
        "runway": 1
    },
    "LUE": {
        "name": "Luminoe Regional Airport", 
        "coord": [33.3199, 125.3022], 
        "country": "Izaland",
        "city":"Luminoe",
        "class": "C",
        "WAAT": "LUE",
        "ANACA" : "DZLM",
        "runway": 1
    },
    "SDR": {
        "name": "Saðuren Regional Airport", 
        "coord": [33.3156, 125.0385], 
        "country": "Izaland",
        "city":"Saðuren",
        "class": "C",
        "WAAT": "SDR",
        "ANACA" : "DZSR",
        "runway": 1
    },
    "STY": {
        "name": "Suritanma Regional Airport", 
        "coord": [32.3376, 125.5605], 
        "country": "Izaland",
        "city":"Ovāsa",
        "class": "C",
        "WAAT": "STY",
        "ANACA" : "DZSA",
        "runway": 1
    },
    "EHU": {
        "name": "Eharau Regional Airport", 
        "coord": [37.4540, 129.6363], 
        "country": "Izaland",
        "city":"Eharau",
        "class": "C",
        "WAAT": "EHU",
        "ANACA" : "DZEH",
        "runway": 1
    },
    "LGD": {
        "name": "Luollagirddán Riikkaidgaskasaš Girdišillju", 
        "coord": [64.782230, 66.266327], 
        "country": "Ruoguovvás",
        "city": "Jiemie",
        "class": "A",
        "WAAT": "LGD",
        "ANACA" : "ESLG",
        "runway": 2
    },
    "BLM": {
        "name": "Bellamcole Airport", 
        "coord": [-36.4402954, 45.9088258], 
        "country": "Bromley",
        "city": "Crwatham, Bellamcole",
        "class": "B",
        "WAAT": "BLM",
        "ANACA" : "NBRB",
        "runway": 1
    },
    "VDL": { 
        "name": "Vandoveur-Laneston Baum National Airport",
        "coord": [-19.3467,26.5691], 
        "country": "Freedemia", 
        "city":"Vandoveur", 
        "class": "B", 
        "WAAT": "VDL", 
        "ANACA" : "MFVL", 
        "runway": 2
    },
    "SVD": { 
        "name": "Silverdale National Airport",
        "coord": [-33.27132,143.98514], 
        "country": "FSA", 
        "city":"Silverdale", 
        "class": "C", 
        "WAAT": "SVD", 
        "ANACA" : "BASD", 
        "runway": 1
    },
    "IOL": { 
        "name": "Iola International Skyport",
        "coord": [27.7651, 43.6113],
        "country": "Mauretia",
        "city":"Iola",
        "class": "A",
        "WAAT": "IOL",
        "ANACA" : "KIOL",
        "runway": 3
    },
    "POM": { 
        "name": "King Massuna International Skyport",
        "coord": [26.3806, 44.0197],
        "country": "Mauretia",
        "city":"Pomalia",
        "class": "B",
        "WAAT": "POM",
        "ANACA" : "KPOM",
        "runway": 1
    },
    "SKY": { 
        "name": "Salda–Kabyea International Skyport",
        "coord": [29.0902, 43.979],
        "country": "Mauretia",
        "city":"Pomalia",
        "class": "B",
        "WAAT": "SKY",
        "ANACA" : "KSKY",
        "runway": 1
    },
    "MSY": { 
        "name": "Sansa Yosefa Skyport",
        "coord": [-27.3187, 48.3804],
        "country": "Mauretia",
        "city":"Pomalia",
        "class": "C",
        "WAAT": "MSY",
        "ANACA" : "NMSY",
        "runway": 1
    },
    "KSM": { 
        "name": "Sansu Mattiaù Skyport",
        "coord": [28.8412, 43.5514],
        "country": "Mauretia",
        "city":"Pomalia",
        "class": "C",
        "WAAT": "KSM",
        "ANACA" : "KMSM",
        "runway": 1
    },
    "TAN": { 
        "name": "Tangerine Coast International Skyport",
        "coord": [24.3599, 44.3622],
        "country": "Mauretia",
        "city":"Tangia",
        "class": "B",
        "WAAT": "TAN",
        "ANACA" : "KTAN",
        "runway": 1
    },
    "MEG": { 
        "name": "Gorgaya Islands Skyport",
        "coord": [13.8817, 52.7912],
        "country": "Mauretia",
        "city":"Ilm Gorgaya",
        "class": "C",
        "WAAT": "MEG",
        "ANACA" : "KMEG",
        "runway": 1
    },
    "MKX": {
        "name": "Minneuka International Airport",
        "coord": [-37.8052, 148.762],
        "country": "Federal States",
        "city":"Minneuka",
        "class": "A",
        "WAAT": "MKX",
        "ANACA" : "BAMK",
        "runway": 3
    },
    "JDN": {
        "name": "Jeidan Atârstaciunur",
        "coord": [-58.70214, 54.87404],
        "country": "Kwelede-peir",
        "city":"Jeidan",
        "class": "A",
        "WAAT": "JDN",
        "ANACA" : "OPJE",
        "runway": 4
    },
    "MIR": {
        "name": "Aèroport Mirgorod-Podlipovo",
        "coord": [54.36229, 73.03692],
        "country": "Suria",
        "city":"Mirgorod",
        "class": "A",
        "WAAT": "MIR",
        "ANACA" : "ISMI",
        "runway": 3
    },
    "BTR": {
        "name": "Adnan Shamas International Airport", 
        "coord": [21.2022, 51.5159], 
        "country": "Aden",
        "city": "Baytrouh",
        "class": "A",
        "WAAT": "BTR",
        "ANACA" : "KABT",
        "runway": 2
    },
    "ADM": {
        "name": "Aden Mdin International Airport", 
        "coord": [20.2574, 51.9953], 
        "country": "Aden",
        "city": "Aden Mdin",
        "class": "A",
        "WAAT": "ADM",
        "ANACA" : "KADM",
        "runway": 3
    },
    "NDL":{
        "name": "Nadal International Airport", 
        "coord": [19.2971, 52.7608], 
        "country": "Aden",
        "city": "Nadal",
        "class": "B",
        "WAAT": "NDL",
        "ANACA" : "KANL",
        "runway": 1
    },
    "OSN":{
        "name": "Hussein Hijazi International Airport", 
        "coord": [19.9000, 53.6791], 
        "country": "Aden",
        "city": "Ousayn",
        "class": "B",
        "WAAT": "OSN",
        "ANACA" : "KAOS",
        "runway": 2
    },
    "ALN":{
        "name": "Lynn El Aghar International Airport", 
        "coord": [20.9027, 52.6901], 
        "country": "Aden",
        "city": "Allyn",
        "class": "B",
        "WAAT": "ALN",
        "ANACA" : "KAAL",
        "runway": 1
    },
    "INR": {
        "name": "Inraak Domestic Airport", 
        "coord": [18.6943, 48.9459], 
        "country": "Aden",
        "city": "Inraak",
        "class": "C",
        "WAAT": "INR",
        "ANACA" : "KAIR",
        "runway": 1
    },
    "TBH": {
        "name": "Sayyidi Yanim Rifai International Airport", 
        "coord": [25.6106, 54.4479], 
        "country": "Mazan",
        "city": "Tabah",
        "class": "A",
        "WAAT": "TBH",
        "ANACA" : "KMTB",
        "runway": 2
    },
    "TRS": {
        "name": "Tursalam International Airport", 
        "coord": [29.8758, 57.7082], 
        "country": "Mazan",
        "city": "Tursalam",
        "class": "A",
        "WAAT": "TRS",
        "ANACA" : "KMTR",
        "runway": 1
    },
    "ARS": {
        "name": "Arsam Domestic Airport", 
        "coord": [30.6602, 57.5763], 
        "country": "Mazan",
        "city": "Arsam",
        "class": "B",
        "WAAT": "ARS",
        "ANACA" : "KMAR",
        "runway": 1
    },
    "MWJ": {
        "name": "Amwal-Jawahir International Airport", 
        "coord": [-29.1410, 167.2686], 
        "country": "Unesia",
        "city":" Amwal",
        "class": "B",
        "WAAT": "MWJ",
        "ANACA" : "BMWJ",
        "runway": 3
    },
    "DCX": {
        "name": "Draxton-Cameron International Airport", 
        "coord": [-31.7384, 165.1251], 
        "country": "Unesia",
        "city": "Draxton",
        "class": "A",
        "WAAT": "DCX",
        "ANACA" : "BDCX",
        "runway": 5
    },
    "CFL": {
        "name": "Mustafá Garcia Regional Airport", 
        "coord": [-31.6520, 165.8496], 
        "country": "Unesia",
        "city": "Confluencia del Sur",
        "class": "C",
        "WAAT": "CFL",
        "ANACA" : "BCFL",
        "runway": 2
    },
    "SVX": {
        "name": "South Valley International Airport", 
        "coord": [-32.9437, 167.1297], 
        "country": "Unesia",
        "city": "Zakia",
        "class": "B",
        "WAAT": "SVX",
        "ANACA" : "BSVX",
        "runway": 2 
    },
    "SKN": {
        "name": "Záhid Husain International Airport", 
        "coord": [-33.2350, 168.6911], 
        "country": "Unesia",
        "city": "Sakina",
        "class": "B",
        "WAAT": "SKN",
        "ANACA" : "BSKN",
        "runway": 2
    },
    "MPX": {
        "name": "Musawar-Pradera Transcontinental Airport", 
        "coord": [-29.9610, 166.9524], 
        "country": "Unesia",
        "city": "Musawar",
        "class": "A",
        "WAAT": "MPX",
        "ANACA" : "BMPX",
        "runway": 2
    },
    "FRP": {
        "name": "Freeport-Riverpool International Airport", 
        "coord": [-35.0842, 164.7911], 
        "country": "Unesia",
        "city": "Freeport",
        "class": "B",
        "WAAT": "FRP",
        "ANACA" : "BFRP",
        "runway": 2
    },
    "BST": {
        "name": "Adam Haris International Airport", 
        "coord": [-34.8323, 162.9126], 
        "country": "Unesia",
        "city": "Bistari",
        "class": "B",
        "WAAT": "BST",
        "ANACA" : "BBST",
        "runway": 1
    },
    "NEU": {
        "name": "Hector Osmán Regional Airport", 
        "coord": [-28.8732, 168.1030], 
        "country": "Unesia",
        "city": "Navarro",
        "class": "C",
        "WAAT": "NEU",
        "ANACA" : "BNEU",
        "runway": 1
    },
    "SBR": {
        "name": "Jebediah Wright Regional Airport", 
        "coord": [-33.6116, 164.1121], 
        "country": "Unesia",
        "city": "Salem",
        "class": "C",
        "WAAT": "SBR",
        "ANACA" : "BSBR",
        "runway": 3 
    },
    "NMT": {
        "name": "Bustan Regional Airport", 
        "coord": [28.5241, 62.0137], 
        "country": "Almahrus",
        "city": "Bandar Hilal",
        "class": "C",
        "WAAT": "NMT",
        "ANACA" : "GNMT",
        "runway": 2
    },
    "KRM": {
        "name": "Karamat Regional Airport", 
        "coord": [28.9026, 63.3677], 
        "country": "Almahrus",
        "city": "Ishara",
        "class": "B",
        "WAAT": "KRM",
        "ANACA" : "GKRM",
        "runway": 1
    },
    "ALM": {
        "name": "Hafidz Salim International Airport", 
        "coord": [28.7010, 64.2552], 
        "country": "Almahrus",
        "city": "Bayshebek",
        "class": "A",
        "WAAT": "ALM",
        "ANACA" : "GALM",
        "runway": 2
    },
    "MMD": {
        "name": "Mumaddan International Airport", 
        "coord": [28.8725, 53.3146], 
        "country": "Mazan",
        "city": "Mumaddan",
        "class": "B",
        "WAAT": "MMD",
        "ANACA" : "KMMD",
        "runway": 2 
    },
    "JWR": {
        "name": "Sidi Ibrahim Al-Jiwari International Airport", 
        "coord": [22.8632, 54.7264], 
        "country": "Mazan",
        "city": "Maad",
        "class": "A",
        "WAAT": "JWR",
        "ANACA" : "KJWR",
        "runway": 3
    },
    "CVL": {
        "name": "Aeroporto Internazionale di Civitelle \\"Baia Dorata\\"", 
        "coord": [43.3249, 61.2563], 
        "country": "Plevia",
        "city": "Civitelle",
        "class": "B",
        "WAAT": "CVL",
        "ANACA" : "GPCV",
        "runway": 2
    },
    "MVZ": {
        "name": "Aeroporto Internazionale di Mavezia \\"Nicola Canedai\\"", 
        "coord": [45.5553, 64.2163], 
        "country": "Plevia",
        "city": "Mavezia",
        "class": "B",
        "WAAT": "MVZ",
        "ANACA" : "GPMV",
        "runway": 1
    },
    "CVR": {
        "name": "Aeroporto dell'Alto Alamo", 
        "coord": [50.6981, 61.9184], 
        "country": "Plevia",
        "city": "Coveria",
        "class": "C",
        "WAAT": "DVR",
        "ANACA" : "GPCV",
        "runway": 1
    }, 
    "PBS": {
        "name": "Aeroporto Internazionale di Pradibosco \\"Lago Pretannico\\"", 
        "coord": [50.8333, 59.1394], 
        "country": "Plevia",
        "city": "Pradibosco",
        "class": "C",
        "WAAT": "PBS",
        "ANACA" : "GPPB",
        "runway": 1
    },
    "NRZ": {
        "name": "Aeroporto di Norenzo \\"Enrico Saggioli\\"", 
        "coord": [47.3908, 64.5399], 
        "country": "Plevia",
        "city": "Norenzo",
        "class": "C",
        "WAAT": "NRZ",
        "ANACA" : "GPNZ",
        "runway": 1
    },
    "COD": {
        "name": "Aeroporto Internazionale di Condona \\"Alessandra Tormiani\\"", 
        "coord": [44.5069, 63.8522], 
        "country": "Plevia",
        "city": "Condona",
        "class": "B",
        "WAAT": "COD",
        "ANACA" : "GPCD",
        "runway": 1
    },
    "COS": {
        "name": "Aeroporto Internazionale di Costa",
        "coord": [44.2867, 59.0064], 
        "country": "Plevia",
        "city": "Costa",
        "class": "B",
        "WAAT": "COS",
        "ANACA" : "GPCO",
        "runway": 1
    },
    "TOI": { 
        "name": "Teotialtecoyan International Airport",
        "coord": [-7.3969, 14.9629],
        "country": "Teotiyolcan",
        "city":"Teotialtecoyan",
        "class": "A",
        "WAAT": "TOI",
        "ANACA" : "MTET",
        "runway": 3
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
function appendzone(x){
    if (x == 0){
        return "WUT+0"
    }
    if (x > 0){
        return "WUT+" + x.toString();
    } else {
        "WUT" + x.toString();
    }
}


function zoneAdjust(x){
    var zonenow = new Date();
    var value = zonenow.addHours(x);


    return value.getUTCHours() + ":" + value.getUTCMinutes();
}

Date.prototype.addHours = function(h) {
    this.setTime(this.getTime() + (h*60*60*1000));
    return this;
  }


function cityplaceholder(x){
    x = (typeof x !== 'undefined') ?  x : "";
    return x.toString();
}

function details (insert, flag, zone, text){
    return "<b class='airportname'>" + insert.name + "</b> <p class= 'location'> <i>" + cityplaceholder(text) + " " + insert.city + ", " + insert.country + "</i> &nbsp  " + flag + "</p> <hr> <p class= 'location'> <b>Coordinates: </b>" + insert.coord + "</p> <table> <th></th><th></th>  <tr><td><b>WAAT: </b>" + insert.WAAT +"</td> <td><b>ANACA: </b>" + insert.ANACA +"</td> </tr> <tr><td><b>Runways: </b>" + insert.runway +"</td><td><b>Class: </b>" + insert.class +"</td> </tr></table> <p class= 'location'><b>Local Time: </b>" + addZero(zoneAdjust(zone)) + " (" +  appendzone(zone) + ")</p>";

}



