'use strict';

const axios = require('axios');
require('axios-debug-log');

class OPNSense {
    constructor(baseURL, key, secret) {
        this._baseURL = baseURL + 'api';
        this._key = key;
        this._secret = secret;

        this.client = axios.create({
            baseURL: this._baseURL,
            auth: {
                username: this._key,
                password: this._secret,
            },
        });

        if (true === true) {
            this.client.interceptors.request.use(function (config) {
                console.log(config);
                return config;
            });
        }
    }

    async request(url, method = 'get', data = {}) {
        const response = this.client({
            url: url,
            method: method,
            data: data,
        })
        .then(function (data) {
            console.log('Success: ' + JSON.stringify(data));
        })
        .catch(function (error) {
            return {
                status: 'error',
                data: error.message,
            };
        });

        return response;
    }

    async wol_searchHost() {
        return await this.request('/wol/wol/searchHost/');
    }
}

module.exports = OPNSense;
