module.exports = {
    name: "setgroupid",
    aliases: "setgid",
    code: `$title[Success!!!!! AHHHH] 
    $description[The Group_ID has been successfully been set to **$getGuildVar[ServerId]**]
    $color[#C3A78E]
    $wait[1s]
    $setGuildVar[ServerId;$message[1]]
    $onlyif[$isNumber[$message[1]]==true;{newEmbed: {description:> **A GROUP_ID is a integer how did you find a string? :)**}{color:C3A78E}}]
    $onlyif[$message[1]!=;{newEmbed: {description:> **This cannot be left empty :)**}{color:C3A78E}}]
    $onlyif[$hasRoles[$guildID;$authorID;$getGuildVar[AdminRole]]==true;{newEmbed:{description: You are required to have the <@&$getGuildVar[AdminRole]> to continue}{color:C3A78E}}]
    $onlyif[$getGuildVar[AdminRole]!=Null;{newEmbed: {description: You must first use the /setup command to setup the bot! pretty self explanitory}{color:C3A78E}}]
    $suppressErrors[Error feel free to contact me]`
}