import { LoadingCustom, LoadingIcon, LoadingType } from './loading.types';
/**
 * @deprecated `LoadingConfig` is going to be removed in 10.0.0. Please refer to https://ng-alain.com/docs/global-config
 */
export declare class LoadingConfig {
    constructor();
    type?: LoadingType;
    text?: string;
    icon?: LoadingIcon;
    custom?: LoadingCustom;
    delay?: number;
}
