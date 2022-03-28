import { createBot } from "./discordbot.js";
import "dotenv/config";

import ChannelManager from "./ChannelManager.js";

const wait = () => new Promise((resolve) => setTimeout(resolve, 1000 * 60 * 2));

const main = async () => {
    let client = await createBot(process.env.TOKEN);
    let CM = new ChannelManager(client);

    await CM.loadConfigServers();
    while (true) {
        CM.updateAll();
        console.log("updated");
        await wait();
    }
    //await CM.updateAll();
};

main();
