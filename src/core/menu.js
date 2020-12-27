'use strict';

const BaseClient = require('../base');

class MenuClient extends BaseClient {
    async search () {
        return await this.client.get('/core/menu/search');
    }

    async tree () {
        return await this.client.get('/core/menu/tree');
    }
}

module.exports = MenuClient;
