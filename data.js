// data
rep_of_korea=[["Seoul","Incheon","Anyang","Hwaseong","Gapyeong","Chuncheon","Jeongseon","Jecheon","Andong","Busan","Geoje","Tongyeong","Mokpo","Gunsan",
                "Taean","Junju","Seosan","Jeju","Daeju","Gimpo","Ansan","Dangjin","Nonsan","Geongeup","Gunpo","Uiwang","Yongin","Gwangju"],"#00FFFF"]
japan=[["Sapporo","Tokyo","Kanagawa","Kyoto","Osaka","Hukuoka","Shizuoka","Yamanashi","Saga","Nagasaki","Chiba"],"#7CFC00"]
china=[["Beijing"],"#CD853F"]
england=[["London","Oxford"],"#6495ED"]
belgium=[["Brussel"],"#87CEFA"]
france=[["Paris"],"#DCDCDC"]
swiss=[["Bern","Intelaken","Lauterbrunnen","Grindelwald"],"#FF6347"]
germany=[["Munich"],"#808000"]
czech_rep=[["Praha"],"#BDB76B"]
austria=[["Wien"],"#FFB6C1"]
hungary=[["Budapest"],"#DA70D6"]
italy=[["Firenze","Roma","Napoli","Pompei","Pisa","Venice"],"#FFD700"]
usa=[["San Diego","Hawaii"],"#D2691E"]
var countries = [rep_of_korea,japan,china,england,belgium,france,swiss,germany,czech_rep,austria,hungary,italy,usa]

edge = {
    1: [2,3,10,20],
    2: [1,3,4,29,30,38,40,41,60],
    3: [1,2,4,5,7,15,16,17,20,21,25,26,27,28],
    4: [1,2,3,5,6,15,16,17,18,19,20,22,23,24],
    5: [3,4],
    6: [4],
    7: [8],
    8: [9],
    9: [10],
    10: [1,11],
    11: [12],
    12: [13],
    13: [14],
    14: [15],
    15: [3,4],
    16: [1,3,4,24],
    17: [3,4],
    18: [20],
    19: [4],
    20: [1,3,4,30],
    21: [3],
    22: [4],
    23: [4],
    24: [3,4,16],
    25: [3],
    26: [3],
    27: [3],
    28: [3],
    29: [30],
    30: [2,20,29,31,33,34,35,36,37,39,59],
    31: [30],
    32: [30],
    33: [32],
    34: [30],
    35: [30],
    36: [30],
    37: [30],
    38: [2],
    39: [30],
    40: [2],
    41: [42,43],
    42: [41],
    43: [44],
    44: [46],
    45: [47],
    46: [45,47,48,49],
    47: [46],
    48: [46],
    49: [50],
    50: [51],
    51: [52],
    52: [53],
    53: [54,57,58],
    54: [2,55],
    55: [56],
    56: [54],
    57: [53],
    58: [53],
    59: [30],
    60: [2]
}

// create an array with nodes and edges
var nodes = [];
var idx = 1;
for (var i in countries){
    for (var y in countries[i][0]){
        nodes.push({id:idx,label:countries[i][0][y],color:countries[i][1]});
        idx++;
    }
}

var edges = [];
idx = 1;
for (var i in edge){
    for (var j in edge[i]){
        edges.push({from: idx, to: edge[i][j], arrows:"to"})
    }
    idx++;
}
