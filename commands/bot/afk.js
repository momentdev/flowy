const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

const db= require("fera.db");


module.exports = {
    command: {
        reqPermMember: "NONE",
        reqPermBot: "NONE"
        /* Yetki Gerekmiyorsa
        reqPermMember: "NONE",
        reqPermBot: "NONE"*/
    },
    data: new SlashCommandBuilder()
        .setName('afk')
        .setDescription("Afk olmanızı sağlar.")
        .addStringOption(option => option.setName('sebep').setDescription('Bir sebep belirtmelisin!')),
    async run(interaction) {

        const sebep = interaction.options.getString('sebep')
        interaction.reply(`Artık **${sebep}** sebebinden dolayı Afk'sın, bir mesaj atınca seni Afk modundan çıkartacağım.`)
        db.set(`afk_${interaction.member.id}`, `${sebep}`)
        db.set(`afkkullanicisi_${interaction.member.id}`, `${interaction.member.id}`)
    }
}
