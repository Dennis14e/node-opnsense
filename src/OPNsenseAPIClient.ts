'use strict';

import * as http from 'http';
import * as https from 'https';

import { HttpClient } from './client/HttpClient';

interface Options {
    url: string;
    key: string;
    secret: string;
    verify_tls?: boolean;
}

export class OPNsenseAPIClient {
    httpClient: HttpClient = null;

    constructor (opts: Options) {
        const url = new URL(opts.url.replace(/\/?$/, '/') + 'api');
        const tls = url.protocol === 'https:';
        let httpModule: typeof http | typeof https;
        let httpAgentOptions = {};

        if (tls) {
            httpModule = https;

            httpAgentOptions = {
                rejectUnauthorized: opts.verify_tls,
            };
        }
        else {
            httpModule = http;
        }

        const httpAgent: http.Agent | https.Agent = new httpModule.Agent(httpAgentOptions);

        const httpOptions = {
            hostname: url.hostname,
            port: (
                url.port !== ''
                    ? parseInt(url.port)
                    : (tls ? 443 : 80)
            ),
            path: url.pathname,
            method: 'GET', // default
            headers: <http.OutgoingHttpHeaders>{
                'Authorization': 'Basic ' + Buffer.from(opts.key + ':' + opts.secret).toString('base64'),
                'Accept':        'application/json',
                'User-Agent':    'Node OPNsense API-Client',
            },
            httpModule: httpModule,
            httpAgent: httpAgent,
        };

        this.httpClient = new HttpClient(httpOptions);
    }
}
