const { ClientShard } = require("aoi.js");
require('dotenv').config();

const sharder = new ClientShard("./index.js",{
  token : process.env.token,
  totalShards: 5,
  mode: "worker",
  respawn: true

});

sharder.on('shardCreate', shard => console.log(`Launched shard ${shard.id}`));

			sharder.on('messageCreate', message => {
				console.log(`Shard[${shard.id}] : ${message._eval} : ${message._result}`);
			});

sharder.startProcess();