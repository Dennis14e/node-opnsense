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
     * Add job
     *
     * @returns {Promise} Request promise
     */
    async addJob () {
        return this.client.post('/cron/settings/addJob');
    }

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
     * Get job
     *
     * @param   {string}  uuid Job UUID
     * @returns {Promise}      Request promise
     */
    async getJob (uuid = '') {
        return this.client.get('/cron/settings/getJob/' + uuid);
    }

    /**
     * Search jobs
     *
     * @returns {Promise} Request promise
     */
    async searchJobs () {
        return this.client.get('/cron/settings/searchJobs');
    }

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
