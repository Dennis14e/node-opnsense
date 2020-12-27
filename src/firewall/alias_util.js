'use strict';

const BaseClient = require('../base');

class AliasUtilClient extends BaseClient {
    async add (alias, address) {
        return await this.client.request('/firewall/alias_util/add/' + alias, 'post', { address: address });
    }

    async aliases () {
        return await this.client.request('/firewall/alias_util/aliases');
    }

    async delete (alias, address) {
        return await this.client.request('/firewall/alias_util/delete/' + alias, 'post', { address: address });
    }

    async find_references (ip) {
        return await this.client.request('/firewall/alias_util/find_references', 'post', { ip: ip });
    }

    async flush (alias) {
        return await this.client.request('/firewall/alias_util/flush/' + alias, 'post');
    }

    async list (alias) {
        return await this.client.request('/firewall/alias_util/list/' + alias, 'get');
    }

    async update_bogons () {
        return await this.client.request('/firewall/alias_util/update_bogons');
    }
}

module.exports = AliasUtilClient;
