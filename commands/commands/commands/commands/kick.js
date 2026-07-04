export default {
  name: "kick",
  async run(message, args) {
    const user = message.mentions.members.first();
    if (!user) return message.reply("Mentionne un membre.");

    const reason = args.slice(1).join(" ");
    await user.kick(reason);

    message.channel.send(`🦵 ${user} a été kick.`);
  }
};
