'use strict';

const BaseClient = require('../base');

class SystemhealthClient extends BaseClient {
    async getInterfaces () {
        return await this.client.get('/diagnostics/systemhealth/getInterfaces');
    }

    async getRRDlist () {
        return await this.client.get('/diagnostics/systemhealth/getRRDlist');
    }
}

module.exports = SystemhealthClient;
