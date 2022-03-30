import { createBot } from "./src/discordbot.js";
import "dotenv/config";

import ChannelManager from "./src/ChannelManager.js";

const wait = () => new Promise((resolve) => setTimeout(resolve, 1000 * 60 * 2));

const main = async () => {
    let client = await createBot(process.env.TOKEN);
    let CM = new ChannelManager(client);

    await CM.loadConfigServers();
    while (true) {
        await CM.updateAll();
        console.log("updated");
        await wait();
    }
    //await CM.updateAll();
};

main();
