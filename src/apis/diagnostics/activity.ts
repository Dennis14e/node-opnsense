'use strict';

import { BaseClient } from '../../client/BaseClient';

/**
 * ActivityClient
 *
 * @module OPNsense/Diagnostics/ActivityClient
 */

/**
 * Activity
 */
export class ActivityClient extends BaseClient {
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
        return this.httpClient.get('/diagnostics/activity/getActivity');
    }
}
