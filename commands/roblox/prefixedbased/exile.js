module.exports = {
    name: "exile",
    code: `$description[1;> User has successfully been exiled $get[RobloxUsername]]
    $djsEval[const noblox = require("noblox.js")
    noblox.exile($getGuildVar[ServerId], $get[RobloxUsername])]
    $let[RobloxUsername;$httpRequest[https://users.roblox.com/v1/usernames/users;POST; {"usernames":["$message[1]"],"excludeBannedUsers":true};data[0].name;Conent-Type:text/json]]
    $onlyif[$getguildvar[ServerId]!=Null;{newEmbed: {description:**No Cookie currently set. You can set one by using the /setup command or -setcookie command.**}{color:#E6E6FA}{footer:If you think this is a problem you may contact a developer.}}]
    $onlyif[$getguildvar[Cookie]!=Null;{newEmbed: {description:**No Cookie currently set. You can set one by using the /setup command or -setcookie command.**}{color:#E6E6FA}{footer:If you think this is a problem you may contact a developer.}}]
    $argsCheck[1;-exile (robloxusername)] 
    $onlyif[$hasRoles[$guildID;$authorID;$getGuildVar[AdminRole]]==true;{newEmbed:{description: You are required to have the <@&$getGuildVar[AdminRole]> to continue}{color:C3A78E}}]
    $onlyif[$getGuildVar[AdminRole]!=Null;{newEmbed: {description:Admin role not found you must first use the /setup command to setup the bot! pretty self explanitory}{color:C3A78E}}]

    
    `
}