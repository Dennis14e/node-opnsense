'use strict';

const BaseClient = require('../base');

class AccountsClient extends BaseClient {
    async add () {
        return await this.client.post('/acmeclient/accounts/add');
    }

    async del (uuid) {
        return await this.client.post('/acmeclient/accounts/del/' + uuid);
    }

    async get (uuid = '') {
        return await this.client.get('/acmeclient/accounts/get/' + uuid);
    }

    async search () {
        return await this.client.get('/acmeclient/accounts/search');
    }

    async toggle (uuid, enabled = '') {
        return await this.client.post('/acmeclient/accounts/toggle/' + uuid + '/' + enabled);
    }

    async update (uuid) {
        return await this.client.post('/acmeclient/accounts/update/' + uuid);
    }
}

module.exports = AccountsClient;
