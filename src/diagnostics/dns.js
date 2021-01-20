'use strict';

/**
 * DnsClient
 *
 * @module OPNsense/Diagnostics/DnsClient
 */

const BaseClient = require('../base');

/**
 * Dns
 */
class DnsClient extends BaseClient {
    /**
     * @openapi
     *
     * /diagnostics/dns/reverse_lookup:
     *   get:
     *     summary: Reverse lookup
     *     tags:
     *       - diagnostics/dns
     *     responses:
     *       '200':
     *         description: OK
     *         content:
     *           application/json:
     *             {}
     *     requestBody:
     *       content:
     *         x-www-form-urlencoded:
     *           schema:
     *             type: object
     *             properties:
     *               address:
     *                 type: string
     *             required:
     *               - address
     */
    /**
     * Reverse lookup
     *
     * @param   {string}  address Address
     * @returns {Promise}         Request promise
     */
    async reverse_lookup (address) {
        const get_data = { address: address };
        return this.client.get('/diagnostics/dns/reverse_lookup', get_data);
    }
}

module.exports = DnsClient;
