module.exports = {
    name: "setauth",
    aliases: "seta",
    code: `
    $description[> The Auth/Console key has been successfully been set to **$getGuildVar[auth]**]
    $color[1;#C3A78E]
    $wait[1s]
    $setGuildVar[auth;$message[1]]
    $onlyif[$message[1]!=;{newEmbed: {description:> **This cannot be left empty :)**}{color:C3A78E}}]
    $onlyPerms[administrator;This command has been locked to administrator only]`
}