'use strict';

const BaseClient = require('../base');

class AccountsClient extends BaseClient {
    async add () {
        return await this.client.request('/acmeclient/accounts/add', 'post');
    }

    async del (uuid) {
        return await this.client.request('/acmeclient/accounts/del/' + uuid, 'post');
    }

    async get (uuid = '') {
        return await this.client.request('/acmeclient/accounts/get/' + uuid);
    }

    async search () {
        return await this.client.request('/acmeclient/accounts/search');
    }

    async toggle (uuid, enabled = '') {
        return await this.client.request('/acmeclient/accounts/toggle/' + uuid + '/' + enabled, 'post');
    }

    async update (uuid) {
        return await this.client.request('/acmeclient/accounts/update/' + uuid, 'post');
    }
}

module.exports = AccountsClient;
