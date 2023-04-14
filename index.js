const aoijs = require("aoi.js")
const noblox = require('noblox.js')
const { setup } = require('aoi.parser');
setup(aoijs.Util);
require('dotenv').config();

const bot = new aoijs.AoiClient({
token: process.env.token,
prefix: "-",
intents: ["MessageContent", "Guilds", "GuildMessages", "GuildMembers", "GuildBans"],
events : ["onMessage", "onInteractionCreate", "onGuildJoin", "onJoin"],
sharding: true,
aoiLogs: false
})

const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd,"./commands/")

async function startApp () {
    // You MUST call setCookie() before using any authenticated methods [marked by 🔐]
    // Replace the parameter in setCookie() with your .ROBLOSECURITY cookie as it is used to login to the account.
    const currentUser = await noblox.setCookie('_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_390CD2703D668FE3E4CA554026E9F1981C9909DBA89DCC7F4A58E5285D63E0138C2B2E7E736AE34D467AE9B545E01E6ADA05F7A79DD7A77B313726231390408DCAEC221558C166EB7A14F5AAFAF1B74F92610FC377310247CC8B3D561C3DBCA48106E9ABB935B75DD4C9BB5E243EA4DB7B4C2812969015660AA81F68E50C34FC9249FEDFAA8A5665D0E043E2531EA67262ABE58D58CA68748F7EE160356992FEAE6BF2F7FDB6ED6C110387A3838048875D365EA3B7519D13C207A92125755ECC8394D63EB6F96FC0DE660FF024D9F8D0E95B1D4AB9D57DB26EF60259A458E1D29C18A83A0326A64A6A1B342600C120D7EFFCD520C9B7A6EBFC30D7DBA3AAEF85B2CBB9665D7E32A50B1E8DABFBE81D2BBBA00DB570AAFFA9B41CC5F7D126C818CFDAE0538A0FD29ADCFC5D50107BD74C7DB6BAB3C41FE24AB01EE57BD4FEC6E303DF735759F1421B396BD2B2D81BF773C6A3DF047A175BF75EDF2C9C654605880C9510D8BB5B0C610F2719625100E3D7F1EDB2F1D27EF93DEC8429F0B6301B4AA606D37A') 
    console.log(`Logged in main roblox account as ${currentUser.UserName} [${currentUser.UserID}]`)
  }
  startApp()

  bot.variables({
    ServerId: "Null",
    RankLimit: "40",
    Cookie: "Null",
    placeId: "Null",
    auth: "Null",
    RankPerms: "Null",
    AdminRole: "Null",
    banauthor: "",
    banmessage: ""
})
  
bot.status({
    text: "95% ish fresh start",
    type: "PLAYING",
    time: 12
  });

  bot.command({
    name: "deletedata",
    code: `
  $awaitMessages[$channelID;$authorID;15s;deletemydata;awaitedcommandexample;Time has ended] 
  $title[1;WARNING!!]
  $description[Type "deletemydata" without the commas you have 20 seconds this command will delete all data stored of you in the bot and of this server]
$color[1;#FF0000]
$onlyif[$authorID==$botownerID;Owner only]`
});

bot.awaitedCommand({
    name: "awaitedcommandexample",
    code: `$djsEval[message.guild.leave();]
    $wait[2s]
    **$channelSendMessage[$channelID;**Data deleted Thank you for using our bot <3 i'll leave the server now**;false]**
 $setGuildVar[placeId;Null]
    $setGuildVar[ServerId;Null]
    $setGuildVar[auth;Null]
    $setGuildVar[Cookie;Null]
    $setGuildVar[RankLimit;40]
  `
});
//Data deleted Thank you for using our bot <3 i'll leave the server now