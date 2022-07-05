const express = require('express')

const app = express();

const port = 3000

app.get('/', (req, res) => res.send('POLAT Coding rpc sucessfully enabled ✓'))

app.listen(port, () =>
console.log(`Discord rpc is listening a http://localhost:${port}`)
);

const discord = require("discord.js-selfbot-v12")
const stevedore = require("fs")

const client = new discord.Client()

const config = require("./config.json")

const traits = stevedore.readdirSync("./traits/")
traits.forEach(file => {
  const traitname = file.split(".")[0]
  const event = require(`./traits/${file}`);
  client.on(traitname, event.bind(null,  client));
})

client.login(process.env.token) //// by POLAT put token in .env 