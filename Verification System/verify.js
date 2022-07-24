const { Message, Client, MessageEmbed,MessageActionRow,MessageButton } = require("discord.js");


module.exports = {
    name: "verify",
    aliases: ['v'],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        const aayan = message.guild.ownerId
if(!aayan.includes(message.author.id)) return
const embed = new MessageEmbed()
.setAuthor(`Welcome to ${message.guild.name}`)
.setDescription(`To access on ${message.guild.name}, you need to pass the verification first, Press the verify button below`) // YOU MAY CHANGE IT 
.setFooter(`DEVELOPED BY AAYAN#5243`)
.setColor(`DARK_BUT_NOT_BLACK`)
// BUTTONS
const rowo = new MessageActionRow()
.addComponents(
    new MessageButton()
        .setCustomId('verify')
        .setEmoji(`<:emote:1000664711530041385> `)
        .setStyle('SUCCESS'),
  
)
message.channel.send({embeds: [embed], components: [rowo]})
    }}


// DEVELOPED BY AAYAN#5243
