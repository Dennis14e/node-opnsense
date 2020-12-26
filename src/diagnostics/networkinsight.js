'use strict';

const BaseClient = require('../base');

class NetflowInsightClient extends BaseClient {
    async getInterfaces () {
        return await this.client.request('/diagnostics/networkinsight/getInterfaces');
    }

    async getMetadata () {
        return await this.client.request('/diagnostics/networkinsight/getMetadata');
    }

    async getProtocols () {
        return await this.client.request('/diagnostics/networkinsight/getProtocols');
    }

    async getServices () {
        return await this.client.request('/diagnostics/networkinsight/getServices');
    }
}

module.exports = NetflowInsightClient;
