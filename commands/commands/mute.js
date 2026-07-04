export default {
  name: "mute",
  async run(message, args) {
    const user = message.mentions.members.first();
    if (!user) return message.reply("Mentionne un membre.");

    const minutes = parseInt(args[1]);
    if (isNaN(minutes)) return message.reply("Donne une durée en minutes.");

    const reason = args.slice(2).join(" ");

    await user.timeout(minutes * 60000, reason);
    message.channel.send(`🔇 ${user} mute pendant ${minutes} minutes.`);
  }
};
