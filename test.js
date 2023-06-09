const aoijs = require("aoi.js")
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

function _done() {
    console.log("Success!")
    process.exit(0)
  }


setTimeout(_done, 5000);


