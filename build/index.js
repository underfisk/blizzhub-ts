"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("./api");
const diablo3_1 = __importDefault(require("./diablo3"));
const wow_1 = __importDefault(require("./wow"));
const client_id = "9b578c32d95c49b481b8835473feef74";
const client_secret = "m11cvtkOZIRpgHcAG6nD79DsNgpZ6X9p";
const api = new api_1.API(client_id, client_secret, (status, token) => {
    console.log("Authorization token was been succesfully retrieved.");
    console.log("TOKEN = " + token.identifier);
    const season = new diablo3_1.default.Season(token), profile = new diablo3_1.default.Profile(token), era = new diablo3_1.default.Era(token), wow = new wow_1.default.Boss(token);
    wow.getMasterList("us", "en_US").then(data => {
        console.log(data);
    });
});
