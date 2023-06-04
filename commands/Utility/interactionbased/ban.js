module.exports = {
    name:"ban",
    type: "interaction",
    prototype: "slash",
    code: ` 
   $ban[$guildID;$slashOption[user];0;$if[$slashOption[reason]==;No Reason Provided;$slashOption[reason]]] 
    $interactionReply[> User has been banned\n> Reason: $if[$slashOption[reason]==;No Reason Provided;$slashOption[reason];;;;everyone;]
    $onlyIf[$rolePosition[$highestRole[$authorID]]
   <$rolePosition[$highestRole[$slashOption[user]]];You can't ban someone with a higher role than you]
    $onlyIf[$highestRole[$slashOption[user]]!=$highestRole[$authorID];You can't ban someone with the same highest role]
    $onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$slashOption[user]]];I can't ban someone with higher role than me]
    $onlyIf[$highestRole[$slashOption[user]]!=$highestRole[$clientID];I can't ban someone with the same highest role as mine]
    $onlyIf[$slashOption[user]!=$ownerID;You can't ban the server owner]
    $onlyIf[$slashOption[user]!=$authorID;I am sure you don't want to do that]
    $onlyIf[$slashOption[user]!=$clientID;how about i ban you how the turns have tabled]
    $onlyIf[$isMentioned[$slashOption[user]==true;Who am i gonna ban?]
    $onlyIf[$hasPerms[$guildID;$authorID;banmembers]==true;Looks like someone doesn't have ban perms]
    $onlyBotPerms[banmembers;Ion have ban perms]
    $suppressErrors[{newEmbed: {title:Error}{description:There shouldn't be an error but oh well}{footer: if this error continues feel free to contact a dev}{color:E6E6FA}{options:{ephemeral}}{extraOptions:{interaction}}}]
   `
   }