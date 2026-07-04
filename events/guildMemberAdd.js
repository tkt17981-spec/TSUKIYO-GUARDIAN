export default (client) => {
  client.on("guildMemberAdd", (member) => {
    console.log(`Nouveau membre : ${member.user.tag}`);
  });
};
