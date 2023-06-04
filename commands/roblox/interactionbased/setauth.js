module.exports = {
    name: "setauth",
    prototype: "slash",
    type: "interaction",
    code: `
    $channelSendMessage[$channelID;{newEmbed:{description:> The Auth/Console Key key has been successfully been set to **$getGuildVar[auth]** **encrypted**} {color: E6E6FA}}{extraOptions:{interaction}};no] 
    $setGuildVar[auth;$get[auth]] 
    $let[auth;$djsEval[const Cryptr = require('cryptr');
        const cryptr = new Cryptr('myTotallySecretKey');
    (async () => {
        const encryptedString = cryptr.encrypt('$slashOption[id]');
        const decryptedString = cryptr.decrypt(encryptedString);
        return encryptedString;
    })();;true]]
    $onlyif[$hasRoles[$guildID;$authorID;$getGuildVar[AdminRole]]==true;{newEmbed:{description: You are required to have the <@&$getGuildVar[AdminRole]> to continue}{color:C3A78E}}{options:{ephemeral}}{extraOptions:{interaction}}]
    $onlyif[$getGuildVar[AdminRole]!=Null;{newEmbed: {description: You must first use the /setup command to setup the bot! pretty self explanitory}{color:C3A78E}}{options:{ephemeral}}{extraOptions:{interaction}}]
    $suppressErrors[{newEmbed: {title:Error}{description:There shouldn't be an error here but oh well.}{footer: if this error continues feel free to contact a dev}{color:E6E6FA}{options:{ephemeral}}{extraOptions:{interaction}}}]
    `
}