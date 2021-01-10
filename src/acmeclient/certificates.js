'use strict';

const BaseClient = require('../base');

class CertficatesClient extends BaseClient {
    /**
     * @openapi
     *
     * /acmeclient/certificates/add:
     *   post:
     *     tags:
     *       - acmeclient/certificates
     *     produces:
     *       - application/json
     */
    async add () {
        return await this.client.post('/acmeclient/certificates/add');
    }

    /**
     * @openapi
     *
     * /acmeclient/certificates/del/{uuid}:
     *   post:
     *     tags:
     *       - acmeclient/certificates
     *     produces:
     *       - application/json
     *     parameters:
     *       - in: path
     *         name: uuid
     *         required: true
     */
    async del (uuid) {
        return await this.client.post('/acmeclient/certificates/del/' + uuid);
    }

    /**
     * @openapi
     *
     * /acmeclient/certificates/get/{uuid}:
     *   get:
     *     tags:
     *       - acmeclient/certificates
     *     produces:
     *       - application/json
     *     parameters:
     *       - in: path
     *         name: uuid
     *         required: false
     */
    async get (uuid = '') {
        return await this.client.get('/acmeclient/certificates/get/' + uuid);
    }

    /**
     * @openapi
     *
     * /acmeclient/certificates/removekey/{uuid}:
     *   get:
     *     tags:
     *       - acmeclient/certificates
     *     produces:
     *       - application/json
     *     parameters:
     *       - in: path
     *         name: uuid
     *         required: true
     */
    async removekey (uuid) {
        return await this.client.get('/acmeclient/certificates/removekey/' + uuid);
    }

    /**
     * @openapi
     *
     * /acmeclient/certificates/revoke/{uuid}:
     *   post:
     *     tags:
     *       - acmeclient/certificates
     *     produces:
     *       - application/json
     *     parameters:
     *       - in: path
     *         name: uuid
     *         required: true
     */
    async revoke (uuid) {
        return await this.client.post('/acmeclient/certificates/revoke/' + uuid);
    }

    /**
     * @openapi
     *
     * /acmeclient/certificates/search:
     *   get:
     *     tags:
     *       - acmeclient/certificates
     *     produces:
     *       - application/json
     */
    async search () {
        return await this.client.get('/acmeclient/certificates/search');
    }

    /**
     * @openapi
     *
     * /acmeclient/certificates/sign/{uuid}:
     *   post:
     *     tags:
     *       - acmeclient/certificates
     *     produces:
     *       - application/json
     *     parameters:
     *       - in: path
     *         name: uuid
     *         required: true
     */
    async sign (uuid) {
        return await this.client.post('/acmeclient/certificates/sign/' + uuid);
    }

    /**
     * @openapi
     *
     * /acmeclient/certificates/toggle/{uuid}/{enabled}:
     *   post:
     *     tags:
     *       - acmeclient/certificates
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
        return await this.client.post('/acmeclient/certificates/toggle/' + uuid + '/' + enabled);
    }

    /**
     * @openapi
     *
     * /acmeclient/certificates/update/{uuid}:
     *   post:
     *     tags:
     *       - acmeclient/certificates
     *     produces:
     *       - application/json
     *     parameters:
     *       - in: path
     *         name: uuid
     *         required: true
     */
    async update (uuid) {
        return await this.client.post('/acmeclient/certificates/update/' + uuid);
    }
}

module.exports = CertficatesClient;
