export default (client) => {
  client.on("messageCreate", (message) => {
    if (!message.guild || message.author.bot) return;

    const prefix = "-";
    if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    const command = client.commands.get(commandName);
    if (!command) return;

    try {
      command.run(message, args);
    } catch (err) {
      console.error(err);
      message.reply("Une erreur est survenue en exécutant la commande.");
    }
  });
};
