import { InjectionToken } from '@angular/core';
export interface OnBoardingKeyStore {
    get(key: string): unknown;
    set(key: string, version: unknown): void;
}
export declare const ONBOARDING_STORE_TOKEN: InjectionToken<OnBoardingKeyStore>;
export declare function ONBOARDING_STORE_TOKEN_FACTORY(): OnBoardingKeyStore;
export declare class LocalStorageStore implements OnBoardingKeyStore {
    get(key: string): unknown;
    set(key: string, version: unknown): void;
}
