'use strict';

const BaseClient = require('../base');

class SettingsClient extends BaseClient {
    async fetchCronIntegration () {
        return await this.client.post('/acmeclient/settings/fetchCronIntegration');
    }

    async fetchHAProxyIntegration () {
        return await this.client.post('/acmeclient/settings/fetchHAProxyIntegration');
    }

    async getBindPluginStatus () {
        return await this.client.get('/acmeclient/settings/getBindPluginStatus');
    }

    async getGcloudPluginStatus () {
        return await this.client.get('/acmeclient/settings/getGcloudPluginStatus');
    }
}

module.exports = SettingsClient;
