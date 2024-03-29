'use strict';

/**
 * SettingsClient
 *
 * @module OPNsense/Cron/ServiceClient
 */

const BaseClient = require('../base');

/**
 * Settings
 */
class SettingsClient extends BaseClient {
    /**
     * @openapi
     *
     * /cron/settings/addJob:
     *   post:
     *     summary: Add job
     *     tags:
     *       - cron/settings
     *     responses:
     *       '200':
     *         description: OK
     *         content:
     *           application/json:
     *             {}
     */
    /**
     * Add job
     *
     * @returns {Promise} Request promise
     */
    async addJob () {
        return this.client.post('/cron/settings/addJob');
    }

    /**
     * @openapi
     *
     * /cron/settings/delJob/{uuid}:
     *   post:
     *     summary: Delete job
     *     tags:
     *       - cron/settings
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
     * Delete job
     *
     * @param   {string}  uuid Job UUID
     * @returns {Promise}      Request promise
     */
    async delJob (uuid) {
        return this.client.post('/cron/settings/delJob/' + uuid);
    }

    /**
     * @openapi
     *
     * /cron/settings/getJob/{uuid}:
     *   get:
     *     summary: Get job
     *     tags:
     *       - cron/settings
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
     * Get job
     *
     * @param   {string}  uuid Job UUID
     * @returns {Promise}      Request promise
     */
    async getJob (uuid = '') {
        return this.client.get('/cron/settings/getJob/' + uuid);
    }

    /**
     * @openapi
     *
     * /cron/settings/searchJobs:
     *   get:
     *     summary: Search jobs
     *     tags:
     *       - cron/settings
     *     responses:
     *       '200':
     *         description: OK
     *         content:
     *           application/json:
     *             {}
     */
    /**
     * Search jobs
     *
     * @returns {Promise} Request promise
     */
    async searchJobs () {
        return this.client.get('/cron/settings/searchJobs');
    }

    /**
     * @openapi
     *
     * /cron/settings/setJob/{uuid}:
     *   post:
     *     summary: Set job
     *     tags:
     *       - cron/settings
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
     *     requestBody:
     *       content:
     *         x-www-form-urlencoded:
     *           schema:
     *             type: object
     *             properties:
     *               job:
     *                 type: string
     *             required:
     *               - job
     */
    /**
     * Set job
     *
     * @param   {string}  uuid Job UUID
     * @param   {object}  job  Job object
     * @returns {Promise}      Request promise
     */
    async setJob (uuid, job) {
        return this.client.post('/cron/settings/setJob/' + uuid, { job: job });
    }

    /**
     * @openapi
     *
     * /cron/settings/toggleJob/{uuid}/{enabled}:
     *   post:
     *     summary: Toggle job
     *     tags:
     *       - cron/settings
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
     *       - in: path
     *         name: enabled
     *         schema:
     *           type: string
     */
    /**
     * Toggle job
     *
     * @param   {string}       uuid    Job UUID
     * @param   {boolean|null} enabled Enabled
     * @returns {Promise}              Request promise
     */
    async toggleJob (uuid, enabled = null) {
        enabled = (enabled === null) ? '' : Number(Boolean(enabled));
        return this.client.post('/cron/settings/toggleJob/' + uuid + '/' + enabled);
    }
}

module.exports = SettingsClient;
