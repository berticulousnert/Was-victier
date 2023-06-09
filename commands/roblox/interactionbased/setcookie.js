module.exports = {
    name: "setcookie",
    prototype: "slash",
    type: "interaction",
    code: `
    $channelSendMessage[$channelID;{newEmbed:{description:> The Account Cookie key has been successfully been set to **$getGuildVar[Cookie]** **encrypted**} {color: E6E6FA}}{extraOptions:{interaction}};no] 
    $setGuildVar[Cookie;$get[Cookie]] 
    $let[Cookie;$djsEval[const Cryptr = require('cryptr');
        const cryptr = new Cryptr('myTotallySecretKey');
    (async () => {
        const encryptedString = cryptr.encrypt('$message[1]');
        const decryptedString = cryptr.decrypt(encryptedString);
        return encryptedString;
    })();;true]]
    $onlyif[$hasRoles[$guildID;$authorID;$getGuildVar[AdminRole]]==true;{newEmbed:{description: You are required to have the <@&$getGuildVar[AdminRole]> to continue}{color:C3A78E}}{options:{ephemeral}}{extraOptions:{interaction}}]
    $onlyif[$getGuildVar[AdminRole]!=Null;{newEmbed: {description: You must first use the /setup command to setup the bot! pretty self explanitory}{color:C3A78E}}{options:{ephemeral}}{extraOptions:{interaction}}]
    $suppressErrors[
        {newEmbed: 
          {title:Error}
          {description:There shouldn't be an error but oh well}
          {footer: if this error continues feel free to contact a dev}
          {color:E6E6FA}
        }
        {options:
          {ephemeral}
        }
        {extraOptions:
          {interaction}
        }
        ]
    `
}