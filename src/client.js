'use strict';

/**
 * OPNsense Client
 *
 * @module OPNsense/Client
 */

const axios = require('axios');
const https = require('https');
const querystring = require('querystring');

/**
 * OPNsense Client
 */
class Client {
    /**
     * Setup Client class, which is used by every API
     *
     * @param {string}  baseURL    OPNsense url
     * @param {string}  key        OPNsense API key
     * @param {string}  secret     OPNsense API secret
     * @param {boolean} verify_tls Check TLS certificates
     */
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

    /**
     * Response object
     *
     * @param   {string} status Request status ('error', 'success')
     * @param   {*}      result Request result
     * @returns {object}        Response object
     */
    response (status, result) {
        return {
            status: status,
            result: result
        };
    }

    /**
     * Send GET-request
     *
     * @param   {string}  url  Request url
     * @param   {object}  data Request data
     * @returns {Promise}      Request promise
     */
    async get (url, data = {}) {
        const response = this.client({
            url: url,
            method: 'get',
            params: data,
        })
        .then(res => {
            return this.response('success', res.data);
        })
        .catch(res => {
            return this.response('error', res.message);
        });

        return response;
    }

    /**
     * Send POST-requiest
     *
     * @param   {string}  url  Request url
     * @param   {object}  data Request data
     * @returns {Promise}      Request promise
     */
    async post (url, data = {}) {
        const response = this.client({
            url: url,
            method: 'post',
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
