import {API, IBearerToken } from './api'
import {Season} from './d3/season'

const client_id = "9b578c32d95c49b481b8835473feef74"
const client_secret = "m11cvtkOZIRpgHcAG6nD79DsNgpZ6X9p"
const api = new API(client_id, client_secret, async (status: boolean, token: IBearerToken) => {
    console.log("Authorization token was been succesfully retrieved.")
    console.log(token.identifier)
    const diablo3 = new Season(token)
    const seasons = await diablo3.seasonIndexes('eu')
    console.log(seasons)

})
