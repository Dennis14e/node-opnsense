'use strict';

const BaseClient = require('../base');

class SettingsClient extends BaseClient {
    async fetchCronIntegration () {
        return await this.client.request('/acmeclient/settings/fetchCronIntegration', 'post');
    }

    async fetchHAProxyIntegration () {
        return await this.client.request('/acmeclient/settings/fetchHAProxyIntegration', 'post');
    }

    async getBindPluginStatus () {
        return await this.client.request('/acmeclient/settings/getBindPluginStatus');
    }

    async getGcloudPluginStatus () {
        return await this.client.request('/acmeclient/settings/getGcloudPluginStatus');
    }
}

module.exports = SettingsClient;
