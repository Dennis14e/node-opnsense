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
     * @openapi
     *
     * /core/firmware/poweroff:
     *   post:
     *     summary: Poweroff device
     *     tags:
     *       - core/firmware
     *     responses:
     *       '200':
     *         description: OK
     *         content:
     *           application/json:
     *             {}
     */
    /**
     * Poweroff device
     *
     * @returns {Promise} Request promise
     */
    async poweroff () {
        return this.client.post('/core/firmware/poweroff');
    }

    /**
     * @openapi
     *
     * /core/firmware/reboot:
     *   post:
     *     summary: Reboot device
     *     tags:
     *       - core/firmware
     *     responses:
     *       '200':
     *         description: OK
     *         content:
     *           application/json:
     *             {}
     */
    /**
     * Reboot device
     *
     * @returns {Promise} Request promise
     */
    async reboot () {
        return this.client.post('/core/firmware/reboot');
    }

    /**
     * @openapi
     *
     * /core/firmware/running:
     *   get:
     *     summary: Get running status
     *     tags:
     *       - core/firmware
     *     responses:
     *       '200':
     *         description: OK
     *         content:
     *           application/json:
     *             {}
     */
    /**
     * Get running status
     *
     * @returns {Promise} Request promise
     */
    async running () {
        return this.client.get('/core/firmware/running');
    }

    /**
     * @openapi
     *
     * /core/firmware/getFirmwareConfig:
     *   get:
     *     summary: Get firmware config
     *     tags:
     *       - core/firmware
     *     responses:
     *       '200':
     *         description: OK
     *         content:
     *           application/json:
     *             {}
     */
    /**
     * Get firmware config
     *
     * @returns {Promise} Request promise
     */
    async getFirmwareConfig () {
        return this.client.get('/core/firmware/getFirmwareConfig');
    }

    /**
     * @openapi
     *
     * /core/firmware/getFirmwareOptions:
     *   get:
     *     summary: Get firmware options
     *     tags:
     *       - core/firmware
     *     responses:
     *       '200':
     *         description: OK
     *         content:
     *           application/json:
     *             {}
     */
    /**
     * Get firmware options
     *
     * @returns {Promise} Request promise
     */
    async getFirmwareOptions () {
        return this.client.get('/core/firmware/getFirmwareOptions');
    }

    /**
     * @openapi
     *
     * /core/firmware/setFirmwareConfig:
     *   post:
     *     summary: Set firmware config
     *     tags:
     *       - core/firmware
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
     *               mirror:
     *                 type: string
     *               flavour:
     *                 type: string
     *               type:
     *                 type: string
     *               subscription:
     *                 type: string
     */
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
     * @openapi
     *
     * /core/firmware/info:
     *   get:
     *     summary: Get info
     *     tags:
     *       - core/firmware
     *     responses:
     *       '200':
     *         description: OK
     *         content:
     *           application/json:
     *             {}
     */
    /**
     * Get info
     *
     * @returns {Promise} Request promise
     */
    async info () {
        return this.client.get('/core/firmware/info');
    }

    /**
     * @openapi
     *
     * /core/firmware/status:
     *   get:
     *     summary: Get status
     *     tags:
     *       - core/firmware
     *     responses:
     *       '200':
     *         description: OK
     *         content:
     *           application/json:
     *             {}
     */
    /**
     * Get status
     *
     * @returns {Promise} Request promise
     */
    async status () {
        return this.client.get('/core/firmware/status');
    }

    /**
     * @openapi
     *
     * /core/firmware/health:
     *   post:
     *     summary: Check health
     *     tags:
     *       - core/firmware
     *     responses:
     *       '200':
     *         description: OK
     *         content:
     *           application/json:
     *             {}
     */
    /**
     * Check health
     *
     * @returns {Promise} Request promise
     */
    async health () {
        return this.client.post('/core/firmware/health');
    }

    /**
     * @openapi
     *
     * /core/firmware/audit:
     *   post:
     *     summary: Run audit
     *     tags:
     *       - core/firmware
     *     responses:
     *       '200':
     *         description: OK
     *         content:
     *           application/json:
     *             {}
     */
    /**
     * Run audit
     *
     * @returns {Promise} Request promise
     */
    async audit () {
        return this.client.post('/core/firmware/audit');
    }

    /**
     * @openapi
     *
     * /core/firmware/upgrade:
     *   post:
     *     summary: Upgrade firmware
     *     tags:
     *       - core/firmware
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
     *               upgrade:
     *                 type: string
     */
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
     * @openapi
     *
     * /core/firmware/upgradestatus:
     *   get:
     *     summary: Get upgrade status
     *     tags:
     *       - core/firmware
     *     responses:
     *       '200':
     *         description: OK
     *         content:
     *           application/json:
     *             {}
     */
    /**
     * Get upgrade status
     *
     * @returns {Promise} Request promise
     */
    async upgradestatus () {
        return this.client.get('/core/firmware/upgradestatus');
    }

    /**
     * @openapi
     *
     * /core/firmware/changelog/{version}:
     *   post:
     *     summary: Get firmware changelog
     *     tags:
     *       - core/firmware
     *     responses:
     *       '200':
     *         description: OK
     *         content:
     *           application/json:
     *             {}
     *     parameters:
     *       - in: path
     *         name: version
     *         schema:
     *           type: string
     *         required: true
     */
    /**
     * Get firmware changelog
     *
     * @param   {string}  version OPNsense version
     * @returns {Promise}         Request promise
     */
    async changelog (version) {
        return this.client.post('/core/firmware/changelog/' + version);
    }

    /**
     * @openapi
     *
     * /core/firmware/install/{pkg_name}:
     *   post:
     *     summary: Install package
     *     tags:
     *       - core/firmware
     *     responses:
     *       '200':
     *         description: OK
     *         content:
     *           application/json:
     *             {}
     *     parameters:
     *       - in: path
     *         name: pkg_name
     *         schema:
     *           type: string
     *         required: true
     */
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
     * @openapi
     *
     * /core/firmware/reinstall/{pkg_name}:
     *   post:
     *     summary: Reinstall package
     *     tags:
     *       - core/firmware
     *     responses:
     *       '200':
     *         description: OK
     *         content:
     *           application/json:
     *             {}
     *     parameters:
     *       - in: path
     *         name: pkg_name
     *         schema:
     *           type: string
     *         required: true
     */
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
     * @openapi
     *
     * /core/firmware/installConfiguredPlugins:
     *   post:
     *     summary: Install missing configured plugins
     *     tags:
     *       - core/firmware
     *     responses:
     *       '200':
     *         description: OK
     *         content:
     *           application/json:
     *             {}
     */
    /**
     * Install missing configured plugins
     *
     * @returns {Promise} Request promise
     */
    async installConfiguredPlugins () {
        return this.client.post('/core/firmware/installConfiguredPlugins');
    }

    /**
     * @openapi
     *
     * /core/firmware/acceptConfiguredPlugins:
     *   post:
     *     summary: Accept configured plugins
     *     tags:
     *       - core/firmware
     *     responses:
     *       '200':
     *         description: OK
     *         content:
     *           application/json:
     *             {}
     */
    /**
     * Accept configured plugins
     *
     * @returns {Promise} Request promise
     */
    async acceptConfiguredPlugins () {
        return this.client.post('/core/firmware/acceptConfiguredPlugins');
    }

    /**
     * @openapi
     *
     * /core/firmware/remove/{pkg_name}:
     *   post:
     *     summary: Remove package
     *     tags:
     *       - core/firmware
     *     responses:
     *       '200':
     *         description: OK
     *         content:
     *           application/json:
     *             {}
     *     parameters:
     *       - in: path
     *         name: pkg_name
     *         schema:
     *           type: string
     *         required: true
     */
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
     * @openapi
     *
     * /core/firmware/lock/{pkg_name}:
     *   post:
     *     summary: Lock package
     *     tags:
     *       - core/firmware
     *     responses:
     *       '200':
     *         description: OK
     *         content:
     *           application/json:
     *             {}
     *     parameters:
     *       - in: path
     *         name: pkg_name
     *         schema:
     *           type: string
     *         required: true
     */
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
     * @openapi
     *
     * /core/firmware/unlock/{pkg_name}:
     *   post:
     *     summary: Unlock package
     *     tags:
     *       - core/firmware
     *     responses:
     *       '200':
     *         description: OK
     *         content:
     *           application/json:
     *             {}
     *     parameters:
     *       - in: path
     *         name: pkg_name
     *         schema:
     *           type: string
     *         required: true
     */
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
     * @openapi
     *
     * /core/firmware/details/{pkg_name}:
     *   post:
     *     summary: Get package details
     *     tags:
     *       - core/firmware
     *     responses:
     *       '200':
     *         description: OK
     *         content:
     *           application/json:
     *             {}
     *     parameters:
     *       - in: path
     *         name: pkg_name
     *         schema:
     *           type: string
     *         required: true
     */
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
     * @openapi
     *
     * /core/firmware/license/{pkg_name}:
     *   post:
     *     summary: Get package license
     *     tags:
     *       - core/firmware
     *     responses:
     *       '200':
     *         description: OK
     *         content:
     *           application/json:
     *             {}
     *     parameters:
     *       - in: path
     *         name: pkg_name
     *         schema:
     *           type: string
     *         required: true
     */
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
