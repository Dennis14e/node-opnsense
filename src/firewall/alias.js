'use strict';

const BaseClient = require('../base');

class AliasClient extends BaseClient {
    /**
     * @openapi
     *
     * /firewall/alias/addItem:
     *   post:
     *     summary: Add item
     *     tags:
     *       - firewall/alias
     *     responses:
     *       '200':
     *         description: OK
     *         content:
     *           application/json:
     *             {}
     *     requestBody:
     *       content:
     *         x-www-form-urlencoded:
     *           schema:
     *             type: object
     *             properties:
     *               item:
     *                 type: string
     */
    /**
     * Add item
     *
     * @param   {object}  item Alias item
     * @returns {Promise}      Request promise
     */
    async addItem (item) {
        return this.client.post('/firewall/alias/addItem', { item: item });
    }

    /**
     * @openapi
     *
     * /firewall/alias/delItem/{uuid}:
     *   post:
     *     summary: Delete item
     *     tags:
     *       - firewall/alias
     *     responses:
     *       '200':
     *         description: OK
     *         content:
     *           application/json:
     *             {}
     *     parameters:
     *       - in: path
     *         name: uuid
     *         schema:
     *           type: string
     *         required: true
     */
    /**
     * Delete item
     *
     * @param   {string}  uuid Alias UUID
     * @returns {Promise}      Request promise
     */
    async delItem (uuid) {
        return this.client.post('/firewall/alias/delItem/' + uuid);
    }

    /**
     * @openapi
     *
     * /firewall/alias/export:
     *   get:
     *     summary: Export aliases
     *     tags:
     *       - firewall/alias
     *     responses:
     *       '200':
     *         description: OK
     *         content:
     *           application/json:
     *             {}
     */
    /**
     * Export aliases
     *
     * @returns {Promise} Request promise
     */
    async export () {
        return this.client.get('/firewall/alias/export');
    }

    /**
     * @openapi
     *
     * /firewall/alias/getAliasUUID:
     *   get:
     *     summary: Get alias UUID
     *     tags:
     *       - firewall/alias
     *     responses:
     *       '200':
     *         description: OK
     *         content:
     *           application/json:
     *             {}
     *     requestBody:
     *       content:
     *         x-www-form-urlencoded:
     *           schema:
     *             type: object
     *             properties:
     *               name:
     *                 type: string
     *             required:
     *               - name
     */
    /**
     * Get alias UUID
     *
     * @param   {string}  name Alias name
     * @returns {Promise}      Request promise
     */
    async getAliasUUID (name) {
        return this.client.get('/firewall/alias/getAliasUUID', { name: name });
    }

    /**
     * @openapi
     *
     * /firewall/alias/getGeoIP:
     *   get:
     *     summary: Get Geo IP
     *     tags:
     *       - firewall/alias
     *     responses:
     *       '200':
     *         description: OK
     *         content:
     *           application/json:
     *             {}
     */
    /**
     * Get Geo IP
     *
     * @returns {Promise} Request promise
     */
    async getGeoIP () {
        return this.client.get('/firewall/alias/getGeoIP');
    }

    /**
     * @openapi
     *
     * /firewall/alias/getItem/{uuid}:
     *   get:
     *     summary: Get item
     *     tags:
     *       - firewall/alias
     *     responses:
     *       '200':
     *         description: OK
     *         content:
     *           application/json:
     *             {}
     *     parameters:
     *       - in: path
     *         name: uuid
     *         schema:
     *           type: string
     *         required: true
     */
    /**
     * Get item
     *
     * @param   {string}  uuid Alias UUID
     * @returns {Promise}      Request promise
     */
    async getItem (uuid = '') {
        return this.client.get('/firewall/alias/getItem/' + uuid);
    }

    /**
     * @openapi
     *
     * /firewall/alias/import:
     *   post:
     *     summary: Import aliases
     *     tags:
     *       - firewall/alias
     *     responses:
     *       '200':
     *         description: OK
     *         content:
     *           application/json:
     *             {}
     *     requestBody:
     *       content:
     *         x-www-form-urlencoded:
     *           schema:
     *             type: object
     *             properties:
     *               data:
     *                 type: string
     *             required:
     *               - data
     */
    /**
     * Import aliases
     *
     * @param   {object}  data Aliases data
     * @returns {Promise}      Request promise
     */
    async import (data) {
        return this.client.post('/firewall/alias/import', { data: data });
    }

