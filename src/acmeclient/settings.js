'use strict';

/**
 * SettingsClient
 *
 * @module OPNsense/Acmeclient/SettingsClient
 */

const BaseClient = require('../base');

/**
 * Settings
 */
class SettingsClient extends BaseClient {
    /**
     * @openapi
     *
     * /acmeclient/settings/fetchCronIntegration:
     *   post:
     *     summary: Fetch Cron integration
     *     tags:
     *       - acmeclient/settings
     *     responses:
     *       '200':
     *         description: OK
     *         content:
     *           application/json:
     *             {}
     */
    /**
     * Fetch Cron integration
     *
     * @returns {Promise} Request promise
     */
    async fetchCronIntegration () {
        return this.client.post('/acmeclient/settings/fetchCronIntegration');
    }

    /**
     * @openapi
     *
     * /acmeclient/settings/fetchHAProxyIntegration:
     *   post:
     *     summary: Fetch HAProxy integration
     *     tags:
     *       - acmeclient/settings
     *     responses:
     *       '200':
     *         description: OK
     *         content:
     *           application/json:
     *             {}
     */
    /**
     * Fetch HAProxy integration
     *
     * @returns {Promise} Request promise
     */
    async fetchHAProxyIntegration () {
        return this.client.post('/acmeclient/settings/fetchHAProxyIntegration');
    }

    /**
     * @openapi
     *
     * /acmeclient/settings/getBindPluginStatus:
     *   get:
     *     summary: Get Bind plugin status
     *     tags:
     *       - acmeclient/settings
     *     responses:
     *       '200':
     *         description: OK
     *         content:
     *           application/json:
     *             {}
     */
    /**
     * Get Bind plugin status
     *
     * @returns {Promise} Request promise
     */
    async getBindPluginStatus () {
        return this.client.get('/acmeclient/settings/getBindPluginStatus');
    }

    /**
     * @openapi
     *
     * /acmeclient/settings/getGcloudPluginStatus:
     *   get:
     *     summary: Get GCloud plugin status
     *     tags:
     *       - acmeclient/settings
     *     responses:
     *       '200':
     *         description: OK
     *         content:
     *           application/json:
     *             {}
     */
    /**
     * Get GCloud plugin status
     *
     * @returns {Promise} Request promise
     */
    async getGcloudPluginStatus () {
        return this.client.get('/acmeclient/settings/getGcloudPluginStatus');
    }
}

module.exports = SettingsClient;
