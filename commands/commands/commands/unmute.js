export default {
  name: "unmute",
  async run(message, args) {
    const user = message.mentions.members.first();
    if (!user) return message.reply("Mentionne un membre.");

    await user.timeout(null);
    message.channel.send(`🔊 ${user} a été unmute.`);
  }
};
