'use strict';

const BaseClient = require('../base');

class MenuClient extends BaseClient {
    async search () {
        return await this.client.request('/core/menu/search');
    }

    async tree () {
        return await this.client.request('/core/menu/tree');
    }
}

module.exports = MenuClient;
