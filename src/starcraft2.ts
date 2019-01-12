import { IBearerToken, Region, Locale } from "./api";
import { HttpRequest } from './httpRequest'
import { ApiException } from "./exceptions";

/**
 * The region for the profile enumeration
 * @package Starcraft2
 */
export enum RegionId {
    US = 1,
    EU = 2,
    KO = 3,
    TW = 3,
    CN = 5
}

/**
 * Starcraft2 API Reference 
 * @link https://develop.battle.net/documentation/api-reference/
 */
export namespace Starcraft2
{
    /**
     * Profile requests of bnet account data
     * 
     * @author Enigma
     * @package Starcraft2
     * @link https://develop.battle.net/documentation/api-reference/diablo-3-community-api
     */
    export class Profile
    {
        /**
         * Authorization token instance
         */
        private token: IBearerToken

        /**
         * Initializes our bearer token
         * @param IBearerToken bearerToken 
         */
        constructor(bearerToken: IBearerToken){
            this.token = bearerToken
        }

        /**
         * Initializes the authorization token for this profile can operate
         */
        set bearerToken (token: IBearerToken) {
            this.token = token
        }

        /**
         * Returns all static SC2 profile data (achievements, categories, criteria, and rewards).
         * 
         * @param string region
         * @param number regionId  (1=US, 2=EU, 3=KO and TW, 5=CN).
         * @param string locale
         * 
         * @return Promise
         */
        getStatic = (region: Region, regionId: RegionId, locale: Locale): Promise<JSON | ApiException> => {
            return HttpRequest.get(`https://${region}.api.blizzard.com/sc2/static/profile/${regionId}?locale=${locale}&access_token=${this.token.identifier}`)
        }

        /**
         * Returns metadata for an individual's profile.
         * 
         * @param string region
         * @param RegionId regionId
         * @param number realmId
         * @param number profileId
         * @param string locale
         * 
         * @return Promise
         */
        getMetadata = (region: Region, regionId: RegionId, realmId: number, 
            profileId: number, locale: Locale) : Promise<JSON | ApiException> => {
            return HttpRequest.get(`https://${region}.api.blizzard.com/sc2/metadata/profile/${regionId}/${realmId}/${profileId}?locale=${locale}&access_token=${this.token.identifier}`)
        }
        
        /**
         * Returns data about an individual SC2 profile.
         * 
         * @param string region
         * @param RegionId regionId
         * @param number realmId
         * @param number profileId
         * @param string locale
         * 
         * @return Promise
         */
        getProfile = (region: Region, regionId: RegionId, realmId: number,
            profileId: number, locale: Locale) : Promise<JSON | ApiException> => {
            return HttpRequest.get(`https://${region}.api.blizzard.com/sc2/profile/${regionId}/${realmId}/${profileId}?locale=${locale}&access_token=${this.token.identifier}`)
        }

    }
}