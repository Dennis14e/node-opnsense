'use strict';

/**
 * SystemhealthClient
 *
 * @module OPNsense/Diagnostics/SystemhealthClient
 */

const BaseClient = require('../base');

/**
 * Systemhealth
 */
class SystemhealthClient extends BaseClient {
    /**
     * @openapi
     *
     * /diagnostics/systemhealth/getInterfaces:
     *   get:
     *     summary: Get interfaces
     *     tags:
     *       - diagnostics/systemhealth
     *     responses:
     *       '200':
     *         description: OK
     *         content:
     *           application/json:
     *             {}
     */
    /**
     * Get interfaces
     *
     * @returns {Promise} Request promise
     */
    async getInterfaces () {
        return this.client.get('/diagnostics/systemhealth/getInterfaces');
    }

    /**
     * @openapi
     *
     * /diagnostics/systemhealth/getRRDlist:
     *   get:
     *     summary: Get RRD list
     *     tags:
     *       - diagnostics/systemhealth
     *     responses:
     *       '200':
     *         description: OK
     *         content:
     *           application/json:
     *             {}
     */
    /**
     * Get RRD list
     *
     * @returns {Promise} Request promise
     */
    async getRRDlist () {
        return this.client.get('/diagnostics/systemhealth/getRRDlist');
    }
}

module.exports = SystemhealthClient;
