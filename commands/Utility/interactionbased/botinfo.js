module.exports = {
    name: "botinfo",
    type: "interaction",
    prototype: "slash",
    code: `
  $channelSendMessage[$channelID;{newEmbed: {title:🏓 | Pong!}{description:> 🤖 | Message Ping: \`0\`ms\n> 🤖 | Shard Ping: \`0\`ms\n> 🤖 | ShardID: \`0\`\n> 🔄 | WebSocket Ping: \`$ping\`ms\n>  🖥️ | Cpu: \`$cpu\`ms \n> 💾 | Database Ping: \`1\`ms\n> 💨 |Performance: $replaceText[$replaceText[$checkCondition[$ping<=100];true; \`Below 100ms\` <:icons_goodping:1063596823417204837>];false; \`Above 100ms\` <:icons_badping:1063596482109907004>] \n> 📊 | Uptime: \`$uptime\`\n> 💾 | Ram: \`$ram\`mb \n> 📋 | Commands Count: \`$commandsCount\` commands  }{footer: . ms.}{color:#E6E6FA}}{extraOptions:{interaction}};no]
  `
  }