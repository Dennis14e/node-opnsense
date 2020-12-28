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
     * Flush arp table
     *
     * @returns {Promise} Request promise
     */
    async flushArp () {
        return this.client.post('/diagnostics/interface/flushArp');
    }

    /**
     * Get arp table
     *
     * @returns {Promise} Request promise
     */
    async getArp () {
        return this.client.get('/diagnostics/interface/getArp');
    }

    /**
     * Get bpf statistics
     *
     * @returns {Promise} Request promise
     */
    async getBpfStatistics () {
        return this.client.get('/diagnostics/interface/getBpfStatistics');
    }

    /**
     * Get interface names
     *
     * @returns {Promise} Request promise
     */
    async getInterfaceNames () {
        return this.client.get('/diagnostics/interface/getInterfaceNames');
    }

    /**
     * Get interface statistics
     *
     * @returns {Promise} Request promise
     */
    async getInterfaceStatistics () {
        return this.client.get('/diagnostics/interface/getInterfaceStatistics');
    }

    /**
     * Get memory statistics
     *
     * @returns {Promise} Request promise
     */
    async getMemoryStatistics () {
        return this.client.get('/diagnostics/interface/getMemoryStatistics');
    }

    /**
     * Get ndp table
     *
     * @returns {Promise} Request promise
     */
    async getNdp () {
        return this.client.get('/diagnostics/interface/getNdp');
    }

    /**
     * Get netisr statistics
     *
     * @returns {Promise} Request promise
     */
    async getNetisrStatistics () {
        return this.client.get('/diagnostics/interface/getNetisrStatistics');
    }

    /**
     * Get protocol statistics
     *
     * @returns {Promise} Request promise
     */
    async getProtocolStatistics () {
        return this.client.get('/diagnostics/interface/getProtocolStatistics');
    }

    /**
     * Get routes
     *
     * @returns {Promise} Request promise
     */
    async getRoutes () {
        return this.client.get('/diagnostics/interface/getRoutes');
    }

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
