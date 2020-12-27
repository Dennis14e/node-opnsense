'use strict';

const BaseClient = require('../base');

class ServiceClient extends BaseClient {
    async reconfigure () {
        return await this.client.post('/cron/service/reconfigure');
    }
}

module.exports = ServiceClient;
