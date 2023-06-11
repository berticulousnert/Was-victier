module.exports = {
    name: "whitelist",
    code: `
$title[Done]
$description[> User has been whitelisted!]
    $setGlobaluserVar[blacklist;false;$message[1]]
    $onlyif[$authorID==964024743172915220;owner only buddy]
    `
}