'use strict';

import { BaseClient } from '../../client/BaseClient';

/**
 * TrafficClient
 *
 * @module OPNsense/Diagnostics/TrafficClient
 */

/**
 * Traffic
 */
export class TrafficClient extends BaseClient {
    /**
     * @openapi
     *
     * /diagnostics/traffic/Interface:
     *   get:
     *     summary: Retrieve interface traffic stats
     *     tags:
     *       - diagnostics/traffic
     *     responses:
     *       '200':
     *         description: OK
     *         content:
     *           application/json:
     *             {}
     */
    /**
     * Retrieve interface traffic stats
     *
     * @returns {Promise} Request promise
     */
    async Interface () {
        return this.httpClient.get('/diagnostics/traffic/Interface');
    }

    /**
     * @openapi
     *
     * /diagnostics/traffic/Top/{interfaces}:
     *   get:
     *     summary: Retrieve interface top traffic hosts
     *     tags:
     *       - diagnostics/traffic
     *     responses:
     *       '200':
     *         description: OK
     *         content:
     *           application/json:
     *             {}
     *     parameters:
     *       - in: path
     *         name: interfaces
     *         schema:
     *           type: string
     *         required: true
     */
    /**
     * Retrieve interface top traffic hosts
     *
     * @param   {Array}   interfaces Interfaces
     * @returns {Promise}            Request promise
     */
    async Top (interfaces) {
        interfaces = interfaces.join(',');
        return this.httpClient.get('/diagnostics/traffic/Top/' + interfaces);
    }
}
