import { Client, GatewayIntentBits, Collection } from "discord.js";
import fs from "fs";
import config from "./config.json" assert { type: "json" };

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.commands = new Collection();

// Charger les commandes
const commandFiles = fs.readdirSync("./commands").filter(f => f.endsWith(".js"));
for (const file of commandFiles) {
  const cmd = await import(`./commands/${file}`);
  client.commands.set(cmd.default.name, cmd.default);
}

// Charger les events
const eventFiles = fs.readdirSync("./events").filter(f => f.endsWith(".js"));
for (const file of eventFiles) {
  const event = await import(`./events/${file}`);
  event.default(client);
}

// Anti‑raid modules
import joinProtection from "./antiraid/joinProtection.js";
import spamProtection from "./antiraid/spamProtection.js";
import mentionProtection from "./antiraid/mentionProtection.js";

joinProtection(client);
spamProtection(client);
mentionProtection(client);

client.login(config.token);
