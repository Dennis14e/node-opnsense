'use strict';

/**
 * ValidationsClient
 *
 * @module OPNsense/Acmeclient/ValidationsClient
 */

const BaseClient = require('../base');

/**
 * Validations
 */
class ValidationsClient extends BaseClient {
    /**
     * @openapi
     *
     * /acmeclient/validations/add:
     *   post:
     *     summary: Add validation
     *     tags:
     *       - acmeclient/validations
     *     responses:
     *       '200':
     *         description: OK
     *         content:
     *           application/json:
     *             {}
     */
    /**
     * Add validation
     *
     * @returns {Promise} Request promise
     */
    async add () {
        return this.client.post('/acmeclient/validations/add');
    }

    /**
     * @openapi
     *
     * /acmeclient/validations/get/{uuid}:
     *   post:
     *     summary: Delete validation
     *     tags:
     *       - acmeclient/validations
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
     * Delete validation
     *
     * @param   {string}  uuid Validation UUID
     * @returns {Promise}      Request promise
     */
    async del (uuid) {
        return this.client.post('/acmeclient/validations/del/' + uuid);
    }

    /**
     * @openapi
     *
     * /acmeclient/validations/get/{uuid}:
     *   post:
     *     summary: Get validation
     *     tags:
     *       - acmeclient/validations
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
     */
    /**
     * Get validation
     *
     * @param   {string}  uuid Validation UUID
     * @returns {Promise}      Request promise
     */
    async get (uuid = '') {
        return this.client.get('/acmeclient/validations/get/' + uuid);
    }

    /**
     * @openapi
     *
     * /acmeclient/validations/search:
     *   get:
     *     summary: Search validations
     *     tags:
     *       - acmeclient/validations
     *     responses:
     *       '200':
     *         description: OK
     *         content:
     *           application/json:
     *             {}
     */
    /**
     * Search validations
     *
     * @returns {Promise} Request promise
     */
    async search () {
        return this.client.get('/acmeclient/validations/search');
    }

    /**
     * @openapi
     *
     * /acmeclient/validations/toggle/{uuid}/{enabled}:
     *   post:
     *     summary: Toggle validation
     *     tags:
     *       - acmeclient/validations
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
     * Toggle validation
     *
     * @param   {string}       uuid    Validation UUID
     * @param   {boolean|null} enabled Enabled
     * @returns {Promise}              Request promise
     */
    async toggle (uuid, enabled = null) {
        enabled = (enabled === null) ? '' : Number(Boolean(enabled));
        return this.client.post('/acmeclient/validations/toggle/' + uuid + '/' + enabled);
    }

    /**
     * @openapi
     *
     * /acmeclient/validations/update/{uuid}:
     *   post:
     *     summary: Update validation
     *     tags:
     *       - acmeclient/validations
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
     * Update validation
     *
     * @param   {string}  uuid Validation UUID
     * @returns {Promise}      Request promise
     */
    async update (uuid) {
        return this.client.post('/acmeclient/validations/update/' + uuid);
    }
}

module.exports = ValidationsClient;
