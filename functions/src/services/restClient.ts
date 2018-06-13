import { RestClient, IRestResponse } from 'typed-rest-client';
import * as InterfacesTan from './interfaces'

const API_URL: string = "http://open_preprod.tan.fr"

const restClient: RestClient = new RestClient('rest-samples', API_URL);

export default {

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