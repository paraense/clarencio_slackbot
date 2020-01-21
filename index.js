const SlackBot = require('slackbots');
const axios = require('axios');

const bot = new SlackBot({
    token: 'token-do-bot-aqui',
    name: 'Clarêncio. O otimista'
});

bot.on('start', () => {
    const params ={
       // icon_url: 'https://api.slack.com/methods/chat.postMessage'
    }
  console.log('Comecou');
    //bot.postMessageToGroup('vmpay', 'Oi. Calma isso é só um teste ', params);
    setTimeout(() => {
        console.log("ta na hora");
        bot.postMessageToUser('john.gomes', 'Oi. Calma isso é só um teste ', params);
    },600000);
    
});

