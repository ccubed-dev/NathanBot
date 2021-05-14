const util = require('../util');
const main = require('../index');
const discord = main.discord;
const logger = main.logger;

module.exports = {
    "data": {
        "name": "record",
        "description": "Used to record a user in a voice channel that this bot is connected to.",
        "default_permission": false, //By default, nobody has permission if set to false

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
        //         "name": "start",
        //         "description": "Start the record for a specified user, if a recording hasn't already begun.",
        //         "type": 1,
        //         "options": [
        //             {
        //                 "name": "targetUser",
        //                 "description": "The user to start the recording for.",
        //                 "type": 6,
        //                 "required": true
        //             },
        //         ],
        //     }, 

        //     {
        //         "name": "stop",
        //         "description": "Stop the record for a specified user, if a recording for that user is in progress.",
        //         "type": 1,
        //         "options": [
        //             {
        //                 "name": "targetUser",
        //                 "description": "The user to stop the recording for.",
        //                 "type": 6,
        //                 "required": true
        //             },
        //         ],
        //     },

        // ],
    },

    execute: (interaction) => {
        let member = interaction.member;
        if(member.voice) {
            util.sendMessage(interaction, "The selected user is in a voice channel!");

        } else 
            util.sendMessage(interaction, "The selected user is not in a voice channel!");

    }
}