const unknown_map = "https://i.imgur.com/ep2uq8W.png";

const mapping = [
    ["c1m1_hotel", "https://i.imgur.com/t2uTC25.png"],
    ["c1m2_streets", "https://i.imgur.com/dZsUq3W.png"],
    ["c1m3_mall", "https://i.imgur.com/RnrjI3u.png"],
    ["c1m4_atrium", "https://i.imgur.com/oRRJNZT.png"],

    ["c2m1_highway", "https://i.imgur.com/n1g9NjP.png"],
    ["c2m2_fairgrounds", "https://i.imgur.com/yTV3Qeo.png"],
    ["c2m3_coaster", "https://i.imgur.com/hIVbejC.png"],
    ["c2m4_barns", "https://i.imgur.com/Sas5mFj.png"],
    ["c2m5_concert", "https://i.imgur.com/qg7LUka.png"],

    ["c3m1_plankcountry", "https://i.imgur.com/llVq9Pe.png"],
    ["c3m2_swamp", "https://i.imgur.com/DUjFRJO.png"],
    ["c3m3_shantytown", "https://i.imgur.com/JNsfKFC.png"],
    ["c3m4_plantation", "https://i.imgur.com/vT92HYZ.png"],

    ["c4m1_milltown_a", "https://i.imgur.com/y4C8nya.png"],
    ["c4m2_sugarmill_a", "https://i.imgur.com/31sf6nn.png"],
    ["c4m3_sugarmill_b", "https://i.imgur.com/Fjpb0c2.png"],
    ["c4m4_milltown_b", "https://i.imgur.com/JBzdzlz.png"],
    ["c4m5_milltown_escape", "https://i.imgur.com/yzrbvVA.png"],

    ["c5m1_waterfront", "https://i.imgur.com/3AtWeJA.png"],
    ["c5m2_park", "https://i.imgur.com/PXkArij.png"],
    ["c5m3_cemetery", "https://i.imgur.com/lWXT6ET.png"],
    ["c5m4_quarter", "https://i.imgur.com/fKNnI1r.png"],
    ["c5m5_bridge", "https://i.imgur.com/Dao6Yzp.png"],

    ["c6m1_riverbank", "https://i.imgur.com/gwdWKyq.png"],
    ["c6m2_bedlam", "https://i.imgur.com/WdhgGdt.png"],
    ["c6m3_port", "https://i.imgur.com/3cCSVe2.png"],

    ["c7m1_docks", "https://i.imgur.com/VZpPHB0.png"],
    ["c7m2_barge", "https://i.imgur.com/TAIVIVG.png"],
    ["c7m3_port", "https://i.imgur.com/363VKAU.png"],

    ["c8m1_apartment", "https://i.imgur.com/BFLR2Mk.png"],
    ["c8m2_subway", "https://i.imgur.com/LXrI8fD.png"],
    ["c8m3_sewers", "https://i.imgur.com/kdW9SxU.png"],
    ["c8m4_interior", "https://i.imgur.com/0ey9Y7Z.png"],
    ["c8m5_rooftop", "https://i.imgur.com/74sRgby.png"],

    ["c9m1_alleys", "https://i.imgur.com/XCbc96r.png"],
    ["c9m2_lots", "https://i.imgur.com/kAmwoDY.png"],

    ["c10m1_caves", "https://i.imgur.com/tnto2Vn.png"],
    ["c10m2_drainage", "https://i.imgur.com/visrM0x.png"],
    ["c10m3_ranchhouse", "https://i.imgur.com/qEFG7SI.png"],
    ["c10m4_mainstreet", "https://i.imgur.com/ajyHbJ1.png"],
    ["c10m5_houseboat", "https://i.imgur.com/ZppqyuH.png"],

    ["c11m1_greenhouse", "https://i.imgur.com/mFqrcdS.png"],
    ["c11m2_offices", "https://i.imgur.com/DeVNwyl.png"],
    ["c11m3_garage", "https://i.imgur.com/MR7pcLt.png"],
    ["c11m4_terminal", "https://i.imgur.com/Fq0Huo5.png"],
    ["c11m5_runway", "https://i.imgur.com/2JnHsAk.png"],

    ["c12m1_hilltop", "https://i.imgur.com/WcYu6vE.png"],
    ["c12m2_traintunnel", "https://i.imgur.com/2xX19Z7.png"],
    ["c12m3_bridge", "https://i.imgur.com/7odwnCi.png"],
    ["c12m4_barn", "https://i.imgur.com/8k7bhEK.png"],
    ["c12m5_cornfield", "https://i.imgur.com/hLLz7Cf.png"],

    ["c13m1_alpinecreek", "https://i.imgur.com/Yyggwcd.png"],
    ["c13m2_southpinestream", "https://i.imgur.com/MhJt4PW.png"],
    ["c13m3_memorialbridge", "https://i.imgur.com/q4XjWYP.png"],
    ["c13m4_cutthroatcreek", "https://i.imgur.com/M09FYw6.png"],
];

const getMapUrl = (mapName) => {
    const map = mapping.find(([name]) => name === mapName);
    if (!map) return unknown_map;
    return map[1];
};

export { getMapUrl, unknown_map };
