'use strict';

const BaseClient = require('../base');

class InterfaceClient extends BaseClient {
    async delRoute () {
        return await this.client.request('/diagnostics/interface/delRoute', 'post');
    }

    async flushArp () {
        return await this.client.request('/diagnostics/interface/flushArp', 'post');
    }

    async getArp () {
        return await this.client.request('/diagnostics/interface/getArp');
    }

    async getBpfStatistics () {
        return await this.client.request('/diagnostics/interface/getBpfStatistics');
    }

    async getInterfaceNames () {
        return await this.client.request('/diagnostics/interface/getInterfaceNames');
    }

    async getInterfaceStatistics () {
        return await this.client.request('/diagnostics/interface/getInterfaceStatistics');
    }

    async getMemoryStatistics () {
        return await this.client.request('/diagnostics/interface/getMemoryStatistics');
    }

    async getNdp () {
        return await this.client.request('/diagnostics/interface/getNdp');
    }

    async getNetisrStatistics () {
        return await this.client.request('/diagnostics/interface/getNetisrStatistics');
    }

    async getProtocolStatistics () {
        return await this.client.request('/diagnostics/interface/getProtocolStatistics');
    }

    async getRoutes () {
        return await this.client.request('/diagnostics/interface/getRoutes');
    }

    async getSocketStatistics () {
        return await this.client.request('/diagnostics/interface/getSocketStatistics');
    }
}

module.exports = InterfaceClient;
