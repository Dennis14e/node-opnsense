'use strict';

/**
 * WolClient
 *
 * @module OPNsense/Wol/WolClient
 */

const BaseClient = require('../base');

/**
 * Wol
 */
class WolClient extends BaseClient {
    /**
     * @openapi
     *
     * /wol/wol/searchHost:
     *   get:
     *     summary: Search hosts
     *     tags:
     *       - wol/wol
     *     produces:
     *       - application/json
     */
    /**
     * Search hosts
     *
     * @returns {Promise} Request promise
     */
    async searchHost () {
        return this.client.get('/wol/wol/searchHost');
    }

    /**
     * @openapi
     *
     * /wol/wol/set:
     *   post:
     *     summary: Wake device by UUID
     *     tags:
     *       - wol/wol
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: uuid
     *         in: formData
     *         required: true
     */
    /**
     * Wake device by UUID
     *
     * @param   {string}  uuid UUID of WoL host
     * @returns {Promise}      Request promise
     */
    async wakeByUUID (uuid) {
        return this.client.post('/wol/wol/set', { uuid: uuid });
    }

    /**
     * Wake device by MAC address
     *
     * @param   {string}  mac MAC-address of WoL host
     * @returns {Promise}     Request promise
     */
    async wakeByMAC (mac) {
        let uuid = null;

        await this.searchHost().then(res => {
            if (res.status !== 'success') {
                return this.client.response(res.status, res.result);
            }

            uuid = res.result.rows.find(row => row.mac === mac);
            uuid = (uuid === undefined) ? null : uuid.uuid;
        });

        if (uuid === null) {
            return this.client.response('error', 'No entry was found with this MAC address.');
        }

        return await this.wakeByUUID(uuid);
    }
}

module.exports = WolClient;