    /**
     * @openapi
     *
     * /firewall/alias/listCountries:
     *   get:
     *     summary: List countries
     *     tags:
     *       - firewall/alias
     *     responses:
     *       '200':
     *         description: OK
     *         content:
     *           application/json:
     *             {}
     */
    /**
     * List countries
     *
     * @returns {Promise} Request promise
     */
    async listCountries () {
        return this.client.get('/firewall/alias/listCountries');
    }

    /**
     * @openapi
     *
     * /firewall/alias/listNetworkAliases:
     *   get:
     *     summary: List network aliases
     *     tags:
     *       - firewall/alias
     *     responses:
     *       '200':
     *         description: OK
     *         content:
     *           application/json:
     *             {}
     */
    /**
     * List network aliases
     *
     * @returns {Promise} Request promise
     */
    async listNetworkAliases () {
        return this.client.get('/firewall/alias/listNetworkAliases');
    }

    /**
     * @openapi
     *
     * /firewall/alias/reconfigure:
     *   post:
     *     summary: Reconfigure
     *     tags:
     *       - firewall/alias
     *     responses:
     *       '200':
     *         description: OK
     *         content:
     *           application/json:
     *             {}
     */
    /**
     * Reconfigure
     *
     * @returns {Promise} Request promise
     */
    async reconfigure () {
        return this.client.post('/firewall/alias/reconfigure');
    }

    /**
     * @openapi
     *
     * /firewall/alias/searchItem:
     *   get:
     *     summary: Search item
     *     tags:
     *       - firewall/alias
     *     responses:
     *       '200':
     *         description: OK
     *         content:
     *           application/json:
     *             {}
     *     requestBody:
     *       content:
     *         x-www-form-urlencoded:
     *           schema:
     *             type: object
     *             properties:
     *               type:
     *                 type: string
     *             required:
     *               - type
     */
    /**
     * Search item
     *
     * @param   {string}  type Item type
     * @returns {Promise}      Request promise
     */
    async searchItem (type = '') {
        return this.client.get('/firewall/alias/searchItem', { type: type });
    }

    /**
     * @openapi
     *
     * /firewall/alias/setItem/{uuid}:
     *   post:
     *     summary: Set item
     *     tags:
     *       - firewall/alias
     *     responses:
     *       '200':
     *         description: OK
     *         content:
     *           application/json:
     *             {}
     *     parameters:
     *       - in: path
     *         name: uuid
     *         schema:
     *           type: string
     *         required: true
     *     requestBody:
     *       content:
     *         x-www-form-urlencoded:
     *           schema:
     *             type: object
     *             properties:
     *               type:
     *                 type: string
     *             required:
     *               - type
     */
    /**
     * Set item
     *
     * @param   {string}  uuid  Alias UUID
     * @param   {string}  alias Alias
     * @returns {Promise}       Request promise
     */
    async setItem (uuid, alias) {
        return this.client.post('/firewall/alias/setItem/' + uuid, { alias: alias });
    }

    /**
     * @openapi
     *
     * /firewall/alias/toggleItem/{uuid}/{enabled}:
     *   post:
     *     summary: Toggle item
     *     tags:
     *       - firewall/alias
     *     responses:
     *       '200':
     *         description: OK
     *         content:
     *           application/json:
     *             {}
     *     parameters:
     *       - in: path
     *         name: uuid
     *         schema:
     *           type: string
     *         required: true
     *       - in: path
     *         name: enabled
     *         schema:
     *           type: string
     */
    /**
     * Toggle item
     *
     * @param   {string}       uuid    Alias UUID
     * @param   {boolean|null} enabled Enabled
     * @returns {Promise}              Request promise
     */
    async toggleItem (uuid, enabled = null) {
        enabled = (enabled === null) ? '' : Number(Boolean(enabled));
        return this.client.post('/firewall/alias/toggleItem/' + uuid + '/' + enabled);
    }
}

module.exports = AliasClient;
