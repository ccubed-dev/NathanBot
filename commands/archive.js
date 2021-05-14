const util = require('../util');
const main = require('../index');
const discord = main.discord;
const logger = main.logger;

module.exports = {
    "data": {
        "name": "archive",
        "description": "Archives a channel or category and stores it in the Firebase backend.",
        // "permissions": [ 

        //     {
        //         "id": "ROLE_ID_1",
        //         "type": 1,
        //         "permission": true,
        //     },

        //     {
        //         "id": "ROLE_ID_1",
        //         "type": 1,
        //         "permission": true,
        //     }

        // ],

        "type": 2,
        // "options": [

        //     {
        //         "name": "channel",
        //         "description": "Archives the current channel this command was used in unless specified",
        //         "type": 1,
        //         "options": [{
        //             "name": "selectedChannel",
        //             "description": "The channel to archive.",
        //             "type": 7,
        //             "required": false
        //         }]
        //     }, 

        //     {
        //         "name": "category",
        //         "description": "Archives the current category this command was used in unless specified.",
        //         "type": 1,
        //         "options": [{
        //             "name": "selectedCategory",
        //             "description": "The category to archive.",
        //             "type": 7,
        //             "required": false
        //         }]
        //     },

        // ],
    },

    execute: (interaction) => {
        util.sendMessage(interaction, "hi how r u");    
    
    }

}