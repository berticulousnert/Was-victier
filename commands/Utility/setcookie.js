module.exports = {
    name: "setcookie",
    aliases: "setc",
    code: `$description[1;> The Account Cookie key has been successfully been set to **$getGuildVar[Cookie]**] 
    $footer[1;**HIDE THE COOKIE FROM USERS WHO CAN STEAL IT**]
    $color[1;#C3A78E]
    $wait[1s]
    $setGuildVar[Cookie;$message[1]]
    $onlyif[$charCount[$message[1]]==892;UHH A roblox cookie is 892 characters long 🖐️🤓🖐️]
    $onlyif[$message[1]!=;{newEmbed: {description:> **This cannot be left empty :)**}{color:C3A78E}}]
    $onlyPerms[administrator;This command has been locked to administrator only]
    $onlyif[$hasRoles[$guildID;$authorID;$getGuildVar[AdminRole]]==true;{newEmbed:{description: You are required to have the <@&$getGuildVar[AdminRole]> to continue}{color:C3A78E}}]
    $onlyif[$getGuildVar[AdminRole]!=Null;{newEmbed: {description: You must first use the /setup command to setup the bot! pretty self explanitory}{color:C3A78E}}]
    $suppressErrors[Error :( on release i should do better)]`
}