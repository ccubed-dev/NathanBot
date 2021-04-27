module.exports = {
    "data": {
        "name": "archive",
        "description": "Archives a channel or category and stores it in the Firebase backend.",
        "options": [
            {
                "name": "channel",
                "description": "Archives the current channel this command was used in unless specified",
                "type": 1,
                "options": [{
                    "name": "selectedChannel",
                    "description": "The channel to archive.",
                    "type": 7,
                    "required": false
                }]
            }, 

            {
                "name": "category",
                "description": "Archives the current category this command was used in unless specified.",
                "type": 1,
                "options": [{
                    "name": "selectedCategory",
                    "description": "The category to archive.",
                    "type": 7,
                    "required": false
                }]

            }
        ]

    },

    execute: (client, interaction) => {
        helper.sendMessage(interaction, "hi how r u");    
    
    }

}