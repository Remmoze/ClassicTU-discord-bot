import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v9";

const commands = [
    {
        name: "ping",
        description: "Replies with Pong!",
    },
    {
        name: "die",
        description: "bot ded.",
    },
];

const rest = new REST({ version: "9" }).setToken(process.env.TOKEN);

const initCommands = async () => {
    try {
        console.log("Started refreshing application (/) commands.");

        await rest.put(Routes.applicationGuildCommands(process.env.BOT_ID, process.env.SERVER_ID), { body: commands });

        console.log("Successfully reloaded application (/) commands.");
    } catch (error) {
        console.error(error);
    }
};

export { initCommands };
