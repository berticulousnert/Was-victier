module.exports = {
    name: "botinfo",
    code: ` 
  $title[1;🏓 | Pong!] $description[1;> 🧍‍♂️ 🧍‍♀️ | Cached users: \`I dunno\`ms\n> 🤖 | Bot Ping: \`$messagePing\`ms\n> 🤖 | Shard Ping: \`$shardPing[$shardID]\`ms\n> 🤖 | ShardID: \`$shardID\`\n> 🔄 | WebSocket Ping: \`$ping\`ms\n> 💾 | Database Ping: \`1\`ms\n> 💨 |Performance: $replaceText[$replaceText[$checkCondition[$ping<=100];true; \`Below 100ms\` <:icons_goodping:1063596823417204837>];false; \`Above 100ms\` <:icons_badping:1063596482109907004>] \n> 📊 | Uptime: \`$uptime\`\n> 💾 | Ram: \`$ram\`mb\n> :desktop: | Cpu: \`$cpu\`\n> :clipboard: | Commands Count: \`$commandsCount\` commands ]
   $footer[1; $executionTime ms $addTimeStamp[1]] $color[1;#E6E6FA]

  `
  }
