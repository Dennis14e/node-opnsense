'use strict';

const BaseClient = require('../base');

class CertficatesClient extends BaseClient {
    async add () {
        return await this.client.post('/acmeclient/certificates/add');
    }

    async del (uuid) {
        return await this.client.post('/acmeclient/certificates/del/' + uuid);
    }

    async get (uuid = '') {
        return await this.client.get('/acmeclient/certificates/get/' + uuid);
    }

    async removekey (uuid) {
        return await this.client.get('/acmeclient/certificates/removekey/' + uuid);
    }

    async revoke (uuid) {
        return await this.client.post('/acmeclient/certificates/revoke/' + uuid);
    }

    async search () {
        return await this.client.get('/acmeclient/certificates/search');
    }

    async sign (uuid) {
        return await this.client.post('/acmeclient/certificates/sign/' + uuid);
    }

    async toggle (uuid, enabled = '') {
        return await this.client.post('/acmeclient/certificates/toggle/' + uuid + '/' + enabled);
    }

    async update (uuid) {
        return await this.client.post('/acmeclient/certificates/update/' + uuid);
    }
}

module.exports = CertficatesClient;
