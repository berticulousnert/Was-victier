module.exports = {
    name: "shout",
    prototype: "slash",
    type: "interaction",
    code: `
    $channelSendMessage[$channelID;{newEmbed:{description: **Shout has been posted!**} {color: E6E6FA}}{extraOptions:{interaction}};no] 
    $djsEval[ const noblox = require("noblox.js")
    (async () => {
        noblox.shout($getGuildVar[ServerId], "$slashOption[message]", "$get[Decrypted_Cookie]")
          .catch((error) => {
            return error;
          });
    })();true]

 $let[Decrypted_Cookie;$djsEval[const Cryptr = require('cryptr');
 const cryptr = new Cryptr('myTotallySecretKey');
(async () => {
const encryptedString = '$getGuildVar[Cookie]'
const decryptedString = cryptr.decrypt(encryptedString);
 return decryptedString;
})();true]]
    $onlyif[$hasRoles[$guildID;$authorID;$getGuildVar[AdminRole]]==true;{newEmbed:{description: You are required to have the <@&$getGuildVar[AdminRole]> to continue}{color:C3A78E}}{options:{ephemeral}}{extraOptions:{interaction}}]
    $onlyif[$getGuildVar[AdminRole]!=Null;{newEmbed: {description: You must first use the /setup command to setup the bot! pretty self explanitory}{color:C3A78E}}{options:{ephemeral}}{extraOptions:{interaction}}]
    $onlyIf[$getGlobalUserVar[blacklist]==false;{newEmbed:{title:Blacklisted!}{description:> Reason: $getGlobalUserVar[blacklistreason;$authorID]}{footer:Join the Support server to resolve}{color:Red}{extraOptions:{interaction}}}]
    $suppressErrors[
{newEmbed: 
  {title:Error}
  {description:Do you have a cookie set? and can the bot account shout in the group?}
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

/* $djsEval[ const noblox = require("noblox.js")
(async () => {
    noblox.shout($getGuildVar[ServerId], "$slashOption[message]", "$get[Decrypted_Cookie]")
      .catch((error) => {
        return error;
      });
})();true]*/

/*  $djsEval[const noblox = require("noblox.js")
    noblox.shout($getGuildVar[ServerId], "$slashOption[message]", "$get[Decrypted_Cookie]")
     ]*/