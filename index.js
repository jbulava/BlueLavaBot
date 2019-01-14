// Import the twitch-js module and get configuration information
const TwitchJS = require('twitch-js');
const config = require('./config/twitch-js.js');

// Create new Twitch JS client
const twitch = new TwitchJS.client(config);

twitch.on('chat', (channel, userstate, message, self) => {
  console.log(`Message "${message}" received from ${userstate['display-name']}`);

  // Do not repond if the message is from the connected identity.
  if (self) return;

  if (config.identity && message === '!command') {
  // If an identity was provided, respond in channel with message.
    twitch.say(channel, 'Hello world!');
  }
});

twitch.connect();
