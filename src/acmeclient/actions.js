'use strict';

const BaseClient = require('../base');

class ActionsClient extends BaseClient {
    async add () {
        return await this.client.post('/acmeclient/actions/add');
    }

    async del (uuid) {
        return await this.client.post('/acmeclient/actions/del/' + uuid);
    }

    async get (uuid = '') {
        return await this.client.get('/acmeclient/actions/get/' + uuid);
    }

    async search () {
        return await this.client.get('/acmeclient/actions/search');
    }

    async sftpGetIdentity () {
        return await this.client.get('/acmeclient/actions/sftpGetIdentity');
    }

    async sftpTestConnection () {
        return await this.client.get('/acmeclient/actions/sftpTestConnection');
    }

    async toggle (uuid, enabled = '') {
        return await this.client.post('/acmeclient/actions/toggle/' + uuid + '/' + enabled);
    }

    async update (uuid) {
        return await this.client.post('/acmeclient/actions/update/' + uuid);
    }
}

module.exports = ActionsClient;
