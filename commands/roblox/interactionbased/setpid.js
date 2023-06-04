module.exports = {
    name: "setplaceid",
    prototype: "slash",
    type: "interaction",
    code: `
    $channelSendMessage[$channelID;{newEmbed:{description: **Place ID has been set!**} {color: E6E6FA}}{extraOptions:{interaction}};no] 
    $setGuildVar]placeId;$message[1]]
    $onlyif[$hasRoles[$guildID;$authorID;$getGuildVar[AdminRole]]==true;{newEmbed:{description: You are required to have the <@&$getGuildVar[AdminRole]> to continue}{color:C3A78E}}{options:{ephemeral}}{extraOptions:{interaction}}]
    $onlyif[$getGuildVar[AdminRole]!=Null;{newEmbed: {description: You must first use the /setup command to setup the bot! pretty self explanitory}{color:C3A78E}}{options:{ephemeral}}{extraOptions:{interaction}}]
    $suppressErrors[{newEmbed: {title:Error}{description:There shouldn't be an error here but oh well.}{footer: if this error continues feel free to contact a dev}{color:E6E6FA}{options:{ephemeral}}{extraOptions:{interaction}}}]
    `
}