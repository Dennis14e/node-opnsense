'use strict';

import { ClientClient } from './client';
import { ServerClient } from './server';

export type WireguardAPI = {
    ClientClient: ClientClient,
    ServerClient: ServerClient,
};

export {
    ClientClient,
    ServerClient,
};
