'use strict';

/**
 * ActionsClient
 *
 * @module OPNsense/Acmeclient/ActionsClient
 */

const BaseClient = require('../base');

/**
 * Actions
 */
class ActionsClient extends BaseClient {
    /**
     * @openapi
     *
     * /acmeclient/actions/add:
     *   post:
     *     summary: Add action
     *     tags:
     *       - acmeclient/actions
     *     responses:
     *       '200':
     *         description: OK
     *         content:
     *           application/json:
     *             {}
     */
    /**
     * Add action
     *
     * @returns {Promise} Request promise
     */
    async add () {
        return this.client.post('/acmeclient/actions/add');
    }

    /**
     * @openapi
     *
     * /acmeclient/actions/del/{uuid}:
     *   post:
     *     summary: Delete action
     *     tags:
     *       - acmeclient/actions
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
     * Delete action
     *
     * @param   {string}  uuid Action UUID
     * @returns {Promise}      Request promise
     */
    async del (uuid) {
        return this.client.post('/acmeclient/actions/del/' + uuid);
    }

    /**
     * @openapi
     *
     * /acmeclient/actions/get/{uuid}:
     *   get:
     *     summary: Get action
     *     tags:
     *       - acmeclient/actions
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
     * Get action
     *
     * @param   {string}  uuid Action UUID
     * @returns {Promise}      Request promise
     */
    async get (uuid = '') {
        return this.client.get('/acmeclient/actions/get/' + uuid);
    }

    /**
     * @openapi
     *
     * /acmeclient/actions/search:
     *   get:
     *     summary: Search actions
     *     tags:
     *       - acmeclient/actions
     *     responses:
     *       '200':
     *         description: OK
     *         content:
     *           application/json:
     *             {}
     */
    /**
     * Search actions
     *
     * @returns {Promise} Request promise
     */
    async search () {
        return this.client.get('/acmeclient/actions/search');
    }

    /**
     * @openapi
     *
     * /acmeclient/actions/sftpGetIdentity:
     *   get:
     *     summary: Get SFTP identity
     *     tags:
     *       - acmeclient/actions
     *     responses:
     *       '200':
     *         description: OK
     *         content:
     *           application/json:
     *             {}
     */
    /**
     * Get SFTP identity
     *
     * @returns {Promise} Request promise
     */
    async sftpGetIdentity () {
        return this.client.get('/acmeclient/actions/sftpGetIdentity');
    }

    /**
     * @openapi
     *
     * /acmeclient/actions/sftpTestConnection:
     *   get:
     *     summary: Test SFTP connection
     *     tags:
     *       - acmeclient/actions
     *     responses:
     *       '200':
     *         description: OK
     *         content:
     *           application/json:
     *             {}
     */
    /**
     * Test SFTP connection
     *
     * @returns {Promise} Request promise
     */
    async sftpTestConnection () {
        return this.client.get('/acmeclient/actions/sftpTestConnection');
    }

    /**
     * @openapi
     *
     * /acmeclient/actions/toggle/{uuid}/{enabled}:
     *   post:
     *     summary: Toggle action
     *     tags:
     *       - acmeclient/actions
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
     * Toggle action
     *
     * @param   {string}       uuid    Action UUID
     * @param   {boolean|null} enabled Enabled
     * @returns {Promise}              Request promise
     */
    async toggle (uuid, enabled = null) {
        enabled = (enabled === null) ? '' : Number(Boolean(enabled));
        return this.client.post('/acmeclient/actions/toggle/' + uuid + '/' + enabled);
    }

    /**
     * @openapi
     *
     * /acmeclient/actions/update/{uuid}:
     *   post:
     *     summary: Update action
     *     tags:
     *       - acmeclient/actions
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
     * Update action
     *
     * @param   {string}  uuid Action UUID
     * @returns {Promise}      Request promise
     */
    async update (uuid) {
        return this.client.post('/acmeclient/actions/update/' + uuid);
    }
}

module.exports = ActionsClient;
