'use strict';

/**
 * InterfaceClient
 *
 * @module OPNsense/Diagnostics/InterfaceClient
 */
const BaseClient = require('../base');

/**
 * Interface
 */
class InterfaceClient extends BaseClient {
    /**
     * @openapi
     *
     * /diagnostics/interface/delRoute:
     *   post:
     *     summary: Delete route
     *     tags:
     *       - diagnostics/interface
     *     produces:
     *       - application/json
     *     parameters:
     *       - in: formData
     *         name: destination
     *         required: true
     *       - in: formData
     *         name: gateway
     *         required: true
     */
    /**
     * Delete route
     *
     * @param   {string}  destination Destination
     * @param   {string}  gateway     Gateway
     * @returns {Promise}             Request promise
     */
    async delRoute (destination, gateway) {
        const post_data = {
            destination: destination,
            gateway: gateway,
        };
        return this.client.post('/diagnostics/interface/delRoute', post_data);
    }

    /**
     * @openapi
     *
     * /diagnostics/interface/flushArp:
     *   post:
     *     summary: Flush arp table
     *     tags:
     *       - diagnostics/interface
     *     produces:
     *       - application/json
     */
    /**
     * Flush arp table
     *
     * @returns {Promise} Request promise
     */
    async flushArp () {
        return this.client.post('/diagnostics/interface/flushArp');
    }

    /**
     * @openapi
     *
     * /diagnostics/interface/getArp:
     *   get:
     *     summary: Get arp table
     *     tags:
     *       - diagnostics/interface
     *     produces:
     *       - application/json
     */
    /**
     * Get arp table
     *
     * @returns {Promise} Request promise
     */
    async getArp () {
        return this.client.get('/diagnostics/interface/getArp');
    }

    /**
     * @openapi
     *
     * /diagnostics/interface/getBpfStatistics:
     *   get:
     *     summary: Get bpf statistics
     *     tags:
     *       - diagnostics/interface
     *     produces:
     *       - application/json
     */
    /**
     * Get bpf statistics
     *
     * @returns {Promise} Request promise
     */
    async getBpfStatistics () {
        return this.client.get('/diagnostics/interface/getBpfStatistics');
    }

    /**
     * @openapi
     *
     * /diagnostics/interface/getInterfaceNames:
     *   get:
     *     summary: Get interface names
     *     tags:
     *       - diagnostics/interface
     *     produces:
     *       - application/json
     */
    /**
     * Get interface names
     *
     * @returns {Promise} Request promise
     */
    async getInterfaceNames () {
        return this.client.get('/diagnostics/interface/getInterfaceNames');
    }

    /**
     * @openapi
     *
     * /diagnostics/interface/getInterfaceStatistics:
     *   get:
     *     summary: Get interface statistics
     *     tags:
     *       - diagnostics/interface
     *     produces:
     *       - application/json
     */
    /**
     * Get interface statistics
     *
     * @returns {Promise} Request promise
     */
    async getInterfaceStatistics () {
        return this.client.get('/diagnostics/interface/getInterfaceStatistics');
    }

    /**
     * @openapi
     *
     * /diagnostics/interface/getMemoryStatistics:
     *   get:
     *     summary: Get memory statistics
     *     tags:
     *       - diagnostics/interface
     *     produces:
     *       - application/json
     */
    /**
     * Get memory statistics
     *
     * @returns {Promise} Request promise
     */
    async getMemoryStatistics () {
        return this.client.get('/diagnostics/interface/getMemoryStatistics');
    }

    /**
     * @openapi
     *
     * /diagnostics/interface/getNdp:
     *   get:
     *     summary: Get ndp table
     *     tags:
     *       - diagnostics/interface
     *     produces:
     *       - application/json
     */
    /**
     * Get ndp table
     *
     * @returns {Promise} Request promise
     */
    async getNdp () {
        return this.client.get('/diagnostics/interface/getNdp');
    }

    /**
     * @openapi
     *
     * /diagnostics/interface/getNetisrStatistics:
     *   get:
     *     summary: Get netisr statistics
     *     tags:
     *       - diagnostics/interface
     *     produces:
     *       - application/json
     */
    /**
     * Get netisr statistics
     *
     * @returns {Promise} Request promise
     */
    async getNetisrStatistics () {
        return this.client.get('/diagnostics/interface/getNetisrStatistics');
    }

    /**
     * @openapi
     *
     * /diagnostics/interface/getProtocolStatistics:
     *   get:
     *     summary: Get protocol statistics
     *     tags:
     *       - diagnostics/interface
     *     produces:
     *       - application/json
     */
    /**
     * Get protocol statistics
     *
     * @returns {Promise} Request promise
     */
    async getProtocolStatistics () {
        return this.client.get('/diagnostics/interface/getProtocolStatistics');
    }

    /**
     * @openapi
     *
     * /diagnostics/interface/getRoutes:
     *   get:
     *     summary: Get routes
     *     tags:
     *       - diagnostics/interface
     *     produces:
     *       - application/json
     */
    /**
     * Get routes
     *
     * @returns {Promise} Request promise
     */
    async getRoutes () {
        return this.client.get('/diagnostics/interface/getRoutes');
    }

    /**
     * @openapi
     *
     * /diagnostics/interface/getSocketStatistics:
     *   get:
     *     summary: Get socket statistics
     *     tags:
     *       - diagnostics/interface
     *     produces:
     *       - application/json
     */
    /**
     * Get socket statistics
     *
     * @returns {Promise} Request promise
     */
    async getSocketStatistics () {
        return this.client.get('/diagnostics/interface/getSocketStatistics');
    }
}

module.exports = InterfaceClient;
