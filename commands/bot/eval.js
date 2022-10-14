const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

const db = require('fera.db')

module.exports = {
    command: {
        reqPermMember: "NONE",
        reqPermBot: "NONE",
        developer: true
        /* Yetki Gerekmiyorsa
        reqPermMember: "NONE",
        reqPermBot: "NONE"*/
    },
    data: new SlashCommandBuilder()
        .setName('eval')
        .setDescription("Sahibin kod denemesini sağlar.")
        .addStringOption(option => option.setName('kod').setDescription('Bir kod belirt.')),
    async run(interaction) {

        try {
            const code = interaction.options.getString('kod');
            var evaled = eval(code);
       
            if (typeof evaled !== "string")
              evaled = require("util").inspect(evaled);
            let Embed = new EmbedBuilder()
                                  .setDescription("```js\n" + clean(evaled) + "```")
          return interaction.reply({ embeds: [Embed], ephemeral: true })
          } catch (err) {
            interaction.reply(`\`\`\`xl\n${clean(err)}\n\`\`\``);
          }
      function clean(text) {
        if (typeof(text) === "string")
          return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
        else
            return text;
      }

    }
}
