module.exports = {
    name: "blacklist",
    code: `
    
    $setGlobaluserVar[blacklist;true;$message[1]]
    $setGlobalUserVar[blacklistreason;$replaceText[$message;$message[1];]]
    $onlyif[$authorID==964024743172915220;owner only buddy]
    `
}