import { queryGameServerInfo, queryGameServerPlayer } from "steam-server-query";

const main = async () => {
    let response = await queryGameServerInfo("46.174.48.12:27268");
    let players = await queryGameServerPlayer("46.174.48.12:27268");
    console.log(response);
    console.log(players);
};

main();
