'use strict';

/**
 * ServiceClient
 *
 * @module OPNsense/Cron/ServiceClient
 */

const BaseClient = require('../base');

/**
 * Service
 */
class ServiceClient extends BaseClient {
    /**
     * @openapi
     *
     * /cron/service/reconfigure:
     *   post:
     *     summary: Reconfigure service
     *     tags:
     *       - cron/service
     *     responses:
     *       '200':
     *         description: OK
     *         content:
     *           application/json:
     *             {}
     */
    /**
     * Reconfigure service
     *
     * @returns {Promise} Request promise
     */
    async reconfigure () {
        return this.client.post('/cron/service/reconfigure');
    }
}

module.exports = ServiceClient;
