module.exports = {
    name: "unban",
    code: `$unban[$guildID;$message[1];By $userTag[$authorID] Reason: $sliceMessage[1]]
   $description[1;> User has been banned]
   $color[1;Green]
   $argsCheck[1;Please Provide Use ID To Unban]
   $onlyPerms[banmembers;You need ban permission]
   $onlyBotPerms[banmembers;I don't have ban perms]
$suppressErrors[Either the person is already unbanned or person does not exist either way feel free to contact me]
   `
   }