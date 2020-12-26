'use strict';

const BaseClient = require('../base');

class ActivityClient extends BaseClient {
    async getActivity () {
        return await this.client.request('/diagnostics/activity/getActivity');
    }
}

module.exports = ActivityClient;
