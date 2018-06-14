import { WebhookClient } from 'dialogflow-fulfillment';
// import { Card, Suggestion } from 'dialogflow-fulfillment';

export default {
    name: 'Default Welcome Intent',
    function: welcome
}

async function welcome(agent: WebhookClient) {
    agent.add('Bienvenue sur ce chatbot. De quoi as-tu besoin?')
}
