export default (client) => {
  client.on("ready", () => {
    console.log(`TSUKIYO-GUARDIAN est en ligne en tant que ${client.user.tag}`);
  });
};
