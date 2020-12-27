'use strict';

const BaseClient = require('../base');

class CertficatesClient extends BaseClient {
    async add () {
        return await this.client.request('/acmeclient/certificates/add', 'post');
    }

    async del (uuid) {
        return await this.client.request('/acmeclient/certificates/del/' + uuid, 'post');
    }

    async get (uuid = '') {
        return await this.client.request('/acmeclient/certificates/get/' + uuid);
    }

    async removekey (uuid) {
        return await this.client.request('/acmeclient/certificates/removekey/' + uuid);
    }

    async revoke (uuid) {
        return await this.client.request('/acmeclient/certificates/revoke/' + uuid, 'post');
    }

    async search () {
        return await this.client.request('/acmeclient/certificates/search');
    }

    async sign (uuid) {
        return await this.client.request('/acmeclient/certificates/sign/' + uuid, 'post');
    }

    async toggle (uuid, enabled = '') {
        return await this.client.request('/acmeclient/certificates/toggle/' + uuid + '/' + enabled, 'post');
    }

    async update (uuid) {
        return await this.client.request('/acmeclient/certificates/update/' + uuid, 'post');
    }
}

module.exports = CertficatesClient;
