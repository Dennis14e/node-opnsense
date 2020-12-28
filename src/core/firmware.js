'use strict';

const BaseClient = require('../base');

class FirmwareClient extends BaseClient {
    async poweroff () {
        return await this.client.post('/core/firmware/poweroff');
    }

    async reboot () {
        return await this.client.post('/core/firmware/reboot');
    }

    async running () {
        return await this.client.get('/core/firmware/running');
    }

    async getFirmwareConfig () {
        return await this.client.get('/core/firmware/getFirmwareConfig');
    }

    async getFirmwareOptions () {
        return await this.client.get('/core/firmware/getFirmwareOptions');
    }

    async setFirmwareConfig (mirror = null, flavour = null, type = null, subscription = null) {
        const post_data = { mirror: mirror, flavour: flavour, type: type, subscription: subscription };
        return await this.client.post('/core/firmware/setFirmwareConfig', post_data);
    }

    async info () {
        return await this.client.get('/core/firmware/info');
    }

    async status () {
        return await this.client.get('/core/firmware/status');
    }

    async health () {
        return await this.client.post('/core/firmware/health');
    }

    async audit () {
        return await this.client.post('/core/firmware/audit');
    }

    async upgrade (upgrade = null) {
        const post_data = (upgrade === null) ? {} : { upgrade: upgrade };
        return await this.client.post('/core/firmware/upgrade', post_data);
    }

    async upgradestatus () {
        return await this.client.get('/core/firmware/upgradestatus');
    }

    async changelog (version) {
        return await this.client.post('/core/firmware/changelog/' + version);
    }

    async install (pkg_name) {
        return await this.client.post('/core/firmware/install/' + pkg_name);
    }

    async reinstall (pkg_name) {
        return await this.client.post('/core/firmware/reinstall/' + pkg_name);
    }

    async remove (pkg_name) {
        return await this.client.post('/core/firmware/remove/' + pkg_name);
    }

    async lock (pkg_name) {
        return await this.client.post('/core/firmware/lock/' + pkg_name);
    }

    async unlock (pkg_name) {
        return await this.client.post('/core/firmware/unlock/' + pkg_name);
    }

    async details (pkg_name) {
        return await this.client.post('/core/firmware/details/' + pkg_name);
    }

    async license (pkg_name) {
        return await this.client.post('/core/firmware/license/' + pkg_name);
    }
}

module.exports = FirmwareClient;
