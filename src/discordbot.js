import { Client, Intents, MessageEmbed } from "discord.js";
import { initCommands } from "./initCommands.js";

const createBot = (token) => {
    return new Promise((resolve) => {
        const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

        client.on("ready", () => {
            console.log(`Logged in as ${client.user.tag}!`);
            //initCommands();
            resolve(client);
        });

        client.on("interactionCreate", async (interaction) => {
            if (!interaction.isCommand()) return;

            if (interaction.commandName === "ping") {
                await interaction.reply("Pong!");
            } else if (interaction.commandName === "die") {
                await interaction.reply("im ded now.");
                client.destroy();
                process.exit(0);
            }
        });

        client.login(token);
    });
};

const formatPlayerList = (players, playerCount) => {
    return [
        { name: "Игроки: " + playerCount, value: players.slice(0, players.length / 3).join("\n"), inline: true },
        { name: "\u200b", value: players.slice(players.length / 3, (2 * players.length) / 3).join("\n"), inline: true },
        { name: "\u200b", value: players.slice((2 * players.length) / 3).join("\n"), inline: true },
    ];
};

const createEmbed = (data) => {
    return (
        new MessageEmbed()
            .setColor("#0099ff")
            .setAuthor({
                name: "CLASSICTU",
                iconURL: "https://i.imgur.com/E27aTub.png",
                url: "https://vk.com/classictu",
            })
            .setTitle(data.serverName)
            .setURL("https://www.gs4u.net/ru/s/147379.html")
            .addField(data.IP[0], data.IP[1], true)
            .addField(data.location[0], data.location[1], true)
            .addField("\u200b", "\u200b")
            //.addField("players", data.players.join("\n"), true)
            .addFields(...formatPlayerList(data.players, data.playerCount[1]))
    );
};

export { createBot, createEmbed };
//https://i.imgur.com/E27aTub.png
