'use strict';

const BaseClient = require('../base');

class SettingsClient extends BaseClient {
    /**
     * @openapi
     *
     * /acmeclient/settings/fetchCronIntegration:
     *   post:
     *     tags:
     *       - acmeclient/settings
     *     produces:
     *       - application/json
     */
    async fetchCronIntegration () {
        return await this.client.post('/acmeclient/settings/fetchCronIntegration');
    }

    /**
     * @openapi
     *
     * /acmeclient/settings/fetchHAProxyIntegration:
     *   post:
     *     tags:
     *       - acmeclient/settings
     *     produces:
     *       - application/json
     */
    async fetchHAProxyIntegration () {
        return await this.client.post('/acmeclient/settings/fetchHAProxyIntegration');
    }

    /**
     * @openapi
     *
     * /acmeclient/settings/getBindPluginStatus:
     *   get:
     *     tags:
     *       - acmeclient/settings
     *     produces:
     *       - application/json
     */
    async getBindPluginStatus () {
        return await this.client.get('/acmeclient/settings/getBindPluginStatus');
    }

    /**
     * @openapi
     *
     * /acmeclient/settings/getGcloudPluginStatus:
     *   get:
     *     tags:
     *       - acmeclient/settings
     *     produces:
     *       - application/json
     */
    async getGcloudPluginStatus () {
        return await this.client.get('/acmeclient/settings/getGcloudPluginStatus');
    }
}

module.exports = SettingsClient;
