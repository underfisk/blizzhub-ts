/**
 * Creates the api
 */

import * as chai from 'chai'
import {API} from '../api'
import $ from 'axios'
import * as dotenv from 'dotenv'
dotenv.config()

const clientId = process.env.CLIENT_ID || ""
const clientSecret = process.env.CLIENT_SECRET || ""
let api = null


describe('API Authentication', () => {
    it('should connect with provided credentials', done => {
        api = new API(clientId, clientSecret, (err, token) => {
            chai.expect(err).to.be.null
            done()
        })
    }).timeout(10000)

    it('should not connect with invalid credentials', done => {
        api = new API('', '', (err, token) => {
            chai.expect(err).to.not.be.null
            done()
        })
    }).timeout(10000)
})
