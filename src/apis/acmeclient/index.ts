'use strict';

import { AccountsClient } from './accounts';
import { ActionsClient } from './actions';
import { CertificatesClient } from './certificates';
import { ServiceClient } from './service';
import { SettingsClient } from './settings';
import { ValidationsClient } from './validations';

export type AcmeclientAPI = {
    AccountsClient:     AccountsClient,
    ActionsClient:      ActionsClient,
    CertificatesClient: CertificatesClient,
    ServiceClient:      ServiceClient,
    SettingsClient:     SettingsClient,
    ValidationsClient:  ValidationsClient,
};

export {
    AccountsClient,
    ActionsClient,
    CertificatesClient,
    ServiceClient,
    SettingsClient,
    ValidationsClient,
};
