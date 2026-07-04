export default {
  name: "ban",
  async run(message, args) {
    const user = message.mentions.members.first();
    if (!user) return message.reply("Mentionne un membre.");

    const reason = args.slice(1).join(" ");
    await user.ban({ reason });

    message.channel.send(`⛔ ${user} a été banni.`);
  }
};
