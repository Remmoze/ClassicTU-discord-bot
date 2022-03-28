import { createBot } from "./discordbot.js";
import "dotenv/config";

import ChannelManager from "./ChannelManager.js";

const main = async () => {
    let client = await createBot(process.env.TOKEN);
    let CM = new ChannelManager(client);

    await CM.loadConfigServers();
    await CM.updateAll();
};

main();
