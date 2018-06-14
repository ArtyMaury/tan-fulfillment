import { RestClient, IRestResponse } from 'typed-rest-client';
import * as InterfacesTan from './TanAPI_interfaces'

const API_URL: string = "http://open_preprod.tan.fr"
// const API_URL: string = "http://open.tan.fr" //PROD

const restClient: RestClient = new RestClient('rest-samples', API_URL);

export default {

    /**
     * Exemple: const arrets = await TanAPI.getArrets();
     */
    getArrets: async function () {
        try {
            const res: IRestResponse<Array<InterfacesTan.ArretLieu>> =
                await restClient.get<Array<InterfacesTan.ArretLieu>>("/ewp/arrets.json");
            return res.result
        } catch (error) {
            console.log(error)
            return null
        }
    },

    /**
     * Exemple: const arretsProches = await TanAPI.getArretsProches({ latitude: "47,223948", longitude:"-1,557811"});
     */
    getArretsProches: async function (position: InterfacesTan.Position) {
        try {
            const res: IRestResponse<Array<InterfacesTan.ArretLieu>> =
                await restClient.get<Array<InterfacesTan.ArretLieu>>(`/ewp/arrets.json/${position.latitude}/${position.longitude}`);
            return res.result
        } catch (error) {
            console.log(error)
            return null
        }
    },

    /**
     * Exemple: const tempsAttente = await TanAPI.getTempsAttente("COMM");
     */
    getTempsAttente: async function (codeLieu: string) {
        try {
            const res: IRestResponse<Array<InterfacesTan.TempsAttente>> =
                await restClient.get<Array<InterfacesTan.TempsAttente>>(`/ewp/tempsattente.json/${codeLieu}`);
            return res.result
        } catch (error) {
            console.log(error)
            return null
        }
    },
    
    /**
     * Exemple: const horairesArret = await TanAPI.getHorairesArret("COMB2", 1, 1);
     */
    getHorairesArret: async function (codeArret: string, numLigne: string, sensLigne: InterfacesTan.Sens) {
        try {
            const res: IRestResponse<Array<InterfacesTan.HoraireArret>> =
                await restClient.get<Array<InterfacesTan.HoraireArret>>(`/ewp/horairesarret.json/${codeArret}/${numLigne}/${sensLigne}`);
            return res.result
        } catch (error) {
            console.log(error)
            return null
        }
    }
}