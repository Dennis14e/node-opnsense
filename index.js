'use strict';

const axios = require('axios');
const https = require('https');

require('axios-debug-log');

class OPNSense {
    constructor (baseURL, key, secret, verify_tls = true) {
        baseURL = baseURL.replace(/\/?$/, '/');
        this._baseURL = baseURL + 'api';
        this._key = key;
        this._secret = secret;
        this._verify_tls = Boolean(verify_tls);
        this._debug = false;

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

        if (this._debug === true) {
            this.client.interceptors.request.use(config => {
                console.log(config);
                return config;
            });
        }
    }

    response (status, result) {
        return {
            status: status,
            result: result
        };
    }

    async request (url, method = 'get', data = null) {
        const response = this.client({
            url: url,
            method: method,
            data: data,
        })
        .then(res => {
            return this.response('success', res.data);
        })
        .catch(res => {
            return this.response('error', res.message);
        });

        return response;
    }

    async wol_searchHost () {
        return await this.request('/wol/wol/searchHost');
    }

    async wol_set (uuid) {
        return await this.request('/wol/wol/set', 'post', { uuid: uuid });
    }
}

module.exports = OPNSense;
