'use strict';

const BaseClient = require('../base');

class SystemhealthClient extends BaseClient {
    /**
     * @openapi
     *
     * /diagnostics/systemhealth/getInterfaces:
     *   get:
     *     summary: Get interfaces
     *     tags:
     *       - diagnostics/systemhealth
     *     produces:
     *       - application/json
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
     *     produces:
     *       - application/json
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
