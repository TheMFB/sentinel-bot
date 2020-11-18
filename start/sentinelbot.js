/* *****************************************************************************
Copyright 2016 Google LLC

Licensed under the Apache License, Version 2.0 (the "License")
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
********************************************************************************

This is a sample Slack bot built with Botkit.
*/
require("dotenv").config();
const { Botkit } = require('botkit')
const { SlackAdapter, SlackEventMiddleware } = require(
  'botbuilder-adapter-slack')

/**
 * Asynchronous function to initialize sentinelbot.
 */
async function sentinelbotInit () {
  const adapter = new SlackAdapter({
    clientSigningSecret: process.env.SIGNING_SECRET,
    botToken: process.env.TOKEN
  })

  adapter.use(new SlackEventMiddleware())

  const controller = new Botkit({
    webhook_uri: '/api/messages',
    adapter: adapter
  })

  controller.ready(() => {
    controller.hears(['hello', 'hi'], ['message', 'direct_message'],
      async (bot, message) => {
        await bot.reply(message, 'Meow. :smile_cat:')
      })
  })
}

sentinelbotInit()
