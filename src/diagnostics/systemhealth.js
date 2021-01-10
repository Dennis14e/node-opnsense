'use strict';

const BaseClient = require('../base');

class SystemhealthClient extends BaseClient {
    /**
     * @openapi
     *
     * /diagnostics/systemhealth/getInterfaces:
     *   get:
     *     tags:
     *       - diagnostics/systemhealth
     *     produces:
     *       - application/json
     */
    async getInterfaces () {
        return this.client.get('/diagnostics/systemhealth/getInterfaces');
    }

    /**
     * @openapi
     *
     * /diagnostics/systemhealth/getRRDlist:
     *   get:
     *     tags:
     *       - diagnostics/systemhealth
     *     produces:
     *       - application/json
     */
    async getRRDlist () {
        return this.client.get('/diagnostics/systemhealth/getRRDlist');
    }
}

module.exports = SystemhealthClient;
