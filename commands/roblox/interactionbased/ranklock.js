module.exports = {
    name: "ranklock",
    prototype: "slash",
    type: "interaction",
    code: `
    $channelSendMessage[$channelID;{newEmbed:{description: **RankLock has been set!**} {color: E6E6FA}}{extraOptions:{interaction}};no] 
    $setGuildVar[RankLimit;$slashOption[number]]
    $onlyif[$hasRoles[$guildID;$authorID;$getGuildVar[AdminRole]]==true;{newEmbed:{description: You are required to have the <@&$getGuildVar[AdminRole]> to continue}{color:C3A78E}}{options:{ephemeral}}{extraOptions:{interaction}}]
    $onlyif[$getGuildVar[AdminRole]!=Null;{newEmbed: {description: You must first use the /setup command to setup the bot! pretty self explanitory}{color:C3A78E}}{options:{ephemeral}}{extraOptions:{interaction}}]
    $suppressErrors

    `
}