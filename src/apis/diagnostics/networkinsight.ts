'use strict';

import { BaseClient } from '../../client/BaseClient';

/**
 * NetworkInsightClient
 *
 * @module OPNsense/Diagnostics/NetworkInsightClient
 */

/**
 * NetworkInsight
 */
export class NetworkInsightClient extends BaseClient {
    /**
     * @openapi
     *
     * /diagnostics/networkinsight/getInterfaces:
     *   get:
     *     summary: Get interfaces
     *     tags:
     *       - diagnostics/networkinsight
     *     responses:
     *       '200':
     *         description: OK
     *         content:
     *           application/json:
     *             {}
     */
    /**
     * Get interfaces
     *
     * @returns {Promise} Request promise
     */
    async getInterfaces () {
        return this.httpClient.get('/diagnostics/networkinsight/getInterfaces');
    }

    /**
     * @openapi
     *
     * /diagnostics/networkinsight/getMetadata:
     *   get:
     *     summary: Get metadata
     *     tags:
     *       - diagnostics/networkinsight
     *     responses:
     *       '200':
     *         description: OK
     *         content:
     *           application/json:
     *             {}
     */
    /**
     * Get metadata
     *
     * @returns {Promise} Request promise
     */
    async getMetadata () {
        return this.httpClient.get('/diagnostics/networkinsight/getMetadata');
    }

    /**
     * @openapi
     *
     * /diagnostics/networkinsight/getProtocols:
     *   get:
     *     summary: Get protocols
     *     tags:
     *       - diagnostics/networkinsight
     *     responses:
     *       '200':
     *         description: OK
     *         content:
     *           application/json:
     *             {}
     */
    /**
     * Get protocols
     *
     * @returns {Promise} Request promise
     */
    async getProtocols () {
        return this.httpClient.get('/diagnostics/networkinsight/getProtocols');
    }

    /**
     * @openapi
     *
     * /diagnostics/networkinsight/getServices:
     *   get:
     *     summary: Get services
     *     tags:
     *       - diagnostics/networkinsight
     *     responses:
     *       '200':
     *         description: OK
     *         content:
     *           application/json:
     *             {}
     */
    /**
     * Get services
     *
     * @returns {Promise} Request promise
     */
    async getServices () {
        return this.httpClient.get('/diagnostics/networkinsight/getServices');
    }
}
