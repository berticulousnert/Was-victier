module.exports = {
    name: "setauth",
    aliases: "seta",
    code: `
    $description[> The Auth/Console key has been successfully been set to **$getGuildVar[auth]**]
    $color[1;#C3A78E]
    $wait[1s]
    $setGuildVar[auth;$get[auth]] 
$let[auth;$djsEval[const Cryptr = require('cryptr');
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