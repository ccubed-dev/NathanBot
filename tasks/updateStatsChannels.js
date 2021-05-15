const util = require('../util');
const main = require('../index');
const config = require('../config.json');
const discord = main.discord;
const logger = main.logger;

module.exports = {

    // How long to wait in between calls to this tasks execute(), in milliseconds.
    interval: 1000 * 20,
    
    execute: () =>{
        let server = discord.guilds.cache.get(config.server);
        let members = server.members.cache;

        let total = members.size;
        let online = members.filter(member => member.presence.status === "online").size;
        let listening = members.filter(member => member.presence.activities.length > 0 && member.presence.activities[0].type === "LISTENING").size;
        let gaming = members.filter(member => member.presence.activities.length > 0 && member.presence.activities[0].type === "PLAYING").size;

        discord.user.setPresence({
            status: "dnd",
            activity: {
                name: `over ${total} people.`,
                type: "WATCHING"}
                
            });

        discord.channels.fetch(config.statistics.members)
            .then(channel => { channel.setName(`👥 Members: ${total}`) });

        discord.channels.fetch(config.statistics.online)
            .then(channel => { channel.setName(`🟢 Online: ${online}`) });

        discord.channels.fetch(config.statistics.music)
            .then(channel => { channel.setName(`🎵 Jamming Out: ${listening}`) });

        discord.channels.fetch(config.statistics.gaming)
            .then(channel => { channel.setName(`🎮 Gaming: ${gaming}`) });

            
        logger.info("Updated visible statistics!");

    }
} 