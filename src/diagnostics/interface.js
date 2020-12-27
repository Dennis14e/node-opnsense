'use strict';

const BaseClient = require('../base');

class InterfaceClient extends BaseClient {
    async delRoute () {
        return await this.client.post('/diagnostics/interface/delRoute');
    }

    async flushArp () {
        return await this.client.post('/diagnostics/interface/flushArp');
    }

    async getArp () {
        return await this.client.get('/diagnostics/interface/getArp');
    }

    async getBpfStatistics () {
        return await this.client.get('/diagnostics/interface/getBpfStatistics');
    }

    async getInterfaceNames () {
        return await this.client.get('/diagnostics/interface/getInterfaceNames');
    }

    async getInterfaceStatistics () {
        return await this.client.get('/diagnostics/interface/getInterfaceStatistics');
    }

    async getMemoryStatistics () {
        return await this.client.get('/diagnostics/interface/getMemoryStatistics');
    }

    async getNdp () {
        return await this.client.get('/diagnostics/interface/getNdp');
    }

    async getNetisrStatistics () {
        return await this.client.get('/diagnostics/interface/getNetisrStatistics');
    }

    async getProtocolStatistics () {
        return await this.client.get('/diagnostics/interface/getProtocolStatistics');
    }

    async getRoutes () {
        return await this.client.get('/diagnostics/interface/getRoutes');
    }

    async getSocketStatistics () {
        return await this.client.get('/diagnostics/interface/getSocketStatistics');
    }
}

module.exports = InterfaceClient;
