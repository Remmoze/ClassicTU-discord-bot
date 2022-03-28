import { JSDOM } from "jsdom";

const parseHTML = (str) => {
    str = str.replaceAll("\n", "").replaceAll("\t", "");
    return new JSDOM(str).window.document;
};

const getValue = (htmlElement) => {
    return htmlElement.querySelector(".value").textContent.trim();
};

const getImage = (htmlElement) => {
    const img = htmlElement.querySelector("img");
    return [img.getAttribute("alt"), img.getAttribute("src")];
};

const getPlayers = (document) => {
    return Array.from(document.querySelectorAll(".other_color_text")).map((x) => x.textContent);
};

const parseServerData = (html) => {
    const document = parseHTML(html);

    const name = document.querySelector(".servernamelink").textContent.trim();
    const ip = getValue(document.querySelector(".serverhost"));
    const location = getValue(document.querySelector(".servergeo"))
        .split("\n")
        .map((x) => x.trim())
        .join(" ");

    const playerCount = getValue(document.querySelector(".serverplayerscount"));
    const [mapName, mapIcon] = getImage(document.querySelector(".servermap"));

    const players = getPlayers(document);

    return {
        name,
        ip,
        location,
        playerCount,
        mapName,
        mapIcon,
        players,
        url: "https://www.gs4u.net/ru/s/147379.html",
        author: {
            name: "CLASSICTU",
            iconURL: "https://i.imgur.com/E27aTub.png",
            url: "https://vk.com/classictu",
        },
    };
};

export { parseServerData };
