module.exports = {
    name: "timeout",
    aliases: "mute",
    code: `$timeoutMember[$guildId;$findMember[$message[1]];$message[2];no;Timed Out]
    $channelSendMessage[$ChannelID;Muted <@$findMember[$message[1];yes]>
    $onlyIf[$memberExists[$findUser[$message[1]]]==true;Can't find a member with this ID/name/mention in the server]
    $onlyIf[$findUser[$message[1]]!=$ownerID;Manz i cannot do nun to the server owner]
    $onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$findUser[$message[1]]]]; You can't mute someone with higher or the same roles as you]
    $onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$findUser[$message[1]]]];I can't mute someone with higher or the same roles as me (ps this could be wrong i prob just didnt find the user)]
    $onlyPerms[kickmembers;User Missing permission:mutemembers]
    $onlyBotPerms[kickmembers;Bot Missing permission:mutemembers]
  $argsCheck[>1;How long should i timeout for???]
  $suppressErrors[Error bruh]
    `
  }