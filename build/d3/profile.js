"use strict";
var BlizzardTypo;
(function (BlizzardTypo) {
    var Diablo3;
    (function (Diablo3) {
        class Profile {
            constructor(bearerToken) {
                this.token = bearerToken;
            }
            /**
             * Initializes the authorization token for this profile can operate
             */
            set bearerToken(token) {
                this.token = token;
            }
        }
        Diablo3.Profile = Profile;
    })(Diablo3 = BlizzardTypo.Diablo3 || (BlizzardTypo.Diablo3 = {}));
})(BlizzardTypo || (BlizzardTypo = {}));
module.exports = BlizzardTypo.Diablo3;
