import * as request from 'request-promise'

namespace BlizzardTypo
{
    /**
     * Isolated interface only exclusive
     * for this API class
     */
    export interface IBearerToken
    {
        identifier: string,
        type: string,
        expires_in: number,
        scope?: string
    }


    /**
     * Implements all the requests interfaces in order to proceed
     * blizzard valid requests
     * (Mentioned to be scope only for the individual games)
     * 
     * @author Enigma
     * @package BlizzardTypo
     */
    export class API
    {
        private hasToken: boolean = false

        //API Language 
        private region: string
        private locale: string 

        //API workaround data
        private client_id: string
        private client_secret: string
        private authToken?: IBearerToken

        private callbackOnConnect: Function

        /**
         * Initializes our api with the given credentials
         * @param clientId 
         * @param clientSecret 
         * @param region    default europe
         * @param locale    default eu_GB
         */
        constructor(clientId: string, clientSecret: string, callbackOnConnect: Function, region?: string, locale?: string) {
            this.region = typeof region != 'undefined' ? region : "eu"
            this.locale = typeof locale != 'undefined' ? locale : "en_GB"
            this.client_id = clientId
            this.client_secret = clientSecret
            this.callbackOnConnect = callbackOnConnect
            this.retrieveToken()
        }


        /**
         * Sets the Authorization Bearer token
         * (Just set if you have a valid one)
         * 
         * @param {BearerToken} token
         * 
         * @return void
         */
        setBearerToken = (token: IBearerToken) => {
            this.authToken = token
        }

        /**
         * Returns the Authorization Bearer Token
         * 
         * @return IBearer
         */
        get getBearerToken (){
            return this.authToken
        }

        /**
         * Returns whether the authorization token has been
         * initialized
         * 
         * @return boolean
         */
        hasAuthorizationToken () : boolean {
            return this.hasToken
        }

        /**
         * Retrieves our Authorization Bearer Token in order to proceed
         * further requests
         * 
         * @return void
         */
        private retrieveToken = () => {
            request.get(`https://${this.region}.battle.net/oauth/token?client_id=${this.client_id}&client_secret=${this.client_secret}&grant_type=client_credentials`)
                .then(JSON.parse)
                .then(body => {
                    this.authToken = {
                        identifier: body.access_token,
                        type: body.token_type,
                        expires_in: body.expires_in,
                        scope: body.scope
                    }
                    this.hasToken = true
                    this.callbackOnConnect(true, this.authToken)
                })
                .catch(err => {
                    console.log(err)
                    //filter error and throw exception according to it
                })
        }


    }
}

export = BlizzardTypo