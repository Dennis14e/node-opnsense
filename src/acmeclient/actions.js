'use strict';

const BaseClient = require('../base');

class ActionsClient extends BaseClient {
    async add () {
        return await this.client.request('/acmeclient/actions/add', 'post');
    }

    async del (uuid) {
        return await this.client.request('/acmeclient/actions/del/' + uuid, 'post');
    }

    async get (uuid = '') {
        return await this.client.request('/acmeclient/actions/get/' + uuid);
    }

    async search () {
        return await this.client.request('/acmeclient/actions/search');
    }

    async sftpGetIdentity () {
        return await this.client.request('/acmeclient/actions/sftpGetIdentity');
    }

    async sftpTestConnection () {
        return await this.client.request('/acmeclient/actions/sftpTestConnection');
    }

    async toggle (uuid, enabled = '') {
        return await this.client.request('/acmeclient/actions/toggle/' + uuid + '/' + enabled, 'post');
    }

    async update (uuid) {
        return await this.client.request('/acmeclient/actions/update/' + uuid, 'post');
    }
}

module.exports = ActionsClient;
