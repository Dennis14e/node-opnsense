'use strict';

const BaseClient = require('../base');

class WolClient extends BaseClient {
    async searchHost () {
        return await this.client.request('/wol/wol/searchHost');
    }

    async wakeByUUID (uuid) {
        return await this.client.request('/wol/wol/set', 'post', { uuid: uuid });
    }

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
