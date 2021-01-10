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
     * @openapi
     *
     * /core/menu/search:
     *   get:
     *     summary: Search menu
     *     tags:
     *       - core/menu
     *     produces:
     *       - application/json
     */
    /**
     * Search menu
     *
     * @returns {Promise} Request promise
     */
    async search () {
        return this.client.get('/core/menu/search');
    }

    /**
     * @openapi
     *
     * /core/menu/tree:
     *   get:
     *     summary: Menu tree
     *     tags:
     *       - core/menu
     *     produces:
     *       - application/json
     */
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
