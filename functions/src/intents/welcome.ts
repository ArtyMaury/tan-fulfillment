import { WebhookClient } from 'dialogflow-fulfillment';
// import { Card, Suggestion } from 'dialogflow-fulfillment';

export default {
    name: 'Default Welcome Intent',
    function: welcome
}


function welcome(agent: WebhookClient) {
    agent.add(`Bienvenue dans ce nouvel assistant!`);
}
