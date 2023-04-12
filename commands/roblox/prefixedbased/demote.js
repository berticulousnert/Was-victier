module.exports = {
    name: "demote",
    code:` 
    $title[1;Successful!] 
    
    $color[1;#E6E6FA] 

    $description[1;> <:icons_Correct:1063605864323362897> **$get[RobloxUsername]** rank is now **$djsEval[const noblox = require("noblox.js")

    rankName = noblox.getRankNameInGroup($getguildvar[ServerId], $get[RobloxDemoteCache], "$getguildvar[Cookie]");true]**] $footer[1;took $executionTime ms $addTimeStamp[1]]

    $djsEval[const noblox = require("noblox.js")

    noblox.demote($getguildvar[ServerId], $get[RobloxDemoteCache], "$getguildvar[Cookie]")] 

$onlyif[$djsEval[const noblox = require("noblox.js")

noblox.getRankInGroup($getguildvar[ServerId], $get[RobloxDemoteCache], "$getguildvar[Cookie]");true]<$getguildvar[RankLimit];<:icons_update1:1063597590505078814><:icons_update2:1063597625221320744>\n I Cannot rank Above/Below the $ordinal[$getguildvar[RankLimit]] rank in the group]

$let[RobloxDemoteCache;$httpRequest[https://users.roblox.com/v1/usernames/users;POST; {"usernames":["$message[1]"],"excludeBannedUsers":true};data[0].id;Conent-Type:text/json]]

$let[RobloxUsername;$httpRequest[https://users.roblox.com/v1/usernames/users;POST; {"usernames":["$message[1]"],"excludeBannedUsers":true};data[0].name;Conent-Type:text/json]]

$cooldown[1s;Slow down do you want to get me ratelimited?]

$onlyif[$getguildvar[ServerId]!=Null;{newEmbed: {description:**No GROUP_ID currently set. You can set one by using the -setgid command.**}{color:#E6E6FA}{footer:If you think this is a problem you may contact a developer.}}]

$onlyif[$getguildvar[Cookie]!=Null;{newEmbed: {description:**No Cookie currently set. You can set one by using the -setCookie command.**}{color:#E6E6FA}{footer:If you think this is a problem you may contact a developer.}}]

$argsCheck[1;Args -demote (roblox_username)] 

 `
}
