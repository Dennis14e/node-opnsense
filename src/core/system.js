'use strict';

const BaseClient = require('../base');

class SystemClient extends BaseClient {
    async halt () {
        return await this.client.request('/core/system/halt');
    }

    async reboot () {
        return await this.client.request('/core/system/reboot');
    }
}

module.exports = SystemClient;
