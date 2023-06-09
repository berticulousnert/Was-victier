module.exports = {
    name: "unban",
    type: "interaction",
    prototype: "slash",
    code: `$interactionReply[;{newEmbed: {description:> User has been unbanned}{color:Green}};;;everyone;]
    $unban[$guildID;$slashOption[userid]]
$onlyPerms[banmembers;You need ban permission]
$onlyClientPerms[banmembers;I don't have ban perms]
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