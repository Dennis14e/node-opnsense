'use strict';

const BaseClient = require('../base');

class NetflowInsightClient extends BaseClient {
    /**
     * @openapi
     *
     * /diagnostics/networkinsight/getInterfaces:
     *   get:
     *     tags:
     *       - diagnostics/networkinsight
     *     produces:
     *       - application/json
     */
    async getInterfaces () {
        return await this.client.get('/diagnostics/networkinsight/getInterfaces');
    }

    /**
     * @openapi
     *
     * /diagnostics/networkinsight/getMetadata:
     *   get:
     *     tags:
     *       - diagnostics/networkinsight
     *     produces:
     *       - application/json
     */
    async getMetadata () {
        return await this.client.get('/diagnostics/networkinsight/getMetadata');
    }

    /**
     * @openapi
     *
     * /diagnostics/networkinsight/getProtocols:
     *   get:
     *     tags:
     *       - diagnostics/networkinsight
     *     produces:
     *       - application/json
     */
    async getProtocols () {
        return await this.client.get('/diagnostics/networkinsight/getProtocols');
    }

    /**
     * @openapi
     *
     * /diagnostics/networkinsight/getServices:
     *   get:
     *     tags:
     *       - diagnostics/networkinsight
     *     produces:
     *       - application/json
     */
    async getServices () {
        return await this.client.get('/diagnostics/networkinsight/getServices');
    }
}

module.exports = NetflowInsightClient;
