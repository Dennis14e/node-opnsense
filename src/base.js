'use strict';

/**
 * BaseClient
 *
 * @module OPNsense/BaseClient
 */
class BaseClient {
    /**
     *
     * @param {OPNsense.Client} opnsenseClient OPNsense.Client class
     */
    constructor (opnsenseClient) {
        this.client = opnsenseClient;
    }
}

module.exports = BaseClient;
