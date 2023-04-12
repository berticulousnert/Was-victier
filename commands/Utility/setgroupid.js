module.exports = {
    name: "setgroupid",
    aliases: "setgid",
    code: `$title[Success!!!!! AHHHH] 
    $description[The Group_ID has been successfully been set to **$getGuildVar[ServerId]**]
    $color[#C3A78E]
    $wait[1s]
    $setGuildVar[ServerId;$message[1]]
    $onlyif[$isNumber[$message[1]]==true;{newEmbed: {description:> **A GROUP_ID is a integer how did you find a string? :)**}{color:C3A78E}}]
    $onlyif[$message[1]!=;{newEmbed: {description:> **This cannot be left empty :)**}{color:C3A78E}}]
    $onlyPerms[administrator;This command has been locked to administrator only]`
}