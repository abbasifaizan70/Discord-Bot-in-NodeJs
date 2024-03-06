const { REST, Routes } = require("discord.js");

const commands = [
  {
    name: "create",
    description: "Create short url"
  }
];

const rest = new REST({ version: "10" }).setToken(
  "MTIxNDU5OTAyNjExMjk5NTM5OQ.GR8MiD.4vyAzTk7OSRxCvw8KJsFGm1tQ9u166EKaanSp8"
);

(async () => {
  try {
    console.log("Started refreshing application (/) commands.");

    await rest.put(Routes.applicationCommands("1214599026112995399"), {
      body: commands
    });

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
})();
