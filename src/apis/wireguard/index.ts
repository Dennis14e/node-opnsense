'use strict';

import { ClientClient } from './client';
import { ServerClient } from './server';

export class WireguardAPI {
    static ClientClient = ClientClient;
    static ServerClient = ServerClient;
};
