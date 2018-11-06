"use strict";
const httpRequest_1 = require("./httpRequest");
/**
 * Wow API Reference
 * @link https://develop.battle.net/documentation/api-reference/
 */
var Wow;
(function (Wow) {
    /**
     * ConnectedRealm requests all the connected realms
     *
     * @author Enigma
     * @package Wow
     * @link https://develop.battle.net/documentation/api-reference/world-of-warcraft-game-data-api
     */
    class ConnectedRealm {
        /**
         * Initializes our bearer token
         * @param IBearerToken bearerToken
         */
        constructor(bearerToken) {
            /**
             * Returns an index of connected realms.
             *
             * @param string region
             * @param string namespace
             * @param string locale
             *
             * @return Promise
             */
            this.getConnectedRealmIndex = (region, namespace, locale) => {
                return httpRequest_1.HttpRequest.get(`https://${region}.api.blizzard.com/data/wow/connected-realm/?namespace=${namespace}&
                locale=${locale}&access_token=${this.token.identifier}`);
            };
            /**
             * Returns a single connected realm by ID.
             *
             * @param string region
             * @param number connRealmId
             * @param string namespace
             * @param string locale
             *
             * @return Promise
             */
            this.getConnectedRealm = (region, connRealmId, namespace, locale) => {
                return httpRequest_1.HttpRequest.get(`https://${region}.api.blizzard.com/data/wow/connected-realm/${connRealmId}?namespace=${namespace}&
            locale=${locale}&access_token=${this.token.identifier}`);
            };
            this.token = bearerToken;
        }
        /**
         * Initializes the authorization token for this profile can operate
         */
        set bearerToken(token) {
            this.token = token;
        }
    }
    Wow.ConnectedRealm = ConnectedRealm;
    /**
     * Mythic requests keystones, leaderboards and modes data
     *
     * @author Enigma
     * @package Wow
     * @link https://develop.battle.net/documentation/api-reference/world-of-warcraft-game-data-api
     */
    class Mythic {
        /**
         * Initializes our bearer token
         * @param IBearerToken bearerToken
         */
        constructor(bearerToken) {
            /**
             * Returns an index of Mythic Keystone Leaderboard dungeon instances for a connected realm.
             *
             * @param string region
             * @param number connRealmid
             * @param string namespace
             * @param string locale
             *
             * @return Promise
             */
            this.getMythicLeaderboardIndex = (region, connRealmId, namespace, locale) => {
                return httpRequest_1.HttpRequest.get(`https://${region}.api.blizzard.com/data/wow/connected-realm/${connRealmId}/mythic-leaderboard/?
                namespace=${namespace}&locale=${locale}&access_token=${this.token.identifier}`);
            };
            /**
             * Returns a weekly Mythic Keystone Leaderboard by period.
             * @param string region
             * @param number connRealmid
             * @param number dungeonId
             * @param number period
             * @param string namespace
             * @param string locale
             *
             * @return Promise
             */
            this.getMythicLeaderboard = (region, connRealmId, dungeonId, period, namespace, locale) => {
                return httpRequest_1.HttpRequest.get(`https://${region}.api.blizzard.com/data/wow/connected-realm/${connRealmId}/mythic-leaderboard/${dungeonId}/period/${period}?
                namespace=${namespace}&locale=${locale}&access_token=${this.token.identifier}`);
            };
            /**
             * Returns the leaderboard for a given raid and faction.
             *
             * @param string region
             * @param string raid
             * @param string faction
             * @param string namespace
             * @param string locale
             *
             * @return Promise
             */
            this.getMythicRaidLeaderboard = (region, raid, faction, namespace, locale) => {
                return httpRequest_1.HttpRequest.get(`https://${region}.api.blizzard.com/data/wow/leaderboard/hall-of-fame/${raid}/${faction}?namespace=${namespace}&locale=${locale}&access_token=${this.token.identifier}`);
            };
            /**
             * Returns current period information about the Mythic Challenge Mode relevant to Mythic Keystone Leaderboards.
             *
             * @param string region
             * @param string namespace
             * @param string locale
             *
             * @return Promise
             */
            this.getMythicChallengeModeIndex = (region, namespace, locale) => {
                return httpRequest_1.HttpRequest.get(`https://${region}.api.blizzard.com/data/wow/mythic-challenge-mode/?namespace=${namespace}&
                locale=${locale}&access_token=${this.token.identifier}`);
            };
            this.token = bearerToken;
        }
        /**
         * Initializes the authorization token for this profile can operate
         */
        set bearerToken(token) {
            this.token = token;
        }
    }
    Wow.Mythic = Mythic;
    /**
     * PlayableSpecialization requests class specs data
     *
     * @author Enigma
     * @package Wow
     * @link https://develop.battle.net/documentation/api-reference/world-of-warcraft-game-data-api
     */
    class PlayableSpecialization {
        /**
         * Initializes our bearer token
         * @param IBearerToken bearerToken
         */
        constructor(bearerToken) {
            /**
             * Returns an index of playable specializations.
             *
             * @param string region
             * @param string namespace
             * @param string locale
             *
             * @return Promise
             */
            this.getPlayableSpecializationIndex = (region, namespace, locale) => {
                return httpRequest_1.HttpRequest.get(`https://${region}.api.blizzard.com/data/wow/playable-specialization/?namespace=${namespace}
                &locale=${locale}&access_token=${this.token.identifier}`);
            };
            /**
             * Returns a playable specialization by ID.
             *
             * @param string region
             * @param number specId
             * @param string namespace
             * @param string locale
             *
             * @return Promise
             */
            this.getPlayableSpecialization = (region, specId, namespace, locale) => {
                return httpRequest_1.HttpRequest.get(`https://${region}.api.blizzard.com/data/wow/playable-specialization/${specId}?namespace=${namespace}
                &locale=${locale}&access_token=${this.token.identifier}`);
            };
            this.token = bearerToken;
        }
        /**
         * Initializes the authorization token for this profile can operate
         */
        set bearerToken(token) {
            this.token = token;
        }
    }
    Wow.PlayableSpecialization = PlayableSpecialization;
    /**
     * Realm requests all the realm data
     *
     * @author Enigma
     * @package Wow
     * @link https://develop.battle.net/documentation/api-reference/world-of-warcraft-game-data-api
     */
    class Realm {
        /**
         * Initializes our bearer token
         * @param IBearerToken bearerToken
         */
        constructor(bearerToken) {
            /**
             * Returns an index of realms.
             *
             * @param string region
             * @param string namespace
             * @param string locale
             *
             * @return Promise
             */
            this.getRealmIndex = (region, namespace, locale) => {
                return httpRequest_1.HttpRequest.get(`https://${region}.api.blizzard.com/data/wow/realm/?namespace=${namespace}&
                locale=${locale}&access_token=${this.token.identifier}`);
            };
            /**
             * Returns a single realm by slug or ID.
             *
             * @param string region
             * @param string realmSlug
             * @param string namespace
             * @param string locale
             *
             * @return Promise
             */
            this.getRealm = (region, realmSlug, namespace, locale) => {
                return httpRequest_1.HttpRequest.get(`https://${region}.api.blizzard.com/data/wow/realm/${realmSlug}?namespace=${namespace}&
                locale=${locale}&access_token=${this.token.identifier}`);
            };
            this.token = bearerToken;
        }
        /**
         * Initializes the authorization token for this profile can operate
         */
        set bearerToken(token) {
            this.token = token;
        }
    }
    Wow.Realm = Realm;
    /**
     * Region requests all the region data
     *
     * @author Enigma
     * @package Wow
     * @link https://develop.battle.net/documentation/api-reference/world-of-warcraft-game-data-api
     */
    class Region {
        /**
         * Initializes our bearer token
         * @param IBearerToken bearerToken
         */
        constructor(bearerToken) {
            /**
             * Returns an index of regions.
             *
             * @param string region
             * @param string namespace
             * @param string locale
             *
             * @return Promise
             */
            this.getRegionIndex = (region, namespace, locale) => {
                return httpRequest_1.HttpRequest.get(`https://${region}.api.blizzard.com/data/wow/region/?namespace=${namespace}&
                locale=${locale}&access_token=${this.token.identifier}`);
            };
            /**
             * Returns a single region by ID.
             *
             * @param string region
             * @param number regionId
             * @param string namespace
             * @param string locale
             *
             * @return Promise
             */
            this.getRegion = (region, regionId, namespace, locale) => {
                return httpRequest_1.HttpRequest.get(`https://${region}.api.blizzard.com/data/wow/region/${regionId}?namespace=${namespace}&
                locale=${locale}&access_token=${this.token.identifier}`);
            };
            this.token = bearerToken;
        }
        /**
         * Initializes the authorization token for this profile can operate
         */
        set bearerToken(token) {
            this.token = token;
        }
    }
    Wow.Region = Region;
    /**
     * Token requests all the time token data
     *
     * @author Enigma
     * @package Wow
     * @link https://develop.battle.net/documentation/api-reference/world-of-warcraft-game-data-api
     */
    class Token {
        /**
         * Initializes our bearer token
         * @param IBearerToken bearerToken
         */
        constructor(bearerToken) {
            /**
             * Returns the WoW Token index.
             *
             * @param string region
             * @param string namespace
             * @param string locale
             *
             * @return Promise
             */
            this.getTokenIndex = (region, namespace, locale) => {
                return httpRequest_1.HttpRequest.get(`https://${region}.api.blizzard.com/data/wow/token/?namespace=${namespace}
                &locale=${locale}&access_token=${this.token.identifier}`);
            };
            this.token = bearerToken;
        }
        /**
         * Initializes the authorization token for this profile can operate
         */
        set bearerToken(token) {
            this.token = token;
        }
    }
    Wow.Token = Token;
    /**
     * Achivement requests to retrieve in-game achivement id
     *
     * @author Enigma
     * @package Wow
     * @link https://develop.battle.net/documentation/api-reference/world-of-warcraft-community-api
     */
    class Achievement {
        /**
         * Initializes our bearer token
         * @param IBearerToken bearerToken
         */
        constructor(bearerToken) {
            /**
             * Returns data about an individual achievement.
             *
             * @param string region
             * @param string id
             * @param string locale
             *
             * @return Promise
             */
            this.getAchivement = (region, id, locale) => {
                return httpRequest_1.HttpRequest.get(`https://${region}.api.blizzard.com/wow/achievement/${id}?
                locale=${locale}&access_token=${this.token.identifier}`);
            };
            this.token = bearerToken;
        }
        /**
         * Initializes the authorization token for this profile can operate
         */
        set bearerToken(token) {
            this.token = token;
        }
    }
    Wow.Achievement = Achievement;
    /**
     * Auction request all auction house listed items
     *
     * @author Enigma
     * @package Wow
     * @link https://develop.battle.net/documentation/api-reference/world-of-warcraft-community-api
     */
    class Auction {
        /**
         * Initializes our bearer token
         * @param IBearerToken bearerToken
         */
        constructor(bearerToken) {
            /**
             * Auction APIs currently provide rolling batches of data about current auctions. Fetching auction dumps is a two-step process that involves checking a per-realm index file to determine if a recent dump has been generated and then fetching the most recently generated dump file (if necessary).
             * This API resource provides a per-realm list of recently generated auction house data dumps.
             *
             * @param string region
             * @param string realm
             * @param string locale
             *
             * @return Promise
             */
            this.getAuctionData = (region, realm, locale) => {
                return httpRequest_1.HttpRequest.get(`https://${region}.api.blizzard.com/wow/auction/data/${realm}?
                locale=${locale}&access_token=${this.token.identifier}`);
            };
            this.token = bearerToken;
        }
        /**
         * Initializes the authorization token for this profile can operate
         */
        set bearerToken(token) {
            this.token = token;
        }
    }
    Wow.Auction = Auction;
    /**
     * Boss request all the bosses data or single
     *
     * @author Enigma
     * @package Wow
     * @link https://develop.battle.net/documentation/api-reference/world-of-warcraft-community-api
     */
    class Boss {
        /**
         * Initializes our bearer token
         * @param IBearerToken bearerToken
         */
        constructor(bearerToken) {
            /**
             * Returns a list of all supported bosses. A "boss" in this context should be considered a boss encounter, which may include more than one NPC.
             *
             * @param string region
             * @param string locale
             *
             * @return Promise
             */
            this.getMasterList = (region, locale) => {
                return httpRequest_1.HttpRequest.get(`https://${region}.api.blizzard.com/wow/boss/?locale=${locale}&access_token=${this.token.identifier}`);
            };
            this.token = bearerToken;
        }
        /**
         * Initializes the authorization token for this profile can operate
         */
        set bearerToken(token) {
            this.token = token;
        }
    }
    Wow.Boss = Boss;
})(Wow || (Wow = {}));
module.exports = Wow;
