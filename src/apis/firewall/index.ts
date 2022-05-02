'use strict';

import { AliasClient } from './alias';
import { AliasUtilClient } from './alias_util';

export type FirewallAPI = {
    AliasClient: AliasClient,
    AliasUtilClient: AliasUtilClient,
};

export {
    AliasClient,
    AliasUtilClient,
};
