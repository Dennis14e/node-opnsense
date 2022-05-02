'use strict';

import { BaseClient } from '../../client/BaseClient';

/**
 * SettingsClient
 *
 * @module OPNsense/Acmeclient/SettingsClient
 */

/**
 * Settings
 */
export class SettingsClient extends BaseClient {
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
        return this.httpClient.post('/acmeclient/settings/fetchCronIntegration');
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
        return this.httpClient.post('/acmeclient/settings/fetchHAProxyIntegration');
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
        return this.httpClient.get('/acmeclient/settings/getBindPluginStatus');
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
        return this.httpClient.get('/acmeclient/settings/getGcloudPluginStatus');
    }
}
