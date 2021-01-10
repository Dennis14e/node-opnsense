'use strict';

const BaseClient = require('../base');

class AliasClient extends BaseClient {
    /**
     * @openapi
     *
     * /firewall/alias/addItem:
     *   post:
     *     tags:
     *       - firewall/alias
     *     produces:
     *       - application/json
     *     parameters:
     *       - in: formData
     *         name: item
     *         required: true
     */
    async addItem (item) {
        return await this.client.post('/firewall/alias/addItem', { item: item });
    }

    /**
     * @openapi
     *
     * /firewall/alias/delItem/{uuid}:
     *   post:
     *     tags:
     *       - firewall/alias
     *     produces:
     *       - application/json
     *     parameters:
     *       - in: path
     *         name: uuid
     *         required: true
     */
    async delItem (uuid) {
        return await this.client.post('/firewall/alias/delItem/' + uuid);
    }

    /**
     * @openapi
     *
     * /firewall/alias/export:
     *   get:
     *     tags:
     *       - firewall/alias
     *     produces:
     *       - application/json
     */
    async export () {
        return await this.client.get('/firewall/alias/export');
    }

    /**
     * @openapi
     *
     * /firewall/alias/getAliasUUID:
     *   get:
     *     tags:
     *       - firewall/alias
     *     produces:
     *       - application/json
     *     parameters:
     *       - in: formData
     *         name: name
     *         required: true
     */
    async getAliasUUID (name) {
        return await this.client.get('/firewall/alias/getAliasUUID', { name: name });
    }

    /**
     * @openapi
     *
     * /firewall/alias/getGeoIP:
     *   get:
     *     tags:
     *       - firewall/alias
     *     produces:
     *       - application/json
     */
    async getGeoIP () {
        return await this.client.get('/firewall/alias/getGeoIP');
    }

    /**
     * @openapi
     *
     * /firewall/alias/getItem/{uuid}:
     *   get:
     *     tags:
     *       - firewall/alias
     *     produces:
     *       - application/json
     *     parameters:
     *       - in: path
     *         name: uuid
     *         required: true
     */
    async getItem (uuid = '') {
        return await this.client.get('/firewall/alias/getItem/' + uuid);
    }

    /**
     * @openapi
     *
     * /firewall/alias/import:
     *   post:
     *     tags:
     *       - firewall/alias
     *     produces:
     *       - application/json
     *     parameters:
     *       - in: formData
     *         name: data
     *         required: true
     */
    async import (data) {
        return await this.client.post('/firewall/alias/import', { data: data });
    }

    /**
     * @openapi
     *
     * /firewall/alias/listCountries:
     *   get:
     *     tags:
     *       - firewall/alias
     *     produces:
     *       - application/json
     */
    async listCountries () {
        return await this.client.get('/firewall/alias/listCountries');
    }

    /**
     * @openapi
     *
     * /firewall/alias/listNetworkAliases:
     *   get:
     *     tags:
     *       - firewall/alias
     *     produces:
     *       - application/json
     */
    async listNetworkAliases () {
        return await this.client.get('/firewall/alias/listNetworkAliases');
    }

    /**
     * @openapi
     *
     * /firewall/alias/reconfigure:
     *   post:
     *     tags:
     *       - firewall/alias
     *     produces:
     *       - application/json
     */
    async reconfigure () {
        return await this.client.post('/firewall/alias/reconfigure');
    }

    /**
     * @openapi
     *
     * /firewall/alias/searchItem:
     *   get:
     *     tags:
     *       - firewall/alias
     *     produces:
     *       - application/json
     *     parameters:
     *       - in: formData
     *         name: type
     *         required: true
     */
    async searchItem (type = '') {
        return await this.client.get('/firewall/alias/searchItem', { type: type });
    }

    /**
     * @openapi
     *
     * /firewall/alias/setItem/{uuid}:
     *   post:
     *     tags:
     *       - firewall/alias
     *     produces:
     *       - application/json
     *     parameters:
     *       - in: path
     *         name: uuid
     *         required: true
     *       - in: formData
     *         name: type
     *         required: true
     */
    async setItem (uuid, alias) {
        return await this.client.post('/firewall/alias/setItem/' + uuid, { alias: alias });
    }

    /**
     * @openapi
     *
     * /firewall/alias/toggleItem/{uuid}/{enabled}:
     *   post:
     *     tags:
     *       - firewall/alias
     *     produces:
     *       - application/json
     *     parameters:
     *       - in: path
     *         name: uuid
     *         required: true
     *       - in: path
     *         name: enabled
     *         required: true
     */
    async toggleItem (uuid, enabled) {
        return await this.client.post('/firewall/alias/toggleItem/' + uuid + '/' + enabled);
    }
}

module.exports = AliasClient;
