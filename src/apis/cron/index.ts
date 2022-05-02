'use strict';

import { ServiceClient } from './service';
import { SettingsClient } from './settings';

export type CronAPI = {
    ServiceClient:  ServiceClient,
    SettingsClient: SettingsClient,
};

export {
    ServiceClient,
    SettingsClient,
};
