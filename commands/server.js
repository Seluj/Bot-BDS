const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('server')
        .setDescription('Donne des informations à propos du serveur'),
    async execute(interaction) {
        // interaction.guild is the object representing the Guild in which the command was run
        await interaction.reply({content:`This server is ${interaction.guild.name} and has ${interaction.guild.memberCount} members.`, ephemeral: true});
    },
};