'use strict';

const BaseClient = require('../base');

class ValidationsClient extends BaseClient {
    async add () {
        return await this.client.post('/acmeclient/validations/add');
    }

    async del (uuid) {
        return await this.client.post('/acmeclient/validations/del/' + uuid);
    }

    async get (uuid = '') {
        return await this.client.get('/acmeclient/validations/get/' + uuid);
    }

    async search () {
        return await this.client.get('/acmeclient/validations/search');
    }

    async toggle (uuid, enabled = '') {
        return await this.client.post('/acmeclient/validations/toggle/' + uuid + '/' + enabled);
    }

    async update (uuid) {
        return await this.client.post('/acmeclient/validations/update/' + uuid);
    }
}

module.exports = ValidationsClient;
