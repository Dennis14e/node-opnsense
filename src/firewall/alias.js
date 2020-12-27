'use strict';

const BaseClient = require('../base');

class AliasClient extends BaseClient {
    async addItem (item) {
        return await this.client.request('/firewall/alias/addItem', 'post', { item: item });
    }

    async delItem (uuid) {
        return await this.client.request('/firewall/alias/delItem/' + uuid, 'post');
    }

    async export () {
        return await this.client.request('/firewall/alias/export');
    }

    async getAliasUUID (name) {
        return await this.client.request('/firewall/alias/getAliasUUID', 'get', { name: name });
    }

    async getGeoIP () {
        return await this.client.request('/firewall/alias/getGeoIP');
    }

    async getItem (uuid = '') {
        return await this.client.request('/firewall/alias/getItem/' + uuid);
    }

    async import (data) {
        return await this.client.request('/firewall/alias/import', 'post', { data: data });
    }

    async listCountries () {
        return await this.client.request('/firewall/alias/listCountries');
    }

    async listNetworkAliases () {
        return await this.client.request('/firewall/alias/listNetworkAliases');
    }

    async reconfigure () {
        return await this.client.request('/firewall/alias/reconfigure', 'post');
    }

    async searchItem (type = '') {
        return await this.client.request('/firewall/alias/searchItem', 'get', { type: type });
    }

    async setItem (uuid, alias) {
        return await this.client.request('/firewall/alias/setItem/' + uuid, 'post', { alias: alias });
    }

    async toggleItem (uuid, enabled) {
        return await this.client.request('/firewall/alias/toggleItem/' + uuid + '/' + enabled, 'post');
    }
}

module.exports = AliasClient;
