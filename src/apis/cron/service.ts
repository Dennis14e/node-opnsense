'use strict';

import { BaseClient } from '../../client/BaseClient';

/**
 * ServiceClient
 *
 * @module OPNsense/Cron/ServiceClient
 */

/**
 * Service
 */
export class ServiceClient extends BaseClient {
    /**
     * @openapi
     *
     * /cron/service/reconfigure:
     *   post:
     *     summary: Reconfigure service
     *     tags:
     *       - cron/service
     *     responses:
     *       '200':
     *         description: OK
     *         content:
     *           application/json:
     *             {}
     */
    /**
     * Reconfigure service
     *
     * @returns {Promise} Request promise
     */
    async reconfigure () {
        return this.httpClient.post('/cron/service/reconfigure');
    }
}
