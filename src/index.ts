/// <reference path="../src/api.ts" />
/// <reference path="../src/diablo3.ts" />
/// <reference path="../src/wow.ts" />
/// <reference path="../src/exceptions.ts" />
/// <reference path="../src/httpRequest.ts" />

import {API} from './api'
import * as Wow from './wow'
import * as Diablo3 from './diablo3'
import {HttpRequest} from './httpRequest'

export = {
    API,
    Wow,
    Diablo3,
    HttpRequest
}