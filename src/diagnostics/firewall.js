'use strict';

/**
 * FirewallClient
 *
 * @module OPNsense/Diagnostics/FirewallClient
 */

const BaseClient = require('../base');

/**
 * Firewall
 */
class FirewallClient extends BaseClient {
    /**
     * @openapi
     *
     * /diagnostics/firewall/log:
     *   get:
     *     summary: Get log
     *     tags:
     *       - diagnostics/firewall
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
     *               limit:
     *                 type: integer
     *               digest:
     *                 type: string
     */
    /**
     * Get log
     *
     * @param   {number|null} limit  Limit
     * @param   {string|null} digest Digest
     * @returns {Promise}            Request promise
     */
    async log (limit = null, digest = null) {
        const get_data = {
            limit:  (limit === null)  ? '' : limit,
            digest: (digest === null) ? '' : digest,
        };

        return this.client.get('/diagnostics/firewall/log', get_data);
    }

    /**
     * @openapi
     *
     * /diagnostics/firewall/log_filters:
     *   get:
     *     summary: Get log filters
     *     tags:
     *       - diagnostics/firewall
     *     responses:
     *       '200':
     *         description: OK
     *         content:
     *           application/json:
     *             {}
     */
    /**
     * Get log filters
     *
     * @returns {Promise} Request promise
     */
    async log_filters () {
        return this.client.get('/diagnostics/firewall/log_filters');
    }

    /**
     * @openapi
     *
     * /diagnostics/firewall/stats:
     *   get:
     *     summary: Get stats
     *     tags:
     *       - diagnostics/firewall
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
     *               limit:
     *                 type: integer
     *               group_by:
     *                 type: string
     */
    /**
     * Get stats
     *
     * @param   {number|null} limit    Limit
     * @param   {string|null} group_by Group by
     * @returns {Promise}              Request promise
     */
    async stats (limit = null, group_by = null) {
        const get_data = {
            limit:    (limit === null)    ? '' : limit,
            group_by: (group_by === null) ? '' : group_by,
        };

        return this.client.get('/diagnostics/firewall/stats', get_data);
    }
}

module.exports = FirewallClient;
