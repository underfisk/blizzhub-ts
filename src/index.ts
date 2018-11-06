import {API, IBearerToken } from './api'
import Diablo3 from './diablo3'
import Wow from './wow'

const client_id = "9b578c32d95c49b481b8835473feef74"
const client_secret = "m11cvtkOZIRpgHcAG6nD79DsNgpZ6X9p"
const api = new API(client_id, client_secret,  (status: boolean, token: IBearerToken) => {
    console.log("Authorization token was been succesfully retrieved.")
    console.log("TOKEN = " + token.identifier)
    const season = new Diablo3.Season(token),
        profile = new Diablo3.Profile(token),
        era = new Diablo3.Era(token),
        wow = new Wow.Boss(token)

        wow.getMasterList("us", "en_US").then(data => {
            console.log(data)
        })


})
