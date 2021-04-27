module.exports = {
    
    /**
     * 
     * Helper function to make sending messages not look like shit.
     * 
     */
     sendMessage:(client, interaction) => {
        client.api.interactions(interaction.id, interaction.token).callback.post({
            data: {type: 4, data: {content: message} }

        });
    }

    /**
     * 
     * Helper function for sucking my dick
     * 
     */

}