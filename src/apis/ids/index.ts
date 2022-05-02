'use strict';

import { ServiceClient } from './service';
import { SettingsClient } from './settings';

export type IDSAPI = {
    ServiceClient: ServiceClient,
    SettingsClient: SettingsClient,
}

export {
    ServiceClient,
    SettingsClient,
};
