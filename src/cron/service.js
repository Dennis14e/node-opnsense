'use strict';

/**
 * ServiceClient
 *
 * @module OPNsense/Cron/ServiceClient
 */

const BaseClient = require('../base');

/**
 * Service
 */
class ServiceClient extends BaseClient {
    /**
     * Reconfigure service
     *
     * @returns {Promise} Request promise
     */
    async reconfigure () {
        return this.client.post('/cron/service/reconfigure');
    }
}

module.exports = ServiceClient;
