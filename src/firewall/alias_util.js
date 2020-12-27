'use strict';

const BaseClient = require('../base');

class AliasUtilClient extends BaseClient {
    async add (alias, address) {
        return await this.client.post('/firewall/alias_util/add/' + alias, { address: address });
    }

    async aliases () {
        return await this.client.get('/firewall/alias_util/aliases');
    }

    async delete (alias, address) {
        return await this.client.post('/firewall/alias_util/delete/' + alias, { address: address });
    }

    async find_references (ip) {
        return await this.client.post('/firewall/alias_util/find_references', { ip: ip });
    }

    async flush (alias) {
        return await this.client.post('/firewall/alias_util/flush/' + alias);
    }

    async list (alias) {
        return await this.client.get('/firewall/alias_util/list/' + alias);
    }

    async update_bogons () {
        return await this.client.get('/firewall/alias_util/update_bogons');
    }
}

module.exports = AliasUtilClient;
