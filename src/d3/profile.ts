import { API, IBearerToken } from "../api";
import * as request from 'request-promise'

namespace BlizzardTypo.Diablo3
{

    export class Profile
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
    
    }
}

export = BlizzardTypo.Diablo3