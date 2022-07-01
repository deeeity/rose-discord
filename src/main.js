// Required
const discord = require('discord.js')

// Consts
const intents = [
    discord.Intents.FLAGS.GUILDS,
    discord.Intents.FLAGS.GUILD_MESSAGES,
    discord.Intents.FLAGS.GUILD_MEMBERS
]

// Init
require('dotenv').config();
const client = discord.Client({ intents: intents })
