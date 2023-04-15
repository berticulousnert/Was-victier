module.exports = {
    name: "setup",
    prototype: "slash",
    type: "interaction",
    code: `
    $channelSendMessage[$channelID;{newEmbed:{description:> Congratulations you have successfully setup **victier!** now try the command to see if they work!! If you have any problem join our **[Support Server](https://discord.gg/uFq5DER6ba)** **MAKE SURE THIS COMMAND WAS RUN IN A PRIVATE CHANNEL IF IT WAS NOT DELETE THIS MESSAGE NOW!!**}{color:C3A78E}}{extraOptions:{interaction}};no]
    $setGuildVar[placeId;$slashOption[placeid]]
    $setGuildVar[ServerId;$slashOption[groupid]]
    $setGuildVar[RankLimit;$slashOption[ranklock]]
    $setGuildVar[RankPerms;$slashOption[rankperms]]
    $setGuildVar[AdminRole;$slashOption[adminrole]]
    $setGuildVar[Cookie;$get[Cookie]] 
$let[Cookie;$djsEval[const Cryptr = require('cryptr');
    const cryptr = new Cryptr('myTotallySecretKey');
(async () => {
    const encryptedString = cryptr.encrypt('$slashOption[cookie]');
    const decryptedString = cryptr.decrypt(encryptedString);
    return encryptedString;
})();;true]]
$setGuildVar[auth;$get[auth]] 
$let[auth;$djsEval[const Cryptr = require('cryptr');
    const cryptr = new Cryptr('myTotallySecretKey');
(async () => {
    const encryptedString = cryptr.encrypt('$slashOption[auth]');
    const decryptedString = cryptr.decrypt(encryptedString);
    return encryptedString;
})();;true]]

    $onlyif[$isNumber[$slashOption[groupid]]==true;{newEmbed: {description:> **A GROUP_ID is a integer how did you find a string? 🖐️🤓🖐️**}{color:C3A78E}}]
   $suppressErrors[]
   $onlyPerms[administator;You need ban permission]

    `
}

/* $onlyif[$isNumber[$message[1]]==true;{newEmbed: {description:> **A RankLock is a integer how did you find a string? :)**}{color:C3A78E}}]
    $onlyif[$message[1]!=;{newEmbed: {description:> **This cannot be left empty :)**}{color:C3A78E}}]*/

    //    $setGuildVar[Cookie;$slashOption[cookie]]     $setGuildVar[auth;$slashOption[auth]]