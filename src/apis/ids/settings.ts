'use strict';

import { BaseClient } from '../../client/BaseClient';

/**
 * SettingsClient
 *
 * @module OPNsense/IDS/SettingsClient
 */

/**
 * Settings
 */
export class SettingsClient extends BaseClient {
    /**
     * @openapi
     *
     * /ids/settings/searchInstalledRules:
     *   post:
     *     summary: Search installed ids rules
     *     tags:
     *       - ids/settings
     *     responses:
     *       '200':
     *         description: OK
     *         content:
     *           application/json:
     *             {}
     *     requestBody:
     *       content:
     *         x-www-form-urlencoded:
     *           schema:
     *             type: object
     *             properties:
     *               searchPhrase:
     *                 type: string
     *               sort:
     *                 type: string
     *                 enum: [ asc, desc ]
     *               rowCount:
     *                 type: integer
     *               current:
     *                 type: integer
     */
    /**
     * Search installed ids rules
     *
     * @param   {string|null} searchPhrase Search phrase
     * @param   {string}      sort         Sorting (asc, desc)
     * @param   {int|null}    rowCount     Items per page
     * @param   {int|null}    current      Current page
     * @returns {Promise}                  Request promise
     */
    async searchInstalledRules (searchPhrase = null, sort = 'asc', rowCount = null, current = null) {
        return this.httpClient.post('/ids/settings/searchInstalledRules', {
            searchPhrase: searchPhrase,
            sort: sort,
            rowCount: rowCount,
            current: current,
        });
    }

    /**
     * @openapi
     *
     * /ids/settings/getRuleInfo/{uuid}:
     *   post:
     *     summary: Get ids rule informations
     *     tags:
     *       - ids/settings
     *     responses:
     *       '200':
     *         description: OK
     *         content:
     *           application/json:
     *             {}
     *     parameters:
     *       - in: path
     *         name: uuid
     *         schema:
     *           type: string
     *         required: true
     */
    /**
     * Get ids rule informations
     *
     * @param   {string}  uuid UUID of ids rule
     * @returns {Promise}      Request promise
     */
    async getRuleInfo (uuid) {
        return this.httpClient.get('/ids/settings/getRuleInfo/' + uuid);
    }
}
