import { API, IBearerToken } from "../api";
import * as request from 'request-promise'

namespace BlizzardTypo.Diablo3
{
    export class Season
    {
        private token? : IBearerToken
        constructor(bearerToken?: IBearerToken){
            this.token = bearerToken
        }
        
        /**
         * Initializes the authorization token for this profile can operate
         */
        set bearerToken (token: IBearerToken) {
            this.token = token
        }

        /**
         * Returns an index of available seasons.
         * 
         * @param {string} region
         * 
         * @return Promise
         */
        seasonIndexes = (region: string) => {
            return new Promise( (resolve,reject) => {
                request.get(`https://${region}.api.blizzard.com/data/d3/season/?access_token=${this.token}`)
                    .then(JSON.parse)
                    .then(Promise.resolve)
                    .catch(Promise.reject)
            })
        }
    
    }
}

export = BlizzardTypo.Diablo3