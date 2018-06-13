import { WebhookClient } from 'dialogflow-fulfillment';
// import { Card, Suggestion } from 'dialogflow-fulfillment';
import TanAPI from '../services/restClient'

export default {
    name: 'Default Welcome Intent',
    function: welcome
}


async function welcome(agent: WebhookClient) {
    const arrets = await TanAPI.getArrets();
    const arretsProches = await TanAPI.getArretsProches({ latitude: "47,223948", longitude:"-1,557811"});
    const tempsAttente = await TanAPI.getTempsAttente(arrets[0].codeLieu);
    const horairesArret = await TanAPI.getHorairesArret(tempsAttente[0].arret.codeArret, tempsAttente[0].ligne.numLigne, tempsAttente[0].sens);
    console.log(arrets)
    console.log(arretsProches)
    console.log(tempsAttente)
    console.log(horairesArret)
    agent.add('hello')
}
