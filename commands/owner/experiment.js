module.exports = {
    name: "onshout",
    code: `This should now send all shouts to this channel
    
$title[1;someone Has Posted a Shout!]
$color[1;#C3A78E]

$djsEval[const noblox = require("noblox.js");
const { MessageEmbed } = require('discord.js');
const shoutEvent = noblox.onShout(16066452);

shoutEvent.on("data", async function(data) {
  const shoutText = JSON.stringify(data.body);
  const embed = new MessageEmbed()
    .setDescription(shoutText);
  // Send the embed to a Discord channel
  message.channel.send(embed);
});

shoutEvent.on("error", function(err) {
  console.error("Something went wrong: ", err);
  // Handle error as needed
});;]
    
    `
}

/*$channelSendMessage[1095816115483054262;$djsEval[const noblox = require("noblox.js")
const shoutEvent = noblox.onShout(16066452)
shoutEvent.on("data",async function(data) {
 message.channel.send("New Shout!:", JSON.stringify(data))
})
shoutEvent.on("error", function(err) {
 console.error("Something went wrong: ", err)
 // Handle error as needed
});true]]*/