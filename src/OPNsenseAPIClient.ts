'use strict';

import * as http from 'http';
import * as https from 'https';

import { HttpClient } from './client/HttpClient';

import * as AcmeclientAPI from './apis/acmeclient/index';
import * as CoreAPI from './apis/core/index';
import * as CronAPI from './apis/cron/index';
import * as DiagnosticsAPI from './apis/diagnostics/index';
import * as FirewallAPI from './apis/firewall/index';
import * as WireguardAPI from './apis/wireguard/index';
import * as WolAPI from './apis/wol/index';

interface Options {
    url: string;
    key: string;
    secret: string;
    verify_tls?: boolean;
}

export class OPNsenseAPIClient {
    acmeclient: AcmeclientAPI.AcmeclientAPI;
    core: CoreAPI.CoreAPI;
    cron: CronAPI.CronAPI;
    diagnostics: DiagnosticsAPI.DiagnosticsAPI;
    firewall: FirewallAPI.FirewallAPI;
    wireguard: WireguardAPI.WireguardAPI;
    wol: WolAPI.WolAPI;

    constructor (opts: Options) {
        const url = new URL(opts.url.replace(/\/?$/, '/') + 'api');
        const tls = url.protocol === 'https:';
        let httpModule: typeof http | typeof https;
        let httpAgentOptions = {};

        if (tls) {
            httpModule = https;

            httpAgentOptions = {
                rejectUnauthorized: opts.verify_tls,
            };
        }
        else {
            httpModule = http;
        }

        const httpAgent: http.Agent | https.Agent = new httpModule.Agent(httpAgentOptions);

        const httpOptions = {
            hostname: url.hostname,
            port: (
                url.port !== ''
                    ? parseInt(url.port)
                    : (tls ? 443 : 80)
            ),
            path: url.pathname,
            method: 'GET', // default
            headers: <http.OutgoingHttpHeaders>{
                'Authorization': 'Basic ' + Buffer.from(opts.key + ':' + opts.secret).toString('base64'),
                'Accept':        'application/json',
                'User-Agent':    'Node OPNsense API-Client',
            },
            httpModule: httpModule,
            httpAgent: httpAgent,
        };

        const httpClient = new HttpClient(httpOptions);


        this.acmeclient = {
            AccountsClient:     new AcmeclientAPI.AccountsClient(httpClient),
            ActionsClient:      new AcmeclientAPI.ActionsClient(httpClient),
            CertificatesClient: new AcmeclientAPI.CertificatesClient(httpClient),
            ServiceClient:      new AcmeclientAPI.ServiceClient(httpClient),
            SettingsClient:     new AcmeclientAPI.SettingsClient(httpClient),
            ValidationsClient:  new AcmeclientAPI.ValidationsClient(httpClient),
        };

        this.core = {
            FirmwareClient: new CoreAPI.FirmwareClient(httpClient),
            MenuClient:     new CoreAPI.MenuClient(httpClient),
            SystemClient:   new CoreAPI.SystemClient(httpClient),
        };

        this.cron = {
            ServiceClient:  new CronAPI.ServiceClient(httpClient),
            SettingsClient: new CronAPI.SettingsClient(httpClient),
        };

        this.diagnostics = {
            ActivityClient:       new DiagnosticsAPI.ActivityClient(httpClient),
            DnsClient:            new DiagnosticsAPI.DnsClient(httpClient),
            FirewallClient:       new DiagnosticsAPI.FirewallClient(httpClient),
            InterfaceClient:      new DiagnosticsAPI.InterfaceClient(httpClient),
            NetflowClient:        new DiagnosticsAPI.NetflowClient(httpClient),
            NetworkInsightClient: new DiagnosticsAPI.NetworkInsightClient(httpClient),
            SystemhealthClient:   new DiagnosticsAPI.SystemhealthClient(httpClient),
            TrafficClient:        new DiagnosticsAPI.TrafficClient(httpClient),
        };

        this.firewall = {
            AliasClient:     new FirewallAPI.AliasClient(httpClient),
            AliasUtilClient: new FirewallAPI.AliasUtilClient(httpClient),
        };

        this.wireguard = {
            ClientClient: new WireguardAPI.ClientClient(httpClient),
            ServerClient: new WireguardAPI.ServerClient(httpClient),
        };

        this.wol = {
            WolClient: new WolAPI.WolClient(httpClient),
        };
    }
}
