'use strict';

/**
 * DnsClient
 *
 * @module OPNsense/Diagnostics/DnsClient
 */

const BaseClient = require('../base');

/**
 * Dns
 */
class DnsClient extends BaseClient {
    /**
     * Reverse lookup
     *
     * @param   {string}  address Address
     * @returns {Promise}         Request promise
     */
    async reverse_lookup (address) {
        const get_data = { address: address };
        return this.client.get('/diagnostics/dns/reverse_lookup', get_data);
    }
}

module.exports = DnsClient;
