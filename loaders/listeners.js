const db = require('fera.db')
const ai = require("only.ai")
module.exports = async (client) => {

    client.on('ready', () => {
        console.log("Aktifim")
    });
    client.on('messageCreate', async(message) => {
        const kisiaq = db.get(`afkkullanicisi_${message.author.id}`)
        const sebepppp = db.get(`afk_${kisiaq}`)
        if (message.mentions.users.some(u => u.id == kisiaq)) {
          message.reply(`Etiketlediğin kişi ${sebepppp} sebebinden dolayı afk.`)
        }
    }) 
    client.on('messageCreate', async(message) => {
        const kisiaq = db.get(`afkkullanicisi_${message.author.id}`)
        if(message.author.id == kisiaq) {
            message.reply('Başarıyla afk modundan çıkış yaptın.')
            db.delete(`afk_${message.author.id}`)
            db.delete(`afkkullanicisi_${message.author.id}`)
        }
    })        
    client.on('messageCreate', async(message) => {
        if(message.content == 'sa')
        var data = db.fetch(`saas.${message.guild.id}`)
        if(data) {
            message.reply('Aleyküm selam hoşgeldin!')
        } else return
    })  
}
