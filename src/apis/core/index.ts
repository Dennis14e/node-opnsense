'use strict';

import { FirmwareClient } from './firmware';
import { MenuClient } from './menu';
import { SystemClient } from './system';

export type CoreAPI = {
    FirmwareClient: FirmwareClient,
    MenuClient:     MenuClient,
    SystemClient:   SystemClient,
};

export {
    FirmwareClient,
    MenuClient,
    SystemClient,
};
