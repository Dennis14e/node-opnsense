'use strict';

const BaseClient = require('../base');

class SettingsClient extends BaseClient {
    async addJob (job) {
        return await this.client.request('/cron/settings/addJob', 'post', { job: job });
    }

    async delJob (uuid) {
        return await this.client.request('/cron/settings/delJob/' + uuid, 'post');
    }

    async getJob (uuid = '') {
        return await this.client.request('/cron/settings/getJob/' + uuid, 'get');
    }

    async searchJobs () {
        return await this.client.request('/cron/settings/searchJobs');
    }

    async setJob (uuid, job) {
        return await this.client.request('/cron/settings/setJob/' + uuid, 'post', { job: job });
    }

    async toggleJob (uuid, enabled = '') {
        return await this.client.request('/cron/settings/toggleJob/' + uuid + '/' + enabled, 'post');
    }
}

module.exports = SettingsClient;
