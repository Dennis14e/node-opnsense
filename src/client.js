'use strict';

/**
 * OPNsense Client
 *
 * @module OPNsense/Client
 */

const http = require('http');
const https = require('https');

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
        this._baseURL = new URL(baseURL.replace(/\/?$/, '/') + 'api');
        this._key = key;
        this._secret = secret;
        this._verify_tls = Boolean(verify_tls);
        this._tls = this._baseURL.protocol === 'https:';

        this.options = {
            hostname: this._baseURL.hostname,
            port: (
                this._baseURL.port !== ''
                    ? parseInt(this._baseURL.port)
                    : (this._tls ? 443 : 80)
            ),
            path: this._baseURL.pathname, // default
            method: 'GET', // default
            headers: {
                'Authorization': 'Basic ' + Buffer.from(this._key + ':' + this._secret).toString('base64'),
                'Accept':        'application/json',
                'User-Agent':    'Node OPNsense API-Client',
            },
        };

        let agent_options = {};

        if (this._tls) {
            this.httpModule = https;

            agent_options = {
                rejectUnauthorized: this._verify_tls,
            };
        }
        else {
            this.httpModule = http;
        }

        this.options.agent = new this.httpModule.Agent(agent_options);
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
            result: result,
        };
    }

    /**
     * Request function
     *
     * @param   {object}          options  HTTP options
     * @param   {string}          postData URL-encoded POST data
     * @returns {Promise<object>}          Response object
     */
    request (options, postData = '') {
        return new Promise((resolve, reject) => {
            const req = this.httpModule.request(options, (res) => {
                if (res.statusCode < 200 || res.statusCode >= 300) {
                    return reject('Status code ' + res.statusCode);
                }

                let buffer = [];
                res.on('data', (chunk) => {
                    buffer.push(chunk);
                });

                res.on('end', () => {
                    try {
                        buffer = JSON.parse(Buffer.concat(buffer).toString());
                    }
                    catch (e) {
                        reject(e.message);
                    }

                    resolve(buffer);
                });
            });

            req.on('error', (e) => {
                reject(e.message);
            });

            if (postData !== '') {
                req.write(postData);
            }

            req.end();
        });
    }

    /**
     * Send GET-request
     *
     * @param   {string}  url  Request url
     * @param   {object}  data Request data
     * @returns {Promise}      Request promise
     */
    async get (url, data = {}) {
        data = new URLSearchParams(data).toString();

        let options = this.options; // copy base options
        options.path += url + '?' + data;

        const req = this.request(options)
        .then((res) => {
            return this.response('success', res);
        })
        .catch((res) => {
            return this.response('error', res);
        });

        return req;
    }

    /**
     * Send POST-requiest
     *
     * @param   {string}  url  Request url
     * @param   {object}  data Request data
     * @returns {Promise}      Request promise
     */
    async post (url, data = {}) {
        data = new URLSearchParams(data).toString();

        let options = this.options; // copy base options
        options.path += url;
        options.method = 'POST';
        options.headers['Content-Type'] = 'application/x-www-form-urlencoded';
        options.headers['Content-Length'] = data.length;

        const req = this.request(options, data)
        .then((res) => {
            return this.response('success', res);
        })
        .catch((res) => {
            return this.response('error', res);
        });

        return req;
    }
}

module.exports = Client;
