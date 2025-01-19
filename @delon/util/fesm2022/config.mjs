import * as i0 from '@angular/core';
import { InjectionToken, makeEnvironmentProviders, inject, Injectable } from '@angular/core';
import { SIGNAL } from '@angular/core/primitives/signals';
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
    config = { ...inject(ALAIN_CONFIG, { optional: true }) };
    get(componentName, key) {
        const res = (this.config[componentName] || {});
        return key ? { [key]: res[key] } : res;
    }
    merge(componentName, ...defaultValues) {
        return deepMergeKey({}, true, ...defaultValues, this.get(componentName));
    }
    /**
     * 将配置附加到当前实例中，支持 Signal 信号
     */
    attach(componentThis, componentName, defaultValues) {
        const data = this.merge(componentName, defaultValues);
        Object.entries(data).forEach(([key, value]) => {
            const t = componentThis;
            const s = t[key]?.[SIGNAL];
            if (s != null) {
                s.value = value;
            }
            else {
                t[key] = value;
            }
        });
    }
    set(componentName, value) {
        this.config[componentName] = { ...this.config[componentName], ...value };
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.1", ngImport: i0, type: AlainConfigService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.1.1", ngImport: i0, type: AlainConfigService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.1", ngImport: i0, type: AlainConfigService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { ALAIN_CONFIG, ALAIN_CONFIG_FACTORY, AlainConfigService, AlainSVConfig, provideAlainConfig };
//# sourceMappingURL=config.mjs.map
