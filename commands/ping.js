const util = require('../util');
const main = require('../index');
const discord = main.discord;
const logger = main.logger;

module.exports = {

    "data": {
        "name": "ping",
        "description": "Pong!",
        "default_permission": true, 

        "permissions": [],

        "type": 1,
        "options": [],
    },

    execute: (interaction) => {
        util.sendMessage(interaction, "Pong!");
        logger.info("Pong!");

    }
}