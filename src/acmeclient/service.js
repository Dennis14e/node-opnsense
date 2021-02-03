'use strict';

/**
 * ServiceClient
 *
 * @module OPNsense/Acmeclient/ServiceClient
 */

const BaseClient = require('../base');

/**
 * Service
 */
class ServiceClient extends BaseClient {
    /**
     * @openapi
     *
     * /acmeclient/service/configtest:
     *   get:
     *     summary: Test config
     *     tags:
     *       - acmeclient/service
     *     responses:
     *       '200':
     *         description: OK
     *         content:
     *           application/json:
     *             {}
     */
    /**
     * Test config
     *
     * @returns {Promise} Request promise
     */
    async configtest () {
        return this.client.get('/acmeclient/service/configtest');
    }

    /**
     * @openapi
     *
     * /acmeclient/service/reconfigure:
     *   post:
     *     summary: Reconfigure service
     *     tags:
     *       - acmeclient/service
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
        return this.client.post('/acmeclient/service/reconfigure');
    }

    /**
     * @openapi
     *
     * /acmeclient/service/reset:
     *   get:
     *     summary: Reset service
     *     tags:
     *       - acmeclient/service
     *     responses:
     *       '200':
     *         description: OK
     *         content:
     *           application/json:
     *             {}
     */
    /**
     * Reset service
     *
     * @returns {Promise} Request promise
     */
    async reset () {
        return this.client.get('/acmeclient/service/reset');
    }

    /**
     * @openapi
     *
     * /acmeclient/service/restart:
     *   post:
     *     summary: Restart service
     *     tags:
     *       - acmeclient/service
     *     responses:
     *       '200':
     *         description: OK
     *         content:
     *           application/json:
     *             {}
     */
    /**
     * Restart service
     *
     * @returns {Promise} Request promise
     */
    async restart () {
        return this.client.post('/acmeclient/service/restart');
    }

    /**
     * @openapi
     *
     * /acmeclient/service/signallcerts:
     *   get:
     *     summary: Sign all certificates
     *     tags:
     *       - acmeclient/service
     *     responses:
     *       '200':
     *         description: OK
     *         content:
     *           application/json:
     *             {}
     */
    /**
     * Sign all certificates
     *
     * @returns {Promise} Request promise
     */
    async signallcerts () {
        return this.client.get('/acmeclient/service/signallcerts');
    }

    /**
     * @openapi
     *
     * /acmeclient/service/start:
     *   post:
     *     summary: Start service
     *     tags:
     *       - acmeclient/service
     *     responses:
     *       '200':
     *         description: OK
     *         content:
     *           application/json:
     *             {}
     */
    /**
     * Start service
     *
     * @returns {Promise} Request promise
     */
    async start () {
        return this.client.post('/acmeclient/service/start');
    }

    /**
     * @openapi
     *
     * /acmeclient/service/status:
     *   get:
     *     summary: Get status
     *     tags:
     *       - acmeclient/service
     *     responses:
     *       '200':
     *         description: OK
     *         content:
     *           application/json:
     *             {}
     */
    /**
     * Get status
     *
     * @returns {Promise} Request promise
     */
    async status () {
        return this.client.get('/acmeclient/service/status');
    }

    /**
     * @openapi
     *
     * /acmeclient/service/stop:
     *   post:
     *     summary: Stop service
     *     tags:
     *       - acmeclient/service
     *     responses:
     *       '200':
     *         description: OK
     *         content:
     *           application/json:
     *             {}
     */
    /**
     * Stop service
     *
     * @returns {Promise} Request promise
     */
    async stop () {
        return this.client.post('/acmeclient/service/stop');
    }
}

module.exports = ServiceClient;
