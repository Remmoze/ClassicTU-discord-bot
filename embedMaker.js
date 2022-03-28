import { MessageEmbed } from "discord.js";

import { unknown_map } from "./mapsUrls.js";

/*
Player list formatting:
0 -> No players
1 -> [1, 0, 0]
2 -> [2, 0, 0]
3 -> [2, 1, 0]
4 -> [2, 2, 0]
5 -> [2, 2, 1]
6 -> [2, 2, 2]
7 -> [3, 2, 2]
8 -> [3, 3, 2]
9 -> [3, 3, 3]
10 -> [4, 3, 3]
11 -> [4, 4, 3]
...
*/

const slicePlayers = (players, playerCount) => {
    const playersCopy = players.map((player) => player + "\u200B".repeat(5));

    const playersList = [];

    for (let column = 0; column < 3; column++) {
        playersList[column] = playersCopy.splice(0, 2);
    }

    for (let rotation = 0; playersCopy.length > 0; rotation = (rotation + 1) % 3) {
        playersList[rotation].push(playersCopy.shift());
    }

    /*
    next: for (let i = 0; i < players.length; i++) {
        for (let j = 0; j < 3; j++) {
            if (playersList[j].length < 2) {
                playersList[j].push(players[i]);
                continue next;
            }
        }
        playersList[i % 3].push(players[i]);
    }
    */
    return playersList;
};

const formatPlayerList = (players, playerCount) => {
    if (players.length === 0) {
        return [
            {
                name: "Игроки: " + playerCount,
                value: "Нет игроков.",
                inline: true,
            },
        ];
    }
    return slicePlayers(players).map((array, i) => ({
        name: i === 0 ? "Игроки: " + playerCount : "\u200b",
        value: array.length === 0 ? "\u200b" : array.join("\n"),
        inline: true,
    }));
};

const createEmbed = (props) => {
    return new MessageEmbed()
        .setColor("#0099ff")
        .setAuthor({
            name: props?.author.name ?? "Unknown",
            iconURL: props?.author.iconURL ?? unknown_map,
            url: props?.author.url ?? unknown_map,
        })
        .setTitle(props.name)
        .setURL(props.url)
        .addField("IP/Хост:", props.ip, true)
        .addField("Расположение:", props.location, true)
        .addField("Карта:", props.mapName, true)
        .setImage(props.mapIcon)
        .addField("\u200b", "\u200b")
        .addFields(...formatPlayerList(props.players, props.playerCount))
        .setTimestamp()
        .setFooter({ text: "Last updated", iconURL: props?.author.iconURL ?? unknown_map });
};

const defaultEmbed = (serverIp) => {
    return createEmbed({
        name: "Unknown",
        ip: serverIp,
        location: "Unknown",
        playerCount: "Unknown",
        mapName: "Unknown",
        mapIcon: unknown_map,
        players: [],
        url: "https://www.gs4u.net/ru/s/147379.html",
        author: {
            name: "CLASSICTU",
            iconURL: "https://i.imgur.com/E27aTub.png",
            url: "https://vk.com/classictu",
        },
    });
};

export { createEmbed, defaultEmbed };
