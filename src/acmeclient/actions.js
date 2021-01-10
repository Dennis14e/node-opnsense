'use strict';

const BaseClient = require('../base');

class ActionsClient extends BaseClient {
    /**
     * @openapi
     *
     * /acmeclient/actions/add:
     *   post:
     *     tags:
     *       - acmeclient/actions
     *     produces:
     *       - application/json
     */
    async add () {
        return this.client.post('/acmeclient/actions/add');
    }

    /**
     * @openapi
     *
     * /acmeclient/actions/del/{uuid}:
     *   post:
     *     tags:
     *       - acmeclient/actions
     *     produces:
     *       - application/json
     *     parameters:
     *       - in: path
     *         name: uuid
     *         required: true
     */
    async del (uuid) {
        return this.client.post('/acmeclient/actions/del/' + uuid);
    }

    /**
     * @openapi
     *
     * /acmeclient/actions/get/{uuid}:
     *   get:
     *     tags:
     *       - acmeclient/actions
     *     produces:
     *       - application/json
     *     parameters:
     *       - in: path
     *         name: uuid
     *         required: true
     */
    async get (uuid = '') {
        return this.client.get('/acmeclient/actions/get/' + uuid);
    }

    /**
     * @openapi
     *
     * /acmeclient/actions/search:
     *   get:
     *     tags:
     *       - acmeclient/actions
     *     produces:
     *       - application/json
     */
    async search () {
        return this.client.get('/acmeclient/actions/search');
    }

    /**
     * @openapi
     *
     * /acmeclient/actions/sftpGetIdentity:
     *   get:
     *     tags:
     *       - acmeclient/actions
     *     produces:
     *       - application/json
     */
    async sftpGetIdentity () {
        return this.client.get('/acmeclient/actions/sftpGetIdentity');
    }

    /**
     * @openapi
     *
     * /acmeclient/actions/sftpTestConnection:
     *   get:
     *     tags:
     *       - acmeclient/actions
     *     produces:
     *       - application/json
     */
    async sftpTestConnection () {
        return this.client.get('/acmeclient/actions/sftpTestConnection');
    }

    /**
     * @openapi
     *
     * /acmeclient/actions/toggle/{uuid}/{enabled}:
     *   post:
     *     tags:
     *       - acmeclient/actions
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
        return this.client.post('/acmeclient/actions/toggle/' + uuid + '/' + enabled);
    }

    /**
     * @openapi
     *
     * /acmeclient/actions/update/{uuid}:
     *   post:
     *     tags:
     *       - acmeclient/actions
     *     produces:
     *       - application/json
     *     parameters:
     *       - in: path
     *         name: uuid
     *         required: true
     */
    async update (uuid) {
        return this.client.post('/acmeclient/actions/update/' + uuid);
    }
}

module.exports = ActionsClient;
