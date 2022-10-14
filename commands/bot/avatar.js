const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
module.exports = {
    command: {
        reqPermMember: "NONE",
        reqPermBot: "NONE"
        /* Yetki Gerekmiyorsa
        reqPermMember: "NONE",
        reqPermBot: "NONE"*/
    },
    data: new SlashCommandBuilder()
        .setName('avatar')
        .setDescription("Kişinin avatarını gösterir.")
        .addUserOption(option =>
            option.setName('üye')
            .setDescription('Bir kişiyi etiketle!')
            .setRequired(false)),
    async run(interaction) {
            let avatar = interaction.member;
            const member = interaction.options.getUser('üye');
            if(!member) {
                let view = interaction.member
                let avatar = view
            } else {
                let view = member;
                let avatar = client.users.cache.get(view.id)
            }
            let avatarembed = new EmbedBuilder()
            .setImage (`${avatar.displayAvatarURL()}`)
            .setFooter({ text: 'Flowy' })
            await interaction.reply({ embeds: [avatarembed] })
            return;
    }
}
