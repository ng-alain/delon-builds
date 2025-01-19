import { AlainConfig, AlainConfigKey } from './config.types';
import * as i0 from "@angular/core";
export declare class AlainConfigService {
    private readonly config;
    get<T extends AlainConfigKey>(componentName: T, key?: string): AlainConfig[T];
    merge<T extends AlainConfigKey>(componentName: T, ...defaultValues: Array<AlainConfig[T]>): AlainConfig[T];
    /**
     * 将配置附加到当前实例中，支持 Signal 信号
     */
    attach<T extends AlainConfigKey>(componentThis: unknown, componentName: T, defaultValues: AlainConfig[T]): void;
    set<T extends AlainConfigKey>(componentName: T, value: AlainConfig[T]): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlainConfigService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AlainConfigService>;
}
