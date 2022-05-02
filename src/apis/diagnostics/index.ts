'use strict';

import { ActivityClient } from './activity';
import { DnsClient } from './dns';
import { FirewallClient } from './firewall';
import { InterfaceClient } from './interface';
import { NetflowClient } from './netflow';
import { NetworkInsightClient } from './networkinsight';
import { SystemhealthClient } from './systemhealth';
import { TrafficClient } from './traffic';

export type DiagnosticsAPI = {
    ActivityClient:       ActivityClient,
    DnsClient:            DnsClient,
    FirewallClient:       FirewallClient,
    InterfaceClient:      InterfaceClient,
    NetflowClient:        NetflowClient,
    NetworkInsightClient: NetworkInsightClient,
    SystemhealthClient:   SystemhealthClient,
    TrafficClient:        TrafficClient,
}

export {
    ActivityClient,
    DnsClient,
    FirewallClient,
    InterfaceClient,
    NetflowClient,
    NetworkInsightClient,
    SystemhealthClient,
    TrafficClient,
};
