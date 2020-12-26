'use strict';

const BaseClient = require('../base');

class SystemhealthClient extends BaseClient {
    async getInterfaces () {
        return await this.client.request('/diagnostics/systemhealth/getInterfaces');
    }

    async getRRDlist () {
        return await this.client.request('/diagnostics/systemhealth/getRRDlist');
    }
}

module.exports = SystemhealthClient;
