
const W39_A = 825; // Watanabe W39-A large
const W39_B = 828; // Watanabe W39-B large
const AC51 = 835; // Aerotheon AC51 large
const AC51_pic='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Cathay_Pacific_A350-900_%28B-LRJ%29_%40_DUS%2C_Dec_2017.jpg/375px-Cathay_Pacific_A350-900_%28B-LRJ%29_%40_DUS%2C_Dec_2017.jpg';


const aircraft = `
{
    "AV_GlobeMAX900": {
        "model": "AV-GlobeMAX900",
        "name": "AhkaaVuoi GlobeMAX900",
        "cruise": 900,
        "class": "Heavy Business Jet", 
        "type": "luxury",
        "capacity": 62
    },
    "AV_Luossa400": {
        "model": "AV-Luossa400",
        "name": "AhkaaVuoi Luossa400",
        "cruise": 380,
        "class": "Twin Turboprop", 
        "type": "small",
        "capacity": 8
    },
    "AV_Blizzard_C50": {
        "model": "AV-Blizzard-C50",
        "name": "AhkaaVuoi Blizzard-C50",
        "cruise": 550,
        "class": "Standard Turboprop", 
        "type": "jet",
        "capacity": 58
    },
    "AV_CLJ200": {
        "model": "AV-CLJ200",
        "name": "AhkaaVuoi CLJ200",
        "cruise": 870,
        "class": "Standard Business Jet", 
        "type": "luxury",
        "capacity": 47
    },
    "AV_Nieida200": {
        "model": "AV-Nieida200",
        "name": "AhkaaVuoi Nieida200",
        "cruise": 255,
        "class": "Twin Turboprop", 
        "type": "small",
        "capacity": 8
    },
    "DG_70": {
        "model": "DG-70",
        "name": "MacDougall Graham DG-70",
        "cruise": 775,
        "class": "Standard Jet Airliner", 
        "type": "medium",
        "capacity": 212
    },
    "DG_80": {
        "model": "DG-80",
        "name": "MacDougall Graham DG-80",
        "cruise": 820,
        "class": "Standard Jet Airliner", 
        "type": "medium",
        "capacity": 292
    },
    "DG_86": {
        "model": "DG-86",
        "name": "MacDougall Graham DG-86",
        "cruise": 835,
        "class": "Standard Jet Airliner", 
        "type": "large",
        "capacity": 372
    },
    "NM70": {
        "model": "NM70",
        "name": "Shobetsuki Aerospace \\"Nulbimyūha\\" NM70",
        "cruise": 800,
        "class": "Standard Jet Airliner", 
        "type": "medium",
        "capacity": 75
    },
    "NM90": {
        "model": "NM90",
        "name": "Shobetsuki Aerospace \\"Nulbimyūha\\" NM90",
        "cruise": 800,
        "class": "Standard Jet Airliner", 
        "type": "medium",
        "capacity": 94
    },
    "AV_Storm400": {
        "model": "AV-Storm400",
        "name": "AhkaaVuoi AV-Storm400",
        "cruise": 920,
        "class": "Standard Business Jet", 
        "type": "luxury",
        "capacity": 28
    },
    "Contair_B20a": {
        "model": "B20a",
        "name": "Contair B20a",
        "cruise": 500,
        "class": "Turboprop Regional Plane", 
        "type": "small",
        "capacity": 50,
        "image" : "https://cdn.discordapp.com/attachments/913558405220802592/915422541458329660/unknown.png"
    },
    "Contair_B20b": {
        "model": "B20b",
        "name": "Contair B20b",
        "cruise": 484,
        "class": "Turboprop Regional Plane", 
        "type": "small",
        "capacity": 50,
        "image" : "https://cdn.discordapp.com/attachments/913558405220802592/915422541458329660/unknown.png"
    },
    "Contair_B20c": {
        "model": "B20c",
        "name": "Contair B20c",
        "cruise": 556,
        "class": "Turboprop Regional Plane", 
        "type": "small",
        "capacity": 50,
        "image" : "https://cdn.discordapp.com/attachments/913558405220802592/915422541458329660/unknown.png"
    },
    "Contair_B30a": {
        "model": "B30a",
        "name": "Contair B30a",
        "cruise": 490,
        "class": "Turboprop regional plane", 
        "type": "medium",
        "capacity": 68,
        "image": "https://media.discordapp.net/attachments/913558405220802592/915422621812813935/unknown.png"
    }, 
    "Contair_B30b": {
        "model": "B30b",
        "name": "Contair B30b",
        "cruise": 510,
        "class": "Turboprop regional plane",
        "type": "medium",
        "capacity": 70,
        "image": "https://media.discordapp.net/attachments/913558405220802592/915422621812813935/unknown.png"
    }, 
    "Contair_B30c": {
        "model": "B30c",
        "name": "Contair B30c",
        "cruise": 510,
        "class": "Turboprop cargo plane", 
        "type": "medium",
        "capacity": 2,
        "image": "https://media.discordapp.net/attachments/913558405220802592/915422621812813935/unknown.png"
    }, 
    "Contair_B30d": {
        "model": "B30d",
        "name": "Contair B30d",
        "cruise": 490,
        "class": "Turboprop regional plane", 
        "type": "medium",
        "capacity": 68,
        "image": "https://media.discordapp.net/attachments/913558405220802592/915422621812813935/unknown.png"
    },
    "Contair_D20a": {
        "model": "D20a",
        "name": "Contair D20a",
        "cruise": 825,
        "class": "Medium narrowbody jet plane", 
        "type": "medium",
        "capacity": 88,
        "image": "https://media.discordapp.net/attachments/913558405220802592/915422908938084392/unknown.png"
    }, 
    "SPT_21":{
        "model": "SPT-21",
        "name": "Vistulin Spārtesôr 21",
        "cruise": 900,
        "class": "Light Business Jet", 
        "type": "luxury",
        "capacity": 26
    },
    "Contair_001":{
        "model": "Contair 001",
        "name": "Contair 001 SuperJet",
        "cruise": 2200,
        "class": "Heavy Custom Jet", 
        "type": "contair-001",
        "capacity": 112,
        "image": "https://media.discordapp.net/attachments/913558405220802592/915423025875283998/unknown.png"
    },
    "W34":{
        "model": "W34",
        "name": "Wātānābe Ärospás W34",
        "cruise": 830,
        "class": "Standard Jet Airliner", 
        "type": "medium",
        "capacity": 172,
        "image" : "https://old.opengeofiction.wiki/images/6/68/PX-W34.jpg"
    },
    "W36":{
        "model": "W36",
        "name": "Wātānābe Ärospás W36",
        "cruise": 821,
        "class": "Standard Jet Airliner", 
        "type": "medium",
        "capacity": 204,
        "image": "https://old.opengeofiction.wiki/images/8/87/W36-gobrassian.jpg"
    },
    "W39":{
        "model": "W39",
        "name": "Wātānābe Ärospás W39",
        "cruise": 885,
        "class": "Large Jet Airliner", 
        "type": "large",
        "capacity": 292,
        "image": "https://old.opengeofiction.wiki/images/9/95/Guai_Airways_W39-b.jpg"
    },
    "W39_B":{
        "model": "W39-B",
        "name": "Wātānābe Ärospás W39-B",
        "speed": 905,
        "class": "Large Jet Airliner", 
        "type": "large",
        "capacity": 312,
        "image": "https://old.opengeofiction.wiki/images/9/95/Guai_Airways_W39-b.jpg"
    }

    
}
`








//aircraft






// "age"
// "track"
// "registered"



//flights
// LY500popup = "<b>Yo</b>";


//OhemiAir
//Air Spi̊ritsā
