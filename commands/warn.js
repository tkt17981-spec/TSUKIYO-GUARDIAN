export default {
  name: "warn",
  run(message, args) {
    const user = message.mentions.members.first();
    if (!user) return message.reply("Mentionne un membre.");

    const reason = args.slice(1).join(" ");
    if (!reason) return message.reply("Donne une raison.");

    user.send(`⚠️ Tu as reçu un avertissement : ${reason}`).catch(() => {});
    message.channel.send(`⚠️ Warn donné à ${user} | Raison : ${reason}`);
  }
};
