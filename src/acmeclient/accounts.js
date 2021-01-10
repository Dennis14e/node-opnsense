'use strict';

const BaseClient = require('../base');

class AccountsClient extends BaseClient {
    /**
     * @openapi
     *
     * /acmeclient/accounts/add:
     *   post:
     *     tags:
     *       - acmeclient/accounts
     *     produces:
     *       - application/json
     */
    async add () {
        return await this.client.post('/acmeclient/accounts/add');
    }

    /**
     * @openapi
     *
     * /acmeclient/accounts/del/{uuid}:
     *   post:
     *     tags:
     *       - acmeclient/accounts
     *     produces:
     *       - application/json
     *     parameters:
     *       - in: path
     *         name: uuid
     *         required: true
     */
    async del (uuid) {
        return await this.client.post('/acmeclient/accounts/del/' + uuid);
    }

    /**
     * @openapi
     *
     * /acmeclient/accounts/get/{uuid}:
     *   post:
     *     tags:
     *       - acmeclient/accounts
     *     produces:
     *       - application/json
     *     parameters:
     *       - in: path
     *         name: uuid
     *         required: false
     */
    async get (uuid = '') {
        return await this.client.get('/acmeclient/accounts/get/' + uuid);
    }

    /**
     * @openapi
     *
     * /acmeclient/accounts/search:
     *   get:
     *     tags:
     *       - acmeclient/accounts
     *     produces:
     *       - application/json
     */
    async search () {
        return await this.client.get('/acmeclient/accounts/search');
    }

    /**
     * @openapi
     *
     * /acmeclient/accounts/toggle/{uuid}/{enabled}:
     *   post:
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
    async toggle (uuid, enabled = '') {
        return await this.client.post('/acmeclient/accounts/toggle/' + uuid + '/' + enabled);
    }

    /**
     * @openapi
     *
     * /acmeclient/accounts/update/{uuid}:
     *   post:
     *     tags:
     *       - acmeclient/accounts
     *     produces:
     *       - application/json
     *     parameters:
     *       - in: path
     *         name: uuid
     *         required: true
     */
    async update (uuid) {
        return await this.client.post('/acmeclient/accounts/update/' + uuid);
    }
}

module.exports = AccountsClient;
