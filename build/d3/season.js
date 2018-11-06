"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
const request = __importStar(require("request-promise"));
var BlizzardTypo;
(function (BlizzardTypo) {
    var Diablo3;
    (function (Diablo3) {
        class Season {
            constructor(bearerToken) {
                /**
                 * Returns an index of available seasons.
                 *
                 * @param {string} region
                 *
                 * @return Promise
                 */
                this.seasonIndexes = (region) => {
                    return new Promise((resolve, reject) => {
                        request.get(`https://${region}.api.blizzard.com/data/d3/season/?access_token=${this.token.identifier}`)
                            .then(JSON.parse)
                            .then(resolve)
                            .catch(reject);
                    });
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
        Diablo3.Season = Season;
    })(Diablo3 = BlizzardTypo.Diablo3 || (BlizzardTypo.Diablo3 = {}));
})(BlizzardTypo || (BlizzardTypo = {}));
module.exports = BlizzardTypo.Diablo3;
