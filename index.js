const config = require('./config.json');
const fs = require('fs');
const helper = require('./helper.js');

// const firebaseAdmin = require('firebase-admin');
// firebaseAdmin.initializeApp( {credential: config.firebase} );
// const firebase = admin.firestore();

const discordAdmin = require('discord.js');
const discord = new discordAdmin.Client();

let commands = [];  

function main() {
    discord.once('ready', () => {
        discord.user.setPresence({
            status: "dnd",
            activity: {
                name: "Loading bot...", 
                type: "WATCHING"

            }, type: "WATCHING" });

        printTime();
        loadCommands();
        handleCommands();
        setInterval(updateStats, 10000);
        setInterval(printTime, 3600000);

        console.log("Bot loaded!");
    });

    discord.login(config.token);
}

function loadCommands() {
    console.log("Loading commands!");
    for(const file of fs.readdirSync('./commands').filter(file => file.endsWith('.js') && file != 'template.js') ) {
        const command = require(`./commands/${file}`);
        discord.api.applications(discord.user.id).guilds(config.server).commands.post(command);
        commands.push(command);
        
        console.log(`Loaded command from file: ./commands/${file}`);
    }
}

function handleCommands() {
    console.log("Registering command interaction create listener!");
    discord.ws.on('INTERACTION_CREATE', async interaction => {
        const command = interaction.data.name.toLowerCase();
        const args = interaction.data.options;
        console.log(interaction.data.name);
        for(const cmd of commands) {
            if(cmd.data.name == command) {
                console.log("Processing command: " + command);
                cmd.execute(helper, interaction);
                break;

            } else
                continue;
    
        }
    });
}

function updateStats() {
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

    //console.log(`online: ${online} total: ${total} music: ${listening} gaming: ${gaming}`);
} 

function printTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    console.log(`${h}:${m}:${s}`);

}

main();