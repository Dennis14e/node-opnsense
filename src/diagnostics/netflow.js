'use strict';

const BaseClient = require('../base');

class NetflowClient extends BaseClient {
    /**
     * @openapi
     *
     * /diagnostics/netflow/cacheStats:
     *   get:
     *     tags:
     *       - diagnostics/netflow
     *     produces:
     *       - application/json
     */
    async cacheStats () {
        return await this.client.get('/diagnostics/netflow/cacheStats');
    }

    /**
     * @openapi
     *
     * /diagnostics/netflow/getconfig:
     *   get:
     *     tags:
     *       - diagnostics/netflow
     *     produces:
     *       - application/json
     */
    async getconfig () {
        return await this.client.get('/diagnostics/netflow/getconfig');
    }

    /**
     * @openapi
     *
     * /diagnostics/netflow/isEnabled:
     *   get:
     *     tags:
     *       - diagnostics/netflow
     *     produces:
     *       - application/json
     */
    async isEnabled () {
        return await this.client.get('/diagnostics/netflow/isEnabled');
    }

    /**
     * @openapi
     *
     * /diagnostics/netflow/reconfigure:
     *   get:
     *     tags:
     *       - diagnostics/netflow
     *     produces:
     *       - application/json
     */
    async reconfigure () {
        return await this.client.get('/diagnostics/netflow/reconfigure');
    }

    /**
     * @openapi
     *
     * /diagnostics/netflow/setconfig:
     *   get:
     *     tags:
     *       - diagnostics/netflow
     *     produces:
     *       - application/json
     */
    async setconfig () {
        return await this.client.get('/diagnostics/netflow/setconfig');
    }

    /**
     * @openapi
     *
     * /diagnostics/netflow/status:
     *   get:
     *     tags:
     *       - diagnostics/netflow
     *     produces:
     *       - application/json
     */
    async status () {
        return await this.client.get('/diagnostics/netflow/status');
    }
}

module.exports = NetflowClient;
