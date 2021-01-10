'use strict';

const BaseClient = require('../base');

class AliasUtilClient extends BaseClient {
    /**
     * @openapi
     *
     * /firewall/alias_util/add/{alias}:
     *   post:
     *     tags:
     *       - firewall/alias_util
     *     produces:
     *       - application/json
     *     parameters:
     *       - in: path
     *         name: alias
     *         required: true
     *       - in: formData
     *         name: address
     *         required: true
     */
    async add (alias, address) {
        return await this.client.post('/firewall/alias_util/add/' + alias, { address: address });
    }

    /**
     * @openapi
     *
     * /firewall/alias_util/aliases:
     *   get:
     *     tags:
     *       - firewall/alias_util
     *     produces:
     *       - application/json
     */
    async aliases () {
        return await this.client.get('/firewall/alias_util/aliases');
    }

    /**
     * @openapi
     *
     * /firewall/alias_util/delete/{alias}:
     *   post:
     *     tags:
     *       - firewall/alias_util
     *     produces:
     *       - application/json
     *     parameters:
     *       - in: path
     *         name: alias
     *         required: true
     *       - in: formData
     *         name: address
     *         required: true
     */
    async delete (alias, address) {
        return await this.client.post('/firewall/alias_util/delete/' + alias, { address: address });
    }

    /**
     * @openapi
     *
     * /firewall/alias_util/find_references:
     *   post:
     *     tags:
     *       - firewall/alias_util
     *     produces:
     *       - application/json
     *     parameters:
     *       - in: formData
     *         name: ip
     *         required: true
     */
    async find_references (ip) {
        return await this.client.post('/firewall/alias_util/find_references', { ip: ip });
    }

    /**
     * @openapi
     *
     * /firewall/alias_util/flush/{alias}:
     *   post:
     *     tags:
     *       - firewall/alias_util
     *     produces:
     *       - application/json
     *     parameters:
     *       - in: path
     *         name: alias
     *         required: true
     */
    async flush (alias) {
        return await this.client.post('/firewall/alias_util/flush/' + alias);
    }

    /**
     * @openapi
     *
     * /firewall/alias_util/list/{alias}:
     *   get:
     *     tags:
     *       - firewall/alias_util
     *     produces:
     *       - application/json
     *     parameters:
     *       - in: path
     *         name: alias
     *         required: true
     */
    async list (alias) {
        return await this.client.get('/firewall/alias_util/list/' + alias);
    }

    /**
     * @openapi
     *
     * /firewall/alias_util/update_bogons:
     *   get:
     *     tags:
     *       - firewall/alias_util
     *     produces:
     *       - application/json
     */
    async update_bogons () {
        return await this.client.get('/firewall/alias_util/update_bogons');
    }
}

module.exports = AliasUtilClient;
