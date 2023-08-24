'use strict';

import { BaseClient } from '../../client/BaseClient';

/**
 * Wireguard Server
 *
 * @module OPNsense/WireGuard/Server
 */

/**
 * System
 */
export class ServerClient extends BaseClient {
    /**
     * @openapi
     *
     * /wireguard/server/get:
     *   get:
     *     summary: get servers
     *     tags:
     *       - wireguard/servers
     *     responses:
     *       '200':
     *         description: OK
     *         content:
     *           application/json:
     *             {}
     */
    /**
     * Get wireguard servers
     *
     * @returns {Promise} Request promise
     */
    async get () {
        return this.httpClient.get('/wireguard/server/get');
    }

    /**
     * @openapi
     *
     * /wireguard/server/setServer:
     *   post:
     *     summary: create or modify wg server
     *     tags:
     *       - wireguard/server
     *     responses:
     *       '200':
     *         description: OK
     *         content:
     *           application/json:
     *             {}
     */
    /**
     * Create or update server
     *
     * @param   {string}  uuid      Server UUID
     * @param   {object}  post_data Server data
     * @returns {Promise}           Request promise
     */
    async setServer (uuid: string, post_data: object) {
        return this.httpClient.post('/wireguard/server/setServer/' + uuid, post_data);
    }
}
