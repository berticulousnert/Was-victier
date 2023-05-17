module.exports = {
    name: "setshoutchannel",
    aliases: "stc",
    code: `channelID set to <#$getGuildVar[ShoutId]>
    $setGuildVar[ShoutId;$message[1]] 
    $loop[1;{};onshout]
    $onlyif[$isNumber[$message[1]]==true;The messsage should be a channelId] 
    $onlyForIds[964024743172915220;no]
    `
}

//$onlyForIds[964024743172915220;no