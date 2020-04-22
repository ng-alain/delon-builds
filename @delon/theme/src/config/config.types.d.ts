import { InjectionToken } from '@angular/core';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
export interface AlainConfig {
    errorCollect?: AlainErrorCollectConfig;
    chart?: AlainChartConfig;
}
export interface AlainErrorCollectConfig {
    /**
     * 监听频率，默认：`500`
     */
    freq?: number;
    /**
     * 顶部偏移值，默认：`145`
     */
    offsetTop?: number;
}
export interface AlainChartConfig {
    theme?: string | {
        [key: string]: NzSafeAny;
    };
}
export declare type AlainConfigKey = keyof AlainConfig;
export declare const ALAIN_CONFIG: InjectionToken<AlainConfig>;
