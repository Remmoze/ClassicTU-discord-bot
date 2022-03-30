import { createEmbed, defaultEmbed } from "./embedMaker.js";

import { queryGameServerInfo, queryGameServerPlayer } from "steam-server-query";

import { getMapUrl } from "./mapsUrls.js";

const fetchServerData = async (serverIp) => {
    return await Promise.all([queryGameServerInfo(serverIp), queryGameServerPlayer(serverIp)]).catch((e) => {
        console.log(`FAILED TO FETCH (${serverIp}):`, e.message);
        return null;
    });
};

const parseServerData = (info, players, serverIp) => {
    return {
        name: info.name,
        ip: serverIp,
        location: "Россия, Москва",
        playerCount: info.players + " / " + info.maxPlayers,
        mapName: info.map,
        mapIcon: getMapUrl(info.map),
        players: players.players.map((player) => player.name),
        url: "https://www.gs4u.net/ru/s/147379.html",
        author: {
            name: "CLASSICTU",
            iconURL: "https://i.imgur.com/E27aTub.png",
            url: "https://vk.com/classictu",
        },
    };
};

const fetchEmbed = async (serverIp) => {
    let resp = await fetchServerData(serverIp);
    if (resp === null) {
        return defaultEmbed(serverIp);
    }
    let data = parseServerData(...resp, serverIp);
    return createEmbed(data);
};

const fetchParsedServerData = async (serverIp) => {
    let resp = await fetchServerData(serverIp);
    return resp === null ? null : parseServerData(...resp, serverIp);
};

export { fetchEmbed, fetchParsedServerData };
