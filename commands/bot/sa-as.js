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
        .setName('sa-as')
        .setDescription("Selamlama sistemi!")
        .addStringOption(option=> 
                option.setName('sistem')
                    .setDescription('Sistem durumunu belirt.')
                    .setRequired(true)
                    .addChoices(
                        { name: 'Açık', value: 'Açık' },
                        { name: 'Kapalı', value: 'Kapalı' }
                    )
            )
,    async run(interaction) {
    const string = interaction.options.getString('sistem');
    if(string == "Açık") {
        if(db.fetch(`saas.${interaction.guild.id}`) == true) {
            interaction.reply({ content: 'Sistem zaten açık durumda!', ephemeral: true })
        }
        db.set(`saas.${interaction.guild.id}`, true)
        interaction.reply({ content: 'Sistem başarıyla açıldı!', ephemeral: true })
    }
    if(string == "Kapalı") {
        if(!db.fetch(`saas.${interaction.guild.id}`)) {
            interaction.reply({ content: 'Sistem zaten kapalı durumda!', ephemeral: true })
        }
        db.delete(`saas.${interaction.guild.id}`)
        interaction.reply({ content: 'Sistem başarıyla kapatıldı!', ephemeral: true })
    }
    }
}
