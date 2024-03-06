const { Client, GatewayIntentBits } = require("discord.js");
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.on("messageCreate", message => {
  if (message.author.bot) return;
  if (message.content.startsWith("create")) {
    const url = message.content.split("create")[1];
    return message.reply({ content: "Generating short Url for " + url });
  }
  message.reply({
    content: "Hi from my Bot"
  });
});

client.on("interactionCreate", interaction => {
  interaction.reply({ content: "Pong!!" });
});

client.login(
  "MTIxNDU5OTAyNjExMjk5NTM5OQ.GR8MiD.4vyAzTk7OSRxCvw8KJsFGm1tQ9u166EKaanSp8"
);
