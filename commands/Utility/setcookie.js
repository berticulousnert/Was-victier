module.exports = {
    name: "setcookie",
    aliases: "setc",
    code: `$description[1;> The Account Cookie key has been successfully been set to **$getGuildVar[Cookie]** **encrypted**] 
    $footer[1;**HIDE THE COOKIE FROM USERS WHO CAN STEAL IT**]
    $color[1;#C3A78E]
    $wait[1s]
    $setGuildVar[Cookie;$get[Cookie]] 
    $let[Cookie;$djsEval[const Cryptr = require('cryptr');
        const cryptr = new Cryptr('myTotallySecretKey');
    (async () => {
        const encryptedString = cryptr.encrypt('$message[1]');
        const decryptedString = cryptr.decrypt(encryptedString);
        return encryptedString;
    })();;true]]
    $onlyif[$message[1]!=;{newEmbed: {description:> **This cannot be left empty :)**}{color:C3A78E}}]
    $onlyif[$hasRoles[$guildID;$authorID;$getGuildVar[AdminRole]]==true;{newEmbed:{description: You are required to have the <@&$getGuildVar[AdminRole]> to continue}{color:C3A78E}}]
    $onlyif[$getGuildVar[AdminRole]!=Null;{newEmbed: {description: You must first use the /setup command to setup the bot! pretty self explanitory}{color:C3A78E}}]
    $suppressErrors[Error feel free to contact me]`
}