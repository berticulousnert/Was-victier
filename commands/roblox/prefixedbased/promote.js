module.exports = {
    name: "promote",
    code:` 
    $title[1;Successful!] 
    
    $color[1;#C3A78E]
    
    $description[1;> <:icons_Correct:1063605864323362897> **$get[RobloxUsername]** rank is now **$djsEval[const noblox = require("noblox.js")
    
    rankName = noblox.getRankNameInGroup($getguildvar[ServerId], $get[RobloxPromoteCache], "$getguildvar[Cookie]");true]**] $footer[1;took $executionTime ms $addTimeStamp[1]]
    
    $djsEval[const noblox = require("noblox.js")

    noblox.promote($getguildvar[ServerId], $get[RobloxPromoteCache], "$get[Decrypted_Cookie]")] 

    $onlyif[$djsEval[const noblox = require("noblox.js")

    noblox.getRankInGroup($getguildvar[ServerId], $get[RobloxPromoteCache], "$getguildvar[Cookie]");true]<$getguildvar[RankLimit];<:icons_update1:1063597590505078814><:icons_update2:1063597625221320744>\n I Cannot rank Above/Below the $ordinal[$getguildvar[RankLimit]] rank in the group]

    $let[RobloxPromoteCache;$httpRequest[https://users.roblox.com/v1/usernames/users;POST; {"usernames":["$message[1]"],"excludeBannedUsers":true};data[0].id;Conent-Type:text/json]]



    $let[RobloxUsername;$httpRequest[https://users.roblox.com/v1/usernames/users;POST; {"usernames":["$message[1]"],"excludeBannedUsers":true};data[0].name;Conent-Type:text/json]]

    $let[Decrypted_Cookie;$djsEval[const Cryptr = require('cryptr');
        const cryptr = new Cryptr('myTotallySecretKey');
    (async () => {
       const encryptedString = '$getGuildVar[Cookie]'
    const decryptedString = cryptr.decrypt(encryptedString);
        return decryptedString;
    })();;true]]

    $cooldown[1s;Slow down do you want to get me ratelimited?]
    
    $onlyif[$getguildvar[RankLimit]!=Null;Please set a ranklock with the setup command]

    $onlyif[$getguildvar[ServerId]!=Null;Please set a valid roblox GROUP_ID]

    $onlyif[$getguildvar[Cookie]!=Null;{newEmbed: {description:**No Cookie currently set. You can set one by using the /setup command or -setcookie command.**}{color:#E6E6FA}{footer:If you think this is a problem you may contact a developer.}}]

    $argsCheck[1;Args -promote (roblox_username)] 
    $onlyif[$hasRoles[$guildID;$authorID;$getGuildVar[RankPerms]]==true;{newEmbed:{description: You are required to have the <@&$getGuildVar[RankPerms]> to continue}{color:C3A78E}}]
    $onlyif[$getGuildVar[RankPerms]!=Null;{newEmbed: {description: You must first use the /setup command to setup the bot! pretty self explanitory}{color:C3A78E}}]
  

 `
}
