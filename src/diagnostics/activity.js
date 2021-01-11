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
     * @openapi
     *
     * /diagnostics/activity/getActivity:
     *   get:
     *     summary: Get activity
     *     tags:
     *       - diagnostics/activity
     *     responses:
     *       '200':
     *         description: OK
     *         content:
     *           application/json:
     *             {}
     */
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
