'use strict';

const BaseClient = require('../base');

class ServiceClient extends BaseClient {
    async configtest () {
        return await this.client.get('/acmeclient/service/configtest');
    }

    async reconfigure () {
        return await this.client.post('/acmeclient/service/reconfigure');
    }

    async reset () {
        return await this.client.get('/acmeclient/service/reset');
    }

    async restart () {
        return await this.client.post('/acmeclient/service/restart');
    }

    async signallcerts () {
        return await this.client.get('/acmeclient/service/signallcerts');
    }

    async start () {
        return await this.client.post('/acmeclient/service/start');
    }

    async status () {
        return await this.client.get('/acmeclient/service/status');
    }

    async stop () {
        return await this.client.post('/acmeclient/service/stop');
    }
}

module.exports = ServiceClient;
