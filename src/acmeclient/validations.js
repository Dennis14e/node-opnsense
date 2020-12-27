'use strict';

const BaseClient = require('../base');

class ValidationsClient extends BaseClient {
    async add () {
        return await this.client.request('/acmeclient/validations/add', 'post');
    }

    async del (uuid) {
        return await this.client.request('/acmeclient/validations/del/' + uuid, 'post');
    }

    async get (uuid = '') {
        return await this.client.request('/acmeclient/validations/get/' + uuid);
    }

    async search () {
        return await this.client.request('/acmeclient/validations/search');
    }

    async toggle (uuid, enabled = '') {
        return await this.client.request('/acmeclient/validations/toggle/' + uuid + '/' + enabled, 'post');
    }

    async update (uuid) {
        return await this.client.request('/acmeclient/validations/update/' + uuid, 'post');
    }
}

module.exports = ValidationsClient;
