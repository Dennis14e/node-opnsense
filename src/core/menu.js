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
     *     responses:
     *       '200':
     *         description: OK
     *         content:
     *           application/json:
     *             {}
     *     parameters:
     *       - in: query
     *         name: q
     *         schema:
     *           type: string
     */
    /**
     * Search menu
     *
     * @param   {string|null} q Search query
     * @returns {Promise}       Request promise
     */
    async search (q = null) {
        return this.client.get('/core/menu/search', { q: q });
    }

    /**
     * @openapi
     *
     * /core/menu/tree:
     *   get:
     *     summary: Menu tree
     *     tags:
     *       - core/menu
     *     responses:
     *       '200':
     *         description: OK
     *         content:
     *           application/json:
     *             {}
     *     parameters:
     *       - in: query
     *         name: uri
     *         schema:
     *           type: string
     */
    /**
     * Menu tree
     *
     * @param   {string|null} uri URI
     * @returns {Promise}         Request promise
     */
    async tree (uri = null) {
        return this.client.get('/core/menu/tree', { uri: uri });
    }
}

module.exports = MenuClient;
