'use strict';

const BaseClient = require('../base');

class ServiceClient extends BaseClient {
    async configtest () {
        return await this.client.request('/acmeclient/service/configtest');
    }

    async reconfigure () {
        return await this.client.request('/acmeclient/service/reconfigure', 'post');
    }

    async reset () {
        return await this.client.request('/acmeclient/service/reset');
    }

    async restart () {
        return await this.client.request('/acmeclient/service/restart', 'post');
    }

    async signallcerts () {
        return await this.client.request('/acmeclient/service/signallcerts');
    }

    async start () {
        return await this.client.request('/acmeclient/service/start', 'post');
    }

    async status () {
        return await this.client.request('/acmeclient/service/status');
    }

    async stop () {
        return await this.client.request('/acmeclient/service/stop', 'post');
    }
}

module.exports = ServiceClient;
