'use strict';

/**
 * SystemClient
 *
 * @module OPNsense/Core/SystemClient
 */

const BaseClient = require('../base');

/**
 * System
 */
class SystemClient extends BaseClient {
    /**
     * Halt system
     *
     * @returns {Promise} Request promise
     */
    async halt () {
        return this.client.get('/core/system/halt');
    }

    /**
     * Reboot system
     *
     * @returns {Promise} Request promise
     */
    async reboot () {
        return this.client.get('/core/system/reboot');
    }
}

module.exports = SystemClient;
