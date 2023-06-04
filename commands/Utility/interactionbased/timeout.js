module.exports = {
    name: "timeout",
    type: "interaction",
    prototype: "slash",
    code: `$timeoutMember[$guildId;$findMember[$guildID;$slashOption[user];$slashOption[howlong];no;$slashOption[reason]]
    $channelSendMessage[$ChannelID;Muted <@$findMember[$slashOption[user];yes]>
    $onlyIf[$memberExists[$findUser[$slashOption[user]]]==true;Can't find a member with this ID/name/mention in the server]
    $onlyIf[$findUser[$slashOption[user]]!=$ownerID;Manz i cannot do nun to the server owner]
    $onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$findUser[$slashOption[user]]]]; You can't mute someone with higher or the same roles as you]
    $onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$findUser[$slashOption[user]]]];I can't mute someone with higher or the same roles as me (ps this could be wrong i prob just didnt find the user)]
    $onlyPerms[kickmembers;You actually need kick perms to timeout]
    $onlyBotPerms[kickmembers;I need kick perms]
    $suppressErrors[{newEmbed: {title:Error}{description:There shouldn't be an error but oh well}{footer: if this error continues feel free to contact a dev}{color:E6E6FA}{options:{ephemeral}}{extraOptions:{interaction}}}]
    `
  }