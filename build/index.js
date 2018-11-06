"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("./api");
const season_1 = require("./d3/season");
const client_id = "9b578c32d95c49b481b8835473feef74";
const client_secret = "m11cvtkOZIRpgHcAG6nD79DsNgpZ6X9p";
const api = new api_1.API(client_id, client_secret, async (status, token) => {
    console.log("Authorization token was been succesfully retrieved.");
    console.log(token.identifier);
    const diablo3 = new season_1.Season(token);
    const seasons = await diablo3.seasonIndexes('eu');
    console.log(seasons);
});
