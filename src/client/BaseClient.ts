'use strict';

import { HttpClient } from './HttpClient';

/**
 * BaseClient
 *
 * @module OPNsense/BaseClient
 */
export class BaseClient {
    httpClient: HttpClient;

    /**
     *
     * @param {OPNsense.Client} httpClient HttpClient class
     */
    constructor (httpClient: HttpClient) {
        this.httpClient = httpClient;
    }
}
