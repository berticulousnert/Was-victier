module.exports = {
    name: "unban",
    type: "interaction",
    prototype: "slash",
    code: `$unban[$guildID;$slashOption[user];Reason: $slashOption[reason]]
$interactionReply[> User has been unbanned;;;;everyone;]
   $onlyPerms[banmembers;You need ban permission]
   $onlyBotPerms[banmembers;I don't have ban perms]
   $suppressErrors[{newEmbed: {title:Error}{description:Check if the user is already banned}{footer: if this error continues feel free to contact a dev}{color:E6E6FA}{options:{ephemeral}}{extraOptions:{interaction}}}]
   `
   }