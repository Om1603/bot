module.exports = {
    name: 'reactionrole',
    description: 'Sets up a reaction role message!',
    async execute(message, args, Discord, client) {
        if (message.member.permissions.has('MUTE_MEMBERS')) {
            const channel = '830467377036132432';
            const PurpleRole = message.guild.roles.cache.find(role => role.name === "PURPLE");
            const OrangeRole = message.guild.roles.cache.find(role => role.name === "ORANGE");
            const BlueRole = message.guild.roles.cache.find(role => role.name === "BLUE");
            const YellowRole = message.guild.roles.cache.find(role => role.name === "YELLOW");
            const GreenRole = message.guild.roles.cache.find(role => role.name === "GREEN");

            const PurpleEmoji = '💜';
            const OrangeEmoji = '🧡';
            const BlueEmoji = '💙';
            const YellowEmoji = '💛';
            const GreenEmoji = '💚';



            let embed = new Discord.MessageEmbed()
                .setColor('#e42643')
                .setTitle('Choose a Role')
                .setDescription('React on the emoji for the colour u want\n\n'
                    + `${PurpleEmoji} for Purple\n`
                    + `${OrangeEmoji} for Orange\n`
                    + `${BlueEmoji} for Blue\n`
                    + `${YellowEmoji} for Yellow\n`
                    + `${GreenEmoji} for Green\n`);

            let messageEmbed = await message.channel.send(embed);
            messageEmbed.react(PurpleEmoji);
            messageEmbed.react(OrangeEmoji);
            messageEmbed.react(BlueEmoji);
            messageEmbed.react(YellowEmoji);
            messageEmbed.react(GreenEmoji);

            client.on('messageReactionAdd', async (reaction, user) => {
                if (reaction.message.partial) await reaction.message.fetch();
                if (reaction.partial) await reaction.fetch();
                if (user.bot) return;
                if (!reaction.message.guild) return;

                if (reaction.message.channel.id == channel) {
                    if (reaction.emoji.name === PurpleEmoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.add(PurpleRole);
                    }
                    if (reaction.emoji.name === OrangeEmoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.add(OrangeRole);
                    }
                    if (reaction.emoji.name === BlueEmoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.add(BlueRole);
                    }

                    if (reaction.emoji.name === YellowEmoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.add(YellowRole);
                    }

                    if (reaction.emoji.name === GreenEmoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.add(GreenRole);
                    }


                } else {
                    return;
                }
            }

            );
            client.on('messageReactionRemove', async (reaction, user) => {
                if (reaction.message.partial) await reaction.message.fetch();
                if (reaction.partial) await reaction.fetch();
                if (user.bot) return;
                if (!reaction.message.guild) return;

                if (reaction.message.channel.id == channel) {
                    if (reaction.emoji.name === PurpleEmoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(PurpleRole);
                    }
                    if (reaction.emoji.name === OrangeEmoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(OrangeRole);
                    }
                    if (reaction.emoji.name === BlueEmoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(BlueRole);
                    }

                    if (reaction.emoji.name === YellowEmoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(YellowRole);
                    }

                    if (reaction.emoji.name === GreenEmoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(GreenRole);
                    }


                } else {
                    return;
                }
            }

            );
        } else {
            message.channel.send('Pehli fursat me nikal')
        }

    }
}