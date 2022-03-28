import { Message } from "discord.js";
import fs from "fs";
import { fetchEmbed } from "./updater.js";

class ChannelManager {
    #servers = [];

    constructor(client) {
        this.client = client;
    }

    async #getChannelPost(channelId) {
        let channel = await this.client.channels.fetch(channelId);
        let messages = Array.from(await channel.messages.fetch({ limit: 50 })).map((x) => x[1]);
        let post = null;
        for (const message of messages) {
            if (message.author.id === process.env.BOT_ID) {
                post = message;
                break;
            }
        }
        if (post === null) {
            post = await channel.send("Initial message");
        }

        return post;
    }

    async addServer(serverId, channelId) {
        const post = await this.#getChannelPost(channelId);
        this.#servers.push({ serverId, post });
    }

    async loadConfigServers() {
        let data = JSON.parse(fs.readFileSync("./configuration.json"));
        for (const item of data.channels) {
            await this.addServer(item.server_id, item.channel_id);
        }
    }

    async updateAll() {
        for (const server of this.#servers) {
            let embed = await fetchEmbed(server.serverId);
            server.post.edit({ content: null, embeds: [embed] });
        }
    }
}

export default ChannelManager;
