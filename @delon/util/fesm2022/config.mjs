import * as i0 from '@angular/core';
import { InjectionToken, makeEnvironmentProviders, Injectable, Optional, Inject } from '@angular/core';
import { deepMergeKey } from '@delon/util/other';

class AlainSVConfig {
    /** 大小，默认：`large` */
    size;
    /** 间距，默认：`32` */
    gutter;
    /** 布局，默认：`horizontal` */
    layout;
    /** 列数，默认：`3` */
    col;
    /** 是否显示默认值，当内容为空值时显示 `-`，默认：`true` */
    default;
    /** `label` 固定宽度，若 `null` 或 `undefined` 表示非固定，默认：`null` */
    labelWidth;
}

const ALAIN_CONFIG = new InjectionToken('alain-config', {
    providedIn: 'root',
    factory: ALAIN_CONFIG_FACTORY
});
function ALAIN_CONFIG_FACTORY() {
    return {};
}
function provideAlainConfig(config) {
    return makeEnvironmentProviders([{ provide: ALAIN_CONFIG, useValue: config }]);
}

/* eslint-disable @typescript-eslint/no-explicit-any */
class AlainConfigService {
    config;
    constructor(defaultConfig) {
        this.config = { ...defaultConfig };
    }
    get(componentName, key) {
        const res = (this.config[componentName] || {});
        return key ? { [key]: res[key] } : res;
    }
    merge(componentName, ...defaultValues) {
        return deepMergeKey({}, true, ...defaultValues, this.get(componentName));
    }
    attach(componentThis, componentName, defaultValues) {
        Object.assign(componentThis, this.merge(componentName, defaultValues));
    }
    attachKey(componentThis, componentName, key) {
        Object.assign(componentThis, this.get(componentName, key));
    }
    set(componentName, value) {
        this.config[componentName] = { ...this.config[componentName], ...value };
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.1", ngImport: i0, type: AlainConfigService, deps: [{ token: ALAIN_CONFIG, optional: true }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.1.1", ngImport: i0, type: AlainConfigService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.1", ngImport: i0, type: AlainConfigService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: () => [{ type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [ALAIN_CONFIG]
                }] }] });

/**
 * Generated bundle index. Do not edit.
 */

export { ALAIN_CONFIG, ALAIN_CONFIG_FACTORY, AlainConfigService, AlainSVConfig, provideAlainConfig };
//# sourceMappingURL=config.mjs.map
