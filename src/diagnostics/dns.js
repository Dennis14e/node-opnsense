'use strict';

const BaseClient = require('../base');

class DnsClient extends BaseClient {
    async reverse_lookup () {
        return await this.client.request('/diagnostics/dns/reverse_lookup');
    }
}

module.exports = DnsClient;
