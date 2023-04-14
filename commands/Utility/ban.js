module.exports = {
    name:"ban",
    code: `$setUserVar[banauthor;$authorID] 
   
   $setUserVar[banmessage;$noMentionMessage;$findMember[$mentioned[1]];$guildID] 
   
   $ban[$guildID;$mentioned[1];0;$if[$noMentionMessage==;No Reason Provided;$noMentionMessage]] 
   
   $resetUserVar[banmessage]
   
    $resetUserVar[banauthor]

   
    $description[1;> User has been banned\n> Reason: $if[$noMentionMessage==;No Reason Provided;$noMentionMessage]
   
    $color[1;Red]
   
    $onlyIf[$rolePosition[$highestRole[$authorID]]
   
   <$rolePosition[$highestRole[$mentioned[1]]];You can't ban someone with a higher role than you]
   
    $onlyIf[$highestRole[$mentioned[1]]!=$highestRole[$authorID];You can't ban someone with the same highest role]
   
    $onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$mentioned[1]]];I can't ban someone with higher role than me]
   
    $onlyIf[$highestRole[$mentioned[1]]!=$highestRole[$clientID];I can't ban someone with the same highest role as mine]
   
    $onlyIf[$mentioned[1]!=$ownerID;You can't ban the server owner]
   
    $onlyIf[$mentioned[1]!=$authorID;I am sure you don't want to do that]
   
    $onlyIf[$mentioned[1]!=$clientID;how about i ban you how the turns have tabled]
   
    $onlyIf[$isMentioned[$mentioned[1]]==true;Who am i gonna ban?]
   
    $onlyIf[$hasPerms[$guildID;$authorID;banmembers]==true;Looks like someone doesn't have ban perms]
   
    $onlyBotPerms[banmembers;Ion have ban perms]
   
   $onlyif[$authorID==$botownerID;Can't ban the owner of the bot thats disrespectful]`
   }