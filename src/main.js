// Required
const discord = require('discord.js')

// Setup
require('dotenv').config();

const intents = [
    discord.Intents.FLAGS.GUILDS,
    discord.Intents.FLAGS.GUILD_MESSAGES,
    discord.Intents.FLAGS.GUILD_MEMBERS
]

const client = new discord.Client({ intents: intents })

// Startup
client.login(process.env.BOT_TOKEN)
