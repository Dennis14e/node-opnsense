'use strict';

/**
 * Wireguard Client
 *
 * @module OPNsense/WireGuard/Client
 */

const BaseClient = require('../base');

/**
 * System
 */
class WireguardClient extends BaseClient {
    /**
     * @openapi
     *
     * /wireguard/client/get:
     *   get:
     *     summary: get clients
     *     tags:
     *       - wireguard/client
     *     responses:
     *       '200':
     *         description: OK
     *         content:
     *           application/json:
     *             {}
     */
    /**
     * Get wireguard clients
     *
     * @returns {Promise} Request promise
     */
    async get () {
        return this.client.get('/wireguard/client/get');
    }

    /**
     * @openapi
     *
     * /wireguard/client/addClient:
     *   post:
     *     summary: create new endpoint client
     *     tags:
     *       - wireguard/client
     *     responses:
     *       '200':
     *         description: OK
     *         content:
     *           application/json:
     *             {}
     */
    /**
     * Create client
     *
     * @param   {string}  name          Client name
     * @param   {string}  tunneladdress Client tunnel address
     * @param   {string}  pubkey        Client public key
     * @returns {Promise}               Request promise
     */
    async addClient (name, tunneladdress, pubkey) {
        const data = {
            client: {
                name,
                pubkey,
                tunneladdress
            }
        };
        return this.client.post('/wireguard/client/addClient', data);
    }
}

module.exports = WireguardClient;
