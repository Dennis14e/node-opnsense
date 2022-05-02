'use strict';

import { BaseClient } from '../../client/BaseClient';

/**
 * SystemClient
 *
 * @module OPNsense/Core/SystemClient
 */

/**
 * System
 */
export class SystemClient extends BaseClient {
    /**
     * @openapi
     *
     * /core/system/halt:
     *   get:
     *     summary: Halt system
     *     tags:
     *       - core/system
     *     responses:
     *       '200':
     *         description: OK
     *         content:
     *           application/json:
     *             {}
     */
    /**
     * Halt system
     *
     * @returns {Promise} Request promise
     */
    async halt () {
        return this.httpClient.get('/core/system/halt');
    }

    /**
     * @openapi
     *
     * /core/system/reboot:
     *   get:
     *     summary: Reboot system
     *     tags:
     *       - core/system
     *     responses:
     *       '200':
     *         description: OK
     *         content:
     *           application/json:
     *             {}
     */
    /**
     * Reboot system
     *
     * @returns {Promise} Request promise
     */
    async reboot () {
        return this.httpClient.get('/core/system/reboot');
    }
}
