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
aoiLogs: false,
database : {
  type: "aoi.db",
  db: require("aoi.db"),
  tables: ["victier"],
  path: "./database/",
  extraOptions: {
      dbType: "KeyValue",
  }
},
})

const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd,"./commands/")


async function startApp () {
    // You MUST call setCookie() before using any authenticated methods [marked by 🔐]
    // Replace the parameter in setCookie() with your .ROBLOSECURITY cookie as it is used to login to the account.
    const currentUser = await noblox.setCookie('_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_5B029E92985F1C50C64C014DADDF1D4F96E3935A53D2E240528798DB3418BF8393DCF9547487747A41183B4F7C04FBF854AA6F552D10329C51ABD6DE1A590EE740CA870BFFE104BE8C508ECBEF6B02E1ADAD74BA7DA5D55BF8F4F114EB6B27A0C8E1C9C60F8A36C32651CAD25FFF1E8AF243D6A442C0220A26D1C1E753439952395F90334E7447679F37D7F234FFBC9964C21A832BE8428C1D5A56FC4693BE5D75D9D941C3F3EEF8A7DA0F1A6BCF687B582E44CF8764A98FA45CCF58A0E5D5349B4B4E1B8617B4DC578634E5E3B2C5F0FB28D0476C207EE641B75124DC336CCB099A2297587423CFA31671157BC142770447003E42D5F01F76B42441449A36FD1DB8B3059715B7C09FE8D237D1C7905A752F218050709C1C3FBA84FB95629D6A705CDC5585F73302DEBB53C38A6DEA1A2971872FFE0A7A30CF843C0EF2018EDEFBAB285BFEC3617A344C1235920CBB3999D0C13046D84CE63BAF6CF3E8C915E7E1663586300641DC6212E919054763B3F5A55C124421D0F5A2257CFFAA6C8CEE572E6EE4') 
    console.log(`Logged in main roblox account as ${currentUser.UserName} [${currentUser.UserID}]`)
  }
  startApp()



  bot.variables({
    ServerId: "Null",
    RankLimit: "39",
    Cookie: "Null",
    placeId: "Null",
    auth: "Null",
    RankPerms: "Null",
    AdminRole: "Null",
    banauthor: "",
    banmessage: "",
    test: "",
    shoutcid: "Null",
    logchannel: "Null",
    ShoutId: "Null",
    blacklist: "false",
    blacklistreason: "Null"
})

bot.status({
    text: "Officially stable $allMembersCount members",
    type: "PLAYING",
    time: 12
  });

  bot.command({
    name: "dumpdata",
    code: `
  $awaitMessages[$channelID;$authorID;15s;dumpdata;dumpdata;Time has ended] 
  $title[1;WARNING!!]
  $description[**Type "dumpdata" without the commas to see ALL the data the bot has stored of you this includes Roblox cookie (encrypted), Auth/Console key (encrypted), placeId, groupId, ranklock, adminrole and ranking perms role.**]
$color[1;#FF0000]
$onlyForIDs[964024743172915220;Not owner]`
});

bot.awaitedCommand({
    name: "dumpdata",
    code: `$color[1;#FF0000]
    $description[1;> Cookie: $getGuildVar[Cookie]\n
     **Auth/Console Key:** $getGuildVar[auth]\n
      **PlaceId:** $getGuildVar[placeId]\n
       **GroupId:** $getGuildVar[ServerId]\n
        **RankLock:** $getGuildVar[RankLimit]\n
        **AdminRole:** <@&$getGuildVar[AdminRole]>\n
        ** RankPerms:** <@&$getGuildVar[RankPerms]>]
  `
});

bot.awaitedCommand({
  name: "null",
  code: `$setGuildVar[auth;Null]
`
});



  bot.command({
    name: "deletedata",
    code: `
  $awaitMessages[$channelID;$authorID;15s;deletemydata;awaitedcommandexample;Time has ended] 
  $title[1;WARNING!!]
  $description[Type "deletemydata" without the commas you have 20 seconds this command will delete all data stored of you in the bot and of this server]
$color[1;#FF0000]
$onlyForIDs[964024743172915220;Not owner]`
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