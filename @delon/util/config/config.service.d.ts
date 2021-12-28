import { AlainConfig, AlainConfigKey } from './config.types';
import * as i0 from "@angular/core";
export declare class AlainConfigService {
    private config;
    constructor(defaultConfig?: AlainConfig);
    get<T extends AlainConfigKey>(componentName: T, key?: string): AlainConfig[T];
    merge<T extends AlainConfigKey>(componentName: T, ...defaultValues: Array<AlainConfig[T]>): AlainConfig[T];
    attach<T extends AlainConfigKey>(componentThis: unknown, componentName: T, defaultValues: AlainConfig[T]): void;
    attachKey<T extends AlainConfigKey>(componentThis: unknown, componentName: T, key: string): void;
    set<T extends AlainConfigKey>(componentName: T, value: AlainConfig[T]): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlainConfigService, [{ optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AlainConfigService>;
}
