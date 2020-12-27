'use strict';

const BaseClient = require('../base');

class SettingsClient extends BaseClient {
    async addJob (job) {
        return await this.client.post('/cron/settings/addJob', { job: job });
    }

    async delJob (uuid) {
        return await this.client.post('/cron/settings/delJob/' + uuid);
    }

    async getJob (uuid = '') {
        return await this.client.get('/cron/settings/getJob/' + uuid);
    }

    async searchJobs () {
        return await this.client.get('/cron/settings/searchJobs');
    }

    async setJob (uuid, job) {
        return await this.client.post('/cron/settings/setJob/' + uuid, { job: job });
    }

    async toggleJob (uuid, enabled = '') {
        return await this.client.post('/cron/settings/toggleJob/' + uuid + '/' + enabled);
    }
}

module.exports = SettingsClient;
