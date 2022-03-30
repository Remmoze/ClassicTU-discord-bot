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

        client.on("rateLimit", (data) => {
            console.log("Reached the rate limit!");
            console.log("timeout:", data.timeout);
            console.log("limit:", data.limit);
        });

        client.login(token);
    });
};

export { createBot };
