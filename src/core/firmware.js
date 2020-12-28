'use strict';

/**
 * FirmwareClient
 *
 * @module OPNsense/Core/FirmwareClient
 */

const BaseClient = require('../base');

/**
 * Firmware
 */
class FirmwareClient extends BaseClient {
    /**
     * Poweroff device
     *
     * @returns {Promise} Request promise
     */
    async poweroff () {
        return this.client.post('/core/firmware/poweroff');
    }

    /**
     * Reboot device
     *
     * @returns {Promise} Request promise
     */
    async reboot () {
        return this.client.post('/core/firmware/reboot');
    }

    /**
     * Running status
     *
     * @returns {Promise} Request promise
     */
    async running () {
        return this.client.get('/core/firmware/running');
    }

    /**
     * Get firmware config
     *
     * @returns {Promise} Request promise
     */
    async getFirmwareConfig () {
        return this.client.get('/core/firmware/getFirmwareConfig');
    }

    /**
     * get firmware options
     *
     * @returns {Promise} Request promise
     */
    async getFirmwareOptions () {
        return this.client.get('/core/firmware/getFirmwareOptions');
    }

    /**
     * Set firmware config
     *
     * @param   {string|null} mirror       Mirror url
     * @param   {string|null} flavour      Flavour
     * @param   {string|null} type         Type
     * @param   {string|null} subscription Subscription
     * @returns {Promise}                  Request promise
     */
    async setFirmwareConfig (mirror = null, flavour = null, type = null, subscription = null) {
        const post_data = { mirror: mirror, flavour: flavour, type: type, subscription: subscription };
        return this.client.post('/core/firmware/setFirmwareConfig', post_data);
    }

    /**
     * Get info
     *
     * @returns {Promise} Request promise
     */
    async info () {
        return this.client.get('/core/firmware/info');
    }

    /**
     * Get status
     *
     * @returns {Promise} Request promise
     */
    async status () {
        return this.client.get('/core/firmware/status');
    }

    /**
     * Check health
     *
     * @returns {Promise} Request promise
     */
    async health () {
        return this.client.post('/core/firmware/health');
    }

    /**
     * Audit
     *
     * @returns {Promise} Request promise
     */
    async audit () {
        return this.client.post('/core/firmware/audit');
    }

    /**
     * Upgrade firmware
     *
     * @param   {string|null} upgrade Upgrade type (pkg, maj, rel)
     * @returns {Promise}             Request promise
     */
    async upgrade (upgrade = null) {
        const post_data = (upgrade === null) ? {} : { upgrade: upgrade };
        return this.client.post('/core/firmware/upgrade', post_data);
    }

    /**
     * Get upgrade status
     *
     * @returns {Promise} Request promise
     */
    async upgradestatus () {
        return this.client.get('/core/firmware/upgradestatus');
    }

    /**
     * Get firmware changelog
     *
     * @param   {string}  version OPNsense version
     * @returns {Promise}        Request promise
     */
    async changelog (version) {
        return this.client.post('/core/firmware/changelog/' + version);
    }

    /**
     * Install package
     *
     * @param   {string}  pkg_name Package name
     * @returns {Promise}          Request promise
     */
    async install (pkg_name) {
        return this.client.post('/core/firmware/install/' + pkg_name);
    }

    /**
     * Reinstall package
     *
     * @param   {string}  pkg_name Package name
     * @returns {Promise}          Request promise
     */
    async reinstall (pkg_name) {
        return this.client.post('/core/firmware/reinstall/' + pkg_name);
    }

    /**
     * Remove package
     *
     * @param   {string}  pkg_name Package name
     * @returns {Promise}          Request promise
     */
    async remove (pkg_name) {
        return this.client.post('/core/firmware/remove/' + pkg_name);
    }

    /**
     * Lock package
     *
     * @param   {string}  pkg_name Package name
     * @returns {Promise}          Request promise
     */
    async lock (pkg_name) {
        return this.client.post('/core/firmware/lock/' + pkg_name);
    }

    /**
     * Unlock package
     *
     * @param   {string}  pkg_name Package name
     * @returns {Promise}          Request promise
     */
    async unlock (pkg_name) {
        return this.client.post('/core/firmware/unlock/' + pkg_name);
    }

    /**
     * Get package details
     *
     * @param   {string}  pkg_name Package name
     * @returns {Promise}          Request promise
     */
    async details (pkg_name) {
        return this.client.post('/core/firmware/details/' + pkg_name);
    }

    /**
     * Get package license
     *
     * @param   {string}  pkg_name Package name
     * @returns {Promise}          Request promise
     */
    async license (pkg_name) {
        return this.client.post('/core/firmware/license/' + pkg_name);
    }
}

module.exports = FirmwareClient;
