const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const moment = require("moment");
module.exports = {
    command: {
        reqPermMember: "NONE",
        reqPermBot: "NONE"
        /* Yetki Gerekmiyorsa
        reqPermMember: "NONE",
        reqPermBot: "NONE"*/
    },
    data: new SlashCommandBuilder()
        .setName('kullanıcı-bilgi')
        .setDescription("Etiketlenen kullanıcının bilgilerini gösterir")
        .addUserOption(option =>
            option.setName('üye')
            .setDescription('Bir kişiyi etiketle, eğer etiketlemezsen kendinin bilgilerini görürsün.')
            .setRequired(true)),
    async run(interaction) {
        const mention = interaction.options.getUser('üye');
      console.log(interaction.member)

      const embed = new EmbedBuilder()
        .setDescription(`
Kullanıcı adı: ${mention.username}

Etiketi: #${mention.discriminator}

ID: ${mention.id}

Oluşturulma tarihi: ${moment(mention.createdTimestamp).format('LLLL')}
        `)
        .setAuthor({ text: client.user.username, iconURL: client.user.avatarURL() })
        .setFooter({ text: `${interaction.member.username} tarafından istendi.` })

        .setColor('F9BEDE')
        interaction.reply({ embeds: [embed] })
    }
}
