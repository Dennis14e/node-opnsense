'use strict';

class BaseClient {
    constructor (opnsenseClient) {
        this.client = opnsenseClient;
    }
}

module.exports = BaseClient;
