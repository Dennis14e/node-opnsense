'use strict';

const BaseClient = require('../base');

class NetflowClient extends BaseClient {
    async cacheStats () {
        return await this.client.get('/diagnostics/netflow/cacheStats');
    }

    async getconfig () {
        return await this.client.get('/diagnostics/netflow/getconfig');
    }

    async isEnabled () {
        return await this.client.get('/diagnostics/netflow/isEnabled');
    }

    async reconfigure () {
        return await this.client.get('/diagnostics/netflow/reconfigure');
    }

    async setconfig () {
        return await this.client.get('/diagnostics/netflow/setconfig');
    }

    async status () {
        return await this.client.get('/diagnostics/netflow/status');
    }
}

module.exports = NetflowClient;
