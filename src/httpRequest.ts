import * as request from 'request-promise'
import {ApiException} from './exceptions'

/**
 * Interface for request data as cache
 */
interface LastRequest
{
    data: JSON,
    url: string,
    headers: JSON,
    statusCode: number,
    date: any
}

export class HttpRequest
{
    /**
     * Holds the last request data
     */
    private static _last : LastRequest
    
    /**
     * Performs a simple get request by the given URL
     * 
     * @param string url
     * 
     * @return Promise
     */
    public static get = (url: string) : Promise<JSON|ApiException> => {
        return new Promise( (resolve,reject) => {
            //Cache the last response and check for the URL
            if (typeof HttpRequest._last != 'undefined' && 
                url === HttpRequest._last.url)
                resolve(HttpRequest._last.data)
            
            //Perform the request
            request.get(url, {resolveWithFullResponse: true})
                .then( res => {
                    HttpRequest._last = {
                        data: res.body,
                        url: url,
                        headers: res.headers,
                        statusCode: 200, //test
                        date: Date.now()
                    }
                    resolve(res.body)
                })
                .catch( e => {
                    reject(e.error)
                })
        })
    }        
}