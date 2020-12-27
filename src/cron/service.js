'use strict';

const BaseClient = require('../base');

class ServiceClient extends BaseClient {
    async reconfigure () {
        return await this.client.request('/cron/service/reconfigure', 'post');
    }
}

module.exports = ServiceClient;
