'use strict';

const BaseClient = require('../base');

class CertficatesClient extends BaseClient {
    /**
     * @openapi
     *
     * /acmeclient/certificates/add:
     *   post:
     *     summary: Add certificate
     *     tags:
     *       - acmeclient/certificates
     *     produces:
     *       - application/json
     */
    /**
     * Add certificate
     *
     * @returns {Promise} Request promise
     */
    async add () {
        return this.client.post('/acmeclient/certificates/add');
    }

    /**
     * @openapi
     *
     * /acmeclient/certificates/del/{uuid}:
     *   post:
     *     summary: Delete certificate
     *     tags:
     *       - acmeclient/certificates
     *     produces:
     *       - application/json
     *     parameters:
     *       - in: path
     *         name: uuid
     *         required: true
     */
    /**
     * Delete certificate
     *
     * @param   {string}  uuid Certificate UUID
     * @returns {Promise}      Request promise
     */
    async del (uuid) {
        return this.client.post('/acmeclient/certificates/del/' + uuid);
    }

    /**
     * @openapi
     *
     * /acmeclient/certificates/get/{uuid}:
     *   get:
     *     summary: Get certificate
     *     tags:
     *       - acmeclient/certificates
     *     produces:
     *       - application/json
     *     parameters:
     *       - in: path
     *         name: uuid
     *         required: false
     */
    /**
     * Get certificate
     *
     * @param   {string}  uuid Certificate UUID
     * @returns {Promise}      Request promise
     */
    async get (uuid = '') {
        return this.client.get('/acmeclient/certificates/get/' + uuid);
    }

    /**
     * @openapi
     *
     * /acmeclient/certificates/removekey/{uuid}:
     *   get:
     *     summary: Remove certificate key
     *     tags:
     *       - acmeclient/certificates
     *     produces:
     *       - application/json
     *     parameters:
     *       - in: path
     *         name: uuid
     *         required: true
     */
    /**
     * Remove certificate key
     *
     * @param   {string}  uuid Certificate UUID
     * @returns {Promise}      Request promise
     */
    async removekey (uuid) {
        return this.client.get('/acmeclient/certificates/removekey/' + uuid);
    }

    /**
     * @openapi
     *
     * /acmeclient/certificates/revoke/{uuid}:
     *   post:
     *     summary: Revoke certificate
     *     tags:
     *       - acmeclient/certificates
     *     produces:
     *       - application/json
     *     parameters:
     *       - in: path
     *         name: uuid
     *         required: true
     */
    /**
     * Revoke certificate
     *
     * @param   {string}  uuid Certificate UUID
     * @returns {Promise}      Request promise
     */
    async revoke (uuid) {
        return this.client.post('/acmeclient/certificates/revoke/' + uuid);
    }

    /**
     * @openapi
     *
     * /acmeclient/certificates/search:
     *   get:
     *     summary: Search certificates
     *     tags:
     *       - acmeclient/certificates
     *     produces:
     *       - application/json
     */
    /**
     * Search certificates
     *
     * @returns {Promise} Request promise
     */
    async search () {
        return this.client.get('/acmeclient/certificates/search');
    }

    /**
     * @openapi
     *
     * /acmeclient/certificates/sign/{uuid}:
     *   post:
     *     summary: Sign certificate
     *     tags:
     *       - acmeclient/certificates
     *     produces:
     *       - application/json
     *     parameters:
     *       - in: path
     *         name: uuid
     *         required: true
     */
    /**
     * Sign certificate
     *
     * @param   {string}  uuid Certificate UUID
     * @returns {Promise}      Request promise
     */
    async sign (uuid) {
        return this.client.post('/acmeclient/certificates/sign/' + uuid);
    }

    /**
     * @openapi
     *
     * /acmeclient/certificates/toggle/{uuid}/{enabled}:
     *   post:
     *     summary: Toggle certificate
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
    /**
     * Toggle certificate
     *
     * @param   {string}       uuid    Certificate UUID
     * @param   {boolean|null} enabled Enabled
     * @returns {Promise}              Request promise
     */
    async toggle (uuid, enabled = null) {
        enabled = (enabled === null) ? '' : Number(Boolean(enabled));
        return this.client.post('/acmeclient/certificates/toggle/' + uuid + '/' + enabled);
    }

    /**
     * @openapi
     *
     * /acmeclient/certificates/update/{uuid}:
     *   post:
     *     summary: Update certificate
     *     tags:
     *       - acmeclient/certificates
     *     produces:
     *       - application/json
     *     parameters:
     *       - in: path
     *         name: uuid
     *         required: true
     */
    /**
     * Update certificate
     *
     * @param   {string}  uuid Certificate UUID
     * @returns {Promise}      Request promise
     */
    async update (uuid) {
        return this.client.post('/acmeclient/certificates/update/' + uuid);
    }
}

module.exports = CertficatesClient;
