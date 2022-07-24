const { MessageEmbed, Message } = require("discord.js");
const client = require("../../index");
const vrole = `998720892257452104` // ROLE ID FOR VERIFICATION
client.on("interactionCreate", async (interaction) => {
    await interaction.deferReply({ ephemeral: true }).catch(() => {});
    if (!interaction.isButton()) return

    if(interaction.customId === "verify") {
        const guild = client.guilds.cache.get(`998237724949622863`) // SERVER ID HERE
        if(guild ===undefined) return console.error(`Guild not found `)
        const user = await guild.members.fetch(interaction.user.id).catch((e) => {});

         const useri = user.roles.cache.has(vrole) // ROLE FOR VERIFICATION
         if(useri ===true){
           return interaction.followUp(`You have already got access to ${interaction.guild.name}`)
         }
         else {
            interaction.member.roles.add(vrole, 'Verification Role')
            return interaction.followUp(`You have been successfully verifed !`)
         }
    }


})


// DEVELOPED BY AAYAN#5243
// JOIN SERVER FOR HELP https://discord.gg/Z4tKgfgj9Y
