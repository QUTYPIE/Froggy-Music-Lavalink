const chalk = require('chalk');
const { MessageEmbed } = require('discord.js');

module.exports = { 
    config: {
        name: "247",
        aliases: [],
        description: "Make bot 24/7 in voice channel!",
        accessableby: "Member",
        category: "music"
    },
    run: async (client, message, args, user) => {
        console.log(chalk.magenta(`[COMMAND] 24/7 used by ${message.author.tag} from ${message.guild.name}`));
        const msg = await message.channel.send(`<a:loading:850828723988856902> **Loading please wait...**`);

		const player = client.manager.get(message.guild.id);
		if (!player) return msg.edit("No song/s currently playing with in this guild.");

        const { channel } = message.member.voice;
        if (!channel || message.member.voice.channel !== message.guild.me.voice.channel) return msg.edit("You need to be in a same/voice channel.");

        try {
            if (user && user.isPremium) {
        if (player.twentyFourSeven) {
            player.twentyFourSeven = false;
            const off = new MessageEmbed()
            .setDescription("\`🌙\` | **Mode 24/7 has been:** `Deactivated`")
            .setColor('#fcc700');

            msg.edit({ content: " ", embeds: [off] });
        } else {
            player.twentyFourSeven = true;
            const on = new MessageEmbed()
            .setDescription("\`🌕\` | **Mode 24/7 has been:** `Activated`")
            .setColor('#fcc700');

            msg.edit({ content: " ", embeds: [on] });
        }
    } else {
        const Premiumed = new MessageEmbed()
            .setAuthor({ name: "Only Premium!", iconURL: client.user.displayAvatarURL() })
            .setDescription(`*You need to be a premium to use this command.*`)
            .setColor('#fcc700')
            .setTimestamp()

        return msg.edit({ embeds: [Premiumed] });
        }
    } catch (err) {
        console.log(err)
        msg.edit({ content: "Something went wrong, try again later." })
        }
    }
};