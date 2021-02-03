'use strict';

/**
 * AliasUtilClient
 *
 * @module OPNsense/Firewall/AliasUtilClient
 */

const BaseClient = require('../base');

/**
 * AliasUtil
 */
class AliasUtilClient extends BaseClient {
    /**
     * @openapi
     *
     * /firewall/alias_util/add/{alias}:
     *   post:
     *     summary: Add alias
     *     tags:
     *       - firewall/alias_util
     *     responses:
     *       '200':
     *         description: OK
     *         content:
     *           application/json:
     *             {}
     *     parameters:
     *       - in: path
     *         name: alias
     *         schema:
     *           type: string
     *         required: true
     *     requestBody:
     *       content:
     *         x-www-form-urlencoded:
     *           schema:
     *             type: object
     *             properties:
     *               address:
     *                 type: string
     *             required:
     *               - address
     */
    /**
     * Add alias
     *
     * @param   {string}  alias   Alias
     * @param   {string}  address Address
     * @returns {Promise}         Request promise
     */
    async add (alias, address) {
        return this.client.post('/firewall/alias_util/add/' + alias, { address: address });
    }

    /**
     * @openapi
     *
     * /firewall/alias_util/aliases:
     *   get:
     *     summary: Get aliases
     *     tags:
     *       - firewall/alias_util
     *     responses:
     *       '200':
     *         description: OK
     *         content:
     *           application/json:
     *             {}
     */
    /**
     * Get aliases
     *
     * @returns {Promise} Request promise
     */
    async aliases () {
        return this.client.get('/firewall/alias_util/aliases');
    }

    /**
     * @openapi
     *
     * /firewall/alias_util/delete/{alias}:
     *   post:
     *     summary: Delete alias
     *     tags:
     *       - firewall/alias_util
     *     responses:
     *       '200':
     *         description: OK
     *         content:
     *           application/json:
     *             {}
     *     parameters:
     *       - in: path
     *         name: alias
     *         schema:
     *           type: string
     *         required: true
     *     requestBody:
     *       content:
     *         x-www-form-urlencoded:
     *           schema:
     *             type: object
     *             properties:
     *               address:
     *                 type: string
     *             required:
     *               - address
     */
    /**
     * Delete alias
     *
     * @param   {string}  alias   Alias
     * @param   {string}  address Address
     * @returns {Promise}         Request promise
     */
    async delete (alias, address) {
        return this.client.post('/firewall/alias_util/delete/' + alias, { address: address });
    }

    /**
     * @openapi
     *
     * /firewall/alias_util/find_references:
     *   post:
     *     summary: Find references
     *     tags:
     *       - firewall/alias_util
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
     *               ip:
     *                 type: string
     */
    /**
     * Find references
     *
     * @param   {string}  ip Alias ip
     * @returns {Promise}    Request promise
     */
    async find_references (ip) {
        return this.client.post('/firewall/alias_util/find_references', { ip: ip });
    }

    /**
     * @openapi
     *
     * /firewall/alias_util/flush/{alias}:
     *   post:
     *     summary: Flush alias
     *     tags:
     *       - firewall/alias_util
     *     responses:
     *       '200':
     *         description: OK
     *         content:
     *           application/json:
     *             {}
     *     parameters:
     *       - in: path
     *         name: alias
     *         schema:
     *           type: string
     *         required: true
     */
    /**
     * Flush alias
     *
     * @param   {string}  alias Alias
     * @returns {Promise}       Request promise
     */
    async flush (alias) {
        return this.client.post('/firewall/alias_util/flush/' + alias);
    }

    /**
     * @openapi
     *
     * /firewall/alias_util/list/{alias}:
     *   get:
     *     summary: List alias
     *     tags:
     *       - firewall/alias_util
     *     responses:
     *       '200':
     *         description: OK
     *         content:
     *           application/json:
     *             {}
     *     parameters:
     *       - in: path
     *         name: alias
     *         schema:
     *           type: string
     *         required: true
     */
    /**
     * List alias
     *
     * @param   {string}  alias Alias
     * @returns {Promise}       Request promise
     */
    async list (alias) {
        return this.client.get('/firewall/alias_util/list/' + alias);
    }

    /**
     * @openapi
     *
     * /firewall/alias_util/update_bogons:
     *   get:
     *     summary: Update bogons
     *     tags:
     *       - firewall/alias_util
     *     responses:
     *       '200':
     *         description: OK
     *         content:
     *           application/json:
     *             {}
     */
    /**
     * Update bogons
     *
     * @returns {Promise} Request promise
     */
    async update_bogons () {
        return this.client.get('/firewall/alias_util/update_bogons');
    }
}

module.exports = AliasUtilClient;
