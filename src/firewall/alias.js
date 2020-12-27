'use strict';

const BaseClient = require('../base');

class AliasClient extends BaseClient {
    async addItem (item) {
        return await this.client.post('/firewall/alias/addItem', { item: item });
    }

    async delItem (uuid) {
        return await this.client.post('/firewall/alias/delItem/' + uuid);
    }

    async export () {
        return await this.client.get('/firewall/alias/export');
    }

    async getAliasUUID (name) {
        return await this.client.get('/firewall/alias/getAliasUUID', { name: name });
    }

    async getGeoIP () {
        return await this.client.get('/firewall/alias/getGeoIP');
    }

    async getItem (uuid = '') {
        return await this.client.get('/firewall/alias/getItem/' + uuid);
    }

    async import (data) {
        return await this.client.post('/firewall/alias/import', { data: data });
    }

    async listCountries () {
        return await this.client.get('/firewall/alias/listCountries');
    }

    async listNetworkAliases () {
        return await this.client.get('/firewall/alias/listNetworkAliases');
    }

    async reconfigure () {
        return await this.client.post('/firewall/alias/reconfigure');
    }

    async searchItem (type = '') {
        return await this.client.get('/firewall/alias/searchItem', { type: type });
    }

    async setItem (uuid, alias) {
        return await this.client.post('/firewall/alias/setItem/' + uuid, { alias: alias });
    }

    async toggleItem (uuid, enabled) {
        return await this.client.post('/firewall/alias/toggleItem/' + uuid + '/' + enabled);
    }
}

module.exports = AliasClient;
