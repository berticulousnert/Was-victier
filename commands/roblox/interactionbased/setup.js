module.exports = {
    name: "setup",
    prototype: "slash",
    type: "interaction",
    code: `
    $channelSendMessage[$channelID;{newEmbed:{description:> Congratulations you have successfully setup **victier!** now try the command to see if they work!! If you have any problem join our **[Support Server](https://discord.gg/uFq5DER6ba)**}{color:C3A78E}}{extraOptions:{interaction}};no]
    $setGuildVar[placeId;$slashOption[placeid]]
    $setGuildVar[ServerId;$slashOption[groupid]]
    $setGuildVar[auth;$slashOption[auth]]
    $setGuildVar[Cookie;$slashOption[cookie]]
    $setGuildVar[RankLimit;$slashOption[ranklock]]
    $setGuildVar[RankPerms;$slashOption[rankperms]]
    $setGuildVar[AdminRole;$slashOption[adminrole]]
    $onlyif[$isNumber[$slashOption[placeid]]==true;{newEmbed: {description:> **A PLACE_ID is a integer how did you find a string? 🖐️🤓🖐️**}{color:C3A78E}}]
    $onlyif[$isNumber[$slashOption[groupid]]==true;{newEmbed: {description:> **A GROUP_ID is a integer how did you find a string? 🖐️🤓🖐️**}{color:C3A78E}}]
    $onlyif[$isNumber[$slashOption[ranklock]]==true;{newEmbed: {description:> **A RankLock is a integer how did you find a string? 🖐️🤓🖐️**}{color:C3A78E}}]

    `
}

/* $onlyif[$isNumber[$message[1]]==true;{newEmbed: {description:> **A RankLock is a integer how did you find a string? :)**}{color:C3A78E}}]
    $onlyif[$message[1]!=;{newEmbed: {description:> **This cannot be left empty :)**}{color:C3A78E}}]*/