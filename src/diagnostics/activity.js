'use strict';

/**
 * ActivityClient
 *
 * @module OPNsense/Diagnostics/ActivityClient
 */

const BaseClient = require('../base');

/**
 * Activity
 */
class ActivityClient extends BaseClient {
    /**
     * Get activity
     *
     * @returns {Promise} Request promise
     */
    async getActivity () {
        return this.client.get('/diagnostics/activity/getActivity');
    }
}

module.exports = ActivityClient;
