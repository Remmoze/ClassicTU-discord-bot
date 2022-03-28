import fetch from "node-fetch";
import { parseServerData } from "./htmlparser.js";
import { createEmbed, defaultEmbed } from "./embedMaker.js";

const getUrl = (serverId) => {
    return `https://www.gs4u.net/ru/webmod/frame/s/${serverId}.html`;
};

const fetchServerData = async (serverId) => {
    const url = getUrl(serverId);
    return await fetch(url)
        .then((resp) => resp.text())
        .catch((e) => {
            console.log(`FAILED TO FETCH (${serverId}):`, e.message);
            return null;
        });
};

const fetchEmbed = async (serverId) => {
    let html = await fetchServerData(serverId);
    if (html === null) {
        return defaultEmbed();
    }
    let data = parseServerData(html);
    return createEmbed(data);
};

export { fetchEmbed };
