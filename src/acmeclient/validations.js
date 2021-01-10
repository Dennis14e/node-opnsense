'use strict';

const BaseClient = require('../base');

class ValidationsClient extends BaseClient {
    /**
     * @openapi
     *
     * /acmeclient/validations/add:
     *   post:
     *     tags:
     *       - acmeclient/validations
     *     produces:
     *       - application/json
     */
    async add () {
        return await this.client.post('/acmeclient/validations/add');
    }

    /**
     * @openapi
     *
     * /acmeclient/validations/get/{uuid}:
     *   post:
     *     tags:
     *       - acmeclient/validations
     *     produces:
     *       - application/json
     *     parameters:
     *       - in: path
     *         name: uuid
     *         required: true
     */
    async del (uuid) {
        return await this.client.post('/acmeclient/validations/del/' + uuid);
    }

    /**
     * @openapi
     *
     * /acmeclient/validations/get/{uuid}:
     *   post:
     *     tags:
     *       - acmeclient/validations
     *     produces:
     *       - application/json
     *     parameters:
     *       - in: path
     *         name: uuid
     *         required: false
     */
    async get (uuid = '') {
        return await this.client.get('/acmeclient/validations/get/' + uuid);
    }

    /**
     * @openapi
     *
     * /acmeclient/validations/search:
     *   get:
     *     tags:
     *       - acmeclient/validations
     *     produces:
     *       - application/json
     */
    async search () {
        return await this.client.get('/acmeclient/validations/search');
    }

    /**
     * @openapi
     *
     * /acmeclient/validations/toggle/{uuid}/{enabled}:
     *   post:
     *     tags:
     *       - acmeclient/validations
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
        return await this.client.post('/acmeclient/validations/toggle/' + uuid + '/' + enabled);
    }

    /**
     * @openapi
     *
     * /acmeclient/validations/update/{uuid}:
     *   post:
     *     tags:
     *       - acmeclient/validations
     *     produces:
     *       - application/json
     *     parameters:
     *       - in: path
     *         name: uuid
     *         required: true
     */
    async update (uuid) {
        return await this.client.post('/acmeclient/validations/update/' + uuid);
    }
}

module.exports = ValidationsClient;
