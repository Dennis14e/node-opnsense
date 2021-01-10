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
     * @openapi
     *
     * /core/system/halt:
     *   get:
     *     summary: Halt system
     *     tags:
     *       - core/system
     *     produces:
     *       - application/json
     */
    /**
     * Halt system
     *
     * @returns {Promise} Request promise
     */
    async halt () {
        return this.client.get('/core/system/halt');
    }

    /**
     * @openapi
     *
     * /core/system/reboot:
     *   get:
     *     summary: Reboot system
     *     tags:
     *       - core/system
     *     produces:
     *       - application/json
     */
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
