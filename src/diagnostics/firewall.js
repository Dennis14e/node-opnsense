'use strict';

/**
 * FirewallClient
 *
 * @module OPNsense/Diagnostics/FirewallClient
 */

const BaseClient = require('../base');

/**
 * Firewall
 */
class FirewallClient extends BaseClient {
    /**
     * Get log
     *
     * @param   {number|null} limit  Limit
     * @param   {string|null} digest Digest
     * @returns {Promise}            Request promise
     */
    async log (limit = null, digest = null) {
        const get_data = {
            limit:  (limit === null)  ? '' : limit,
            digest: (digest === null) ? '' : digest,
        };

        return this.client.get('/diagnostics/firewall/log', get_data);
    }

    /**
     * Get log filters
     *
     * @returns {Promise} Request promise
     */
    async log_filters () {
        return this.client.get('/diagnostics/firewall/log_filters');
    }

    /**
     * Get stats
     *
     * @param   {number|null} limit    Limit
     * @param   {string|null} group_by Group by
     * @returns {Promise}              Request promise
     */
    async stats (limit = null, group_by = null) {
        const get_data = {
            limit:    (limit === null)    ? '' : limit,
            group_by: (group_by === null) ? '' : group_by,
        };

        return this.client.get('/diagnostics/firewall/stats', get_data);
    }
}

module.exports = FirewallClient;
