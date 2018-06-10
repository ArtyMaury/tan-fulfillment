import * as functions from 'firebase-functions';
import { WebhookClient } from 'dialogflow-fulfillment';
import WelcomeIntent from './intents/welcome'

process.env.DEBUG = 'dialogflow:debug'; // enables lib debugging statements

export const transportNantesFulfillment = functions.https.onRequest((request, response) => {
    const agent = new WebhookClient({ request, response });

    // Run the proper function handler based on the matched Dialogflow intent name
    const intentMap = new Map();
    intentMap.set(WelcomeIntent.name, WelcomeIntent.function);

    agent.handleRequest(intentMap);
});
