'use strict';

const BaseClient = require('../base');

class NetflowInsightClient extends BaseClient {
    async getInterfaces () {
        return await this.client.get('/diagnostics/networkinsight/getInterfaces');
    }

    async getMetadata () {
        return await this.client.get('/diagnostics/networkinsight/getMetadata');
    }

    async getProtocols () {
        return await this.client.get('/diagnostics/networkinsight/getProtocols');
    }

    async getServices () {
        return await this.client.get('/diagnostics/networkinsight/getServices');
    }
}

module.exports = NetflowInsightClient;
