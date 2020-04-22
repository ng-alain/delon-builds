import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { AlainConfig, AlainConfigKey } from './config.types';
export declare class AlainConfigService {
    private config;
    constructor(defaultConfig?: AlainConfig);
    get<T extends AlainConfigKey>(componentName: T, key?: string): AlainConfig[T];
    attach<R, T extends AlainConfigKey>(componentThis: NzSafeAny, componentName: T, defaultValues: R): void;
    attachKey<T extends AlainConfigKey>(componentThis: NzSafeAny, componentName: T, key: string): void;
    set<T extends AlainConfigKey>(componentName: T, value: AlainConfig[T]): void;
}
