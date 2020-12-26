'use strict';

const BaseClient = require('../base');

class NetflowClient extends BaseClient {
    async cacheStats () {
        return await this.client.request('/diagnostics/netflow/cacheStats');
    }

    async getconfig () {
        return await this.client.request('/diagnostics/netflow/getconfig');
    }

    async isEnabled () {
        return await this.client.request('/diagnostics/netflow/isEnabled');
    }

    async reconfigure () {
        return await this.client.request('/diagnostics/netflow/reconfigure');
    }

    async setconfig () {
        return await this.client.request('/diagnostics/netflow/setconfig');
    }

    async status () {
        return await this.client.request('/diagnostics/netflow/status');
    }
}

module.exports = NetflowClient;
