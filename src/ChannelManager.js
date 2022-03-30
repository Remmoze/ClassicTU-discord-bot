import fs from "fs";
import { fetchParsedServerData } from "./updater.js";
import { createEmbed, defaultEmbed } from "./embedMaker.js";

class ChannelManager {
    constructor(client) {
        this.client = client;
        this.servers = [];
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

    async addServer(ip, channel, name) {
        const post = await this.#getChannelPost(channel);
        this.servers.push({ ip, post, channel, name });
    }

    async loadConfigServers() {
        let data = JSON.parse(fs.readFileSync("./data/configuration.json"));
        for (const item of data.channels) {
            await this.addServer(item.server_ip, item.channel_id, item.name);
        }
    }

    async setChannelName(server, isOffline, playerCount) {
        let prefix = "💥";
        if (!isOffline) {
            if (playerCount > 4) prefix = "⭐️";
            else if (playerCount > 0) prefix = "🌝";
            else prefix = "🌚";
        }
        let channel = this.client.channels.cache.get(server.channel);
        await channel.setName(prefix + server.name);
    }

    async updateAll() {
        for (const server of this.servers) {
            let data = await fetchParsedServerData(server.ip);
            await this.setChannelName(server, data === null, data?.players.length);

            let embed = data === null ? defaultEmbed(server.ip) : createEmbed(data);

            await server.post.edit({ content: null, embeds: [embed] });
        }
    }
}

export default ChannelManager;
