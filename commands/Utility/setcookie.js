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
    $onlyPerms[administrator;This command has been locked to administrator only]`
}