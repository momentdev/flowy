const { SlashCommandBuilder, EmbedBuilder, version } = require("discord.js");
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
        .setName('istatistik')
        .setDescription("Bot hakkında istatistikler verilir."),
    async run(interaction) {
        const embed = new EmbedBuilder()
        .setDescription(`
**Bot sahipleri**: <@!973849939253805086> - \`973849939253805086\`
**Bot gecikmesi:** ${client.ws.ping}
**Kullanıcı sayısı:** ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)}
**Sunucu sayısı:** ${client.guilds.cache.size}
**Discord.js sürümü:** v${version}
**Uptime süresi:** ${moment
    .duration(client.uptime)}
        `)
        .setTimestamp()
        .setColor("DarkPurple")
        interaction.reply({ embeds: [embed] })
    }
}
