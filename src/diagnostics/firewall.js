'use strict';

const BaseClient = require('../base');

class FirewallClient extends BaseClient {
    async log () {
        return await this.client.request('/diagnostics/firewall/log');
    }

    async log_filters () {
        return await this.client.request('/diagnostics/firewall/log_filters');
    }

    async stats () {
        return await this.client.request('/diagnostics/firewall/stats');
    }
}

module.exports = FirewallClient;
