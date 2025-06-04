import { STORAGE_APP_NAME } from '../../shared/constants/storage';

export const getStorageStateName = (appName) => `${STORAGE_APP_NAME}-${appName}-state`;
