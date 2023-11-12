import { EnvironmentProviders, Type } from '@angular/core';
import { AlainConfig } from '@delon/util/config';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
export interface AlainProvideOptions {
    config?: AlainConfig;
    /**
     * Initialize default language
     *
     * 初始化默认语言
     */
    defaultLang: AlainProvideLang;
    i18nClass?: Type<NzSafeAny>;
}
export interface AlainProvideLang {
    abbr: string;
    ng: NzSafeAny;
    zorro: NzSafeAny;
    date: NzSafeAny;
    delon: NzSafeAny;
}
export declare function provideAlain(options: AlainProvideOptions): EnvironmentProviders;
