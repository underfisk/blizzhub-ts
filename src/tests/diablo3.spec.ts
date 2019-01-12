/**
 * Creates the api
 */

import * as chai from 'chai'
import {API, IBearerToken, Region, Locale} from '../api'
import { Diablo3 } from '../diablo3'

import $ from 'axios'
import * as dotenv from 'dotenv'
dotenv.config()

const clientId = process.env.CLIENT_ID || ""
const clientSecret = process.env.CLIENT_SECRET || ""
const locale = process.env.LOCALE || ""
const region = process.env.REGION || ""
const btag = process.env.BATTLETAG || ""

let api: API
let _token: IBearerToken 

describe('Diablo3 API tests', () => {
    before('establish a connection', () => {
        return new Promise( (resolve, reject) => {
            api = new API(clientId, clientSecret, (err, token) => {
                if (err !== null)
                    reject(err)
                else {
                    _token = token as IBearerToken
                    resolve()
                }
            })
        })
    })

    describe('Profile class testing', () => {
        it('should getApiAccount', done => {
            let profile = new Diablo3.Profile(_token)
            profile.getApiAccount(Region.Europe, btag, Locale.British).catch( err => {
                console.log(err)
                //chai.expect(err).to.be.undefined
                //done(err)
            })
            .then( data => {
                console.log(data)
                //chai.expect(data).to.be.not.undefined
                done()
            })
        }).timeout(10000)
    })
})
