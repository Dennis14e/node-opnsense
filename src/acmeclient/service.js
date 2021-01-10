'use strict';

const BaseClient = require('../base');

class ServiceClient extends BaseClient {
    /**
     * @openapi
     *
     * /acmeclient/service/configtest:
     *   get:
     *     tags:
     *       - acmeclient/service
     *     produces:
     *       - application/json
     */
    async configtest () {
        return await this.client.get('/acmeclient/service/configtest');
    }

    /**
     * @openapi
     *
     * /acmeclient/service/reconfigure:
     *   post:
     *     tags:
     *       - acmeclient/service
     *     produces:
     *       - application/json
     */
    async reconfigure () {
        return await this.client.post('/acmeclient/service/reconfigure');
    }

    /**
     * @openapi
     *
     * /acmeclient/service/reset:
     *   get:
     *     tags:
     *       - acmeclient/service
     *     produces:
     *       - application/json
     */
    async reset () {
        return await this.client.get('/acmeclient/service/reset');
    }

    /**
     * @openapi
     *
     * /acmeclient/service/restart:
     *   post:
     *     tags:
     *       - acmeclient/service
     *     produces:
     *       - application/json
     */
    async restart () {
        return await this.client.post('/acmeclient/service/restart');
    }

    /**
     * @openapi
     *
     * /acmeclient/service/signallcerts:
     *   get:
     *     tags:
     *       - acmeclient/service
     *     produces:
     *       - application/json
     */
    async signallcerts () {
        return await this.client.get('/acmeclient/service/signallcerts');
    }

    /**
     * @openapi
     *
     * /acmeclient/service/start:
     *   post:
     *     tags:
     *       - acmeclient/service
     *     produces:
     *       - application/json
     */
    async start () {
        return await this.client.post('/acmeclient/service/start');
    }

    /**
     * @openapi
     *
     * /acmeclient/service/status:
     *   get:
     *     tags:
     *       - acmeclient/service
     *     produces:
     *       - application/json
     */
    async status () {
        return await this.client.get('/acmeclient/service/status');
    }

    /**
     * @openapi
     *
     * /acmeclient/service/stop:
     *   post:
     *     tags:
     *       - acmeclient/service
     *     produces:
     *       - application/json
     */
    async stop () {
        return await this.client.post('/acmeclient/service/stop');
    }
}

module.exports = ServiceClient;
