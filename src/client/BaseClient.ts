'use strict';

import { OPNsenseAPIClient } from '../OPNsenseAPIClient';
import { HttpClient } from './HttpClient';

/**
 * OPNsense/BaseClient
 *
 * @module OPNsense/BaseClient
 */
class BaseClient {
    httpClient: HttpClient;

    constructor (opnsenseClient: OPNsenseAPIClient) {
        this.httpClient = opnsenseClient.httpClient;
    }
}

export { BaseClient };
