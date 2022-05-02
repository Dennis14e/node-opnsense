'use strict';

import * as http from 'http';
import * as https from 'https';

interface Options {
    hostname: string;
    port: number;
    path: string;
    method: string;
    headers: http.OutgoingHttpHeaders;
    httpModule: typeof http | typeof https;
    httpAgent: http.Agent | https.Agent;
}

export class HttpClient {
    options: Options;

    constructor (options: Options) {
        this.options = options;
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
            const req = this.options.httpModule.request(options, (res) => {
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
        const dataStr = new URLSearchParams(data).toString();

        const options = this.options; // copy base options
        options.path += url + '?' + dataStr;

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
        const dataStr = new URLSearchParams(data).toString();

        const options = this.options; // copy base options
        options.path += url;
        options.method = 'POST';
        options.headers['Content-Type'] = 'application/x-www-form-urlencoded';
        options.headers['Content-Length'] = dataStr.length;

        const req = this.request(options, dataStr)
        .then((res) => {
            return this.response('success', res);
        })
        .catch((res) => {
            return this.response('error', res);
        });

        return req;
    }
}
