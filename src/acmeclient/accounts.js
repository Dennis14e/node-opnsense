'use strict';

const BaseClient = require('../base');

class AccountsClient extends BaseClient {
    /**
     * @openapi
     *
     * /acmeclient/accounts/add:
     *   post:
     *     summary: Add account
     *     tags:
     *       - acmeclient/accounts
     *     produces:
     *       - application/json
     */
    /**
     * Add account
     *
     * @returns {Promise} Request promise
     */
    async add () {
        return this.client.post('/acmeclient/accounts/add');
    }

    /**
     * @openapi
     *
     * /acmeclient/accounts/del/{uuid}:
     *   post:
     *     summary: Delete account
     *     tags:
     *       - acmeclient/accounts
     *     produces:
     *       - application/json
     *     parameters:
     *       - in: path
     *         name: uuid
     *         required: true
     */
    /**
     * Delete account
     *
     * @param   {string}  uuid Account UUID
     * @returns {Promise}      Request promise
     */
    async del (uuid) {
        return this.client.post('/acmeclient/accounts/del/' + uuid);
    }

    /**
     * @openapi
     *
     * /acmeclient/accounts/get/{uuid}:
     *   post:
     *     summary: Get account
     *     tags:
     *       - acmeclient/accounts
     *     produces:
     *       - application/json
     *     parameters:
     *       - in: path
     *         name: uuid
     *         required: false
     */
    /**
     * Get account
     *
     * @param   {string}  uuid Account UUID
     * @returns {Promise}      Request promise
     */
    async get (uuid = '') {
        return this.client.get('/acmeclient/accounts/get/' + uuid);
    }

    /**
     * @openapi
     *
     * /acmeclient/accounts/search:
     *   get:
     *     summary: Search accounts
     *     tags:
     *       - acmeclient/accounts
     *     produces:
     *       - application/json
     */
    /**
     * Search accounts
     *
     * @returns {Promise} Request promise
     */
    async search () {
        return this.client.get('/acmeclient/accounts/search');
    }

    /**
     * @openapi
     *
     * /acmeclient/accounts/toggle/{uuid}/{enabled}:
     *   post:
     *     summary: Toggle account
     *     tags:
     *       - acmeclient/accounts
     *     produces:
     *       - application/json
     *     parameters:
     *       - in: path
     *         name: uuid
     *         required: true
     *       - in: path
     *         name: enabled
     *         required: false
     */
    /**
     * Toggle account
     *
     * @param   {string}       uuid    Account UUID
     * @param   {boolean|null} enabled Enabled
     * @returns {Promise}              Request promise
     */
    async toggle (uuid, enabled = null) {
        enabled = (enabled === null) ? '' : Number(Boolean(enabled));
        return this.client.post('/acmeclient/accounts/toggle/' + uuid + '/' + enabled);
    }

    /**
     * @openapi
     *
     * /acmeclient/accounts/update/{uuid}:
     *   post:
     *     summary: Update account
     *     tags:
     *       - acmeclient/accounts
     *     produces:
     *       - application/json
     *     parameters:
     *       - in: path
     *         name: uuid
     *         required: true
     */
    /**
     * Update account
     *
     * @param   {string}  uuid Account UUID
     * @returns {Promise}      Request promise
     */
    async update (uuid) {
        return this.client.post('/acmeclient/accounts/update/' + uuid);
    }
}

module.exports = AccountsClient;
