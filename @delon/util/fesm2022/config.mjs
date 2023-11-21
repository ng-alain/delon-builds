import * as i0 from '@angular/core';
import { InjectionToken, makeEnvironmentProviders, Injectable, Optional, Inject } from '@angular/core';
import { deepMergeKey } from '@delon/util/other';

class AlainSVConfig {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: AlainConfigService, deps: [{ token: ALAIN_CONFIG, optional: true }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: AlainConfigService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: AlainConfigService, decorators: [{
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
