'use strict';

/**
 * BaseClient
 *
 * @module OPNsense/Core/MenuClient
 */

const BaseClient = require('../base');

/**
 * Menu
 */
class MenuClient extends BaseClient {
    /**
     * Search menu
     *
     * @returns {Promise} Request promise
     */
    async search () {
        return this.client.get('/core/menu/search');
    }

    /**
     * Menu tree
     *
     * @returns {Promise} Request promise
     */
    async tree () {
        return this.client.get('/core/menu/tree');
    }
}

module.exports = MenuClient;
