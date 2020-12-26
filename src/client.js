'use strict';

const axios = require('axios');
const https = require('https');
const querystring = require('querystring');

class Client {
    constructor (baseURL, key, secret, verify_tls = true) {
        baseURL = baseURL.replace(/\/?$/, '/');
        this._baseURL = baseURL + 'api';
        this._key = key;
        this._secret = secret;
        this._verify_tls = Boolean(verify_tls);

        this.client = axios.create({
            baseURL: this._baseURL,
            auth: {
                username: this._key,
                password: this._secret,
            },
            httpsAgent: new https.Agent({
                rejectUnauthorized: this._verify_tls,
            }),
        });
    }

    response (status, result) {
        return {
            status: status,
            result: result
        };
    }

    async request (url, method = 'get', data = {}) {
        const response = this.client({
            url: url,
            method: method,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            data: querystring.stringify(data),
        })
        .then(res => {
            return this.response('success', res.data);
        })
        .catch(res => {
            return this.response('error', res.message);
        });

        return response;
    }
}

module.exports = Client;
