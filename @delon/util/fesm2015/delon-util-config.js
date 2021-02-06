import { InjectionToken, ɵɵdefineInjectable, ɵɵinject, Injectable, Optional, Inject } from '@angular/core';
import { deepMergeKey } from '@delon/util/other';

class AlainSVConfig {
}

const ALAIN_CONFIG = new InjectionToken('alain-config', {
    providedIn: 'root',
    factory: ALAIN_CONFIG_FACTORY,
});
function ALAIN_CONFIG_FACTORY() {
    return {};
}

class AlainConfigService {
    constructor(defaultConfig) {
        this.config = Object.assign({}, defaultConfig);
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
        this.config[componentName] = Object.assign(Object.assign({}, this.config[componentName]), value);
    }
}
/** @nocollapse */ AlainConfigService.ɵprov = ɵɵdefineInjectable({ factory: function AlainConfigService_Factory() { return new AlainConfigService(ɵɵinject(ALAIN_CONFIG, 8)); }, token: AlainConfigService, providedIn: "root" });
AlainConfigService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
AlainConfigService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [ALAIN_CONFIG,] }] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { ALAIN_CONFIG, ALAIN_CONFIG_FACTORY, AlainConfigService, AlainSVConfig };
//# sourceMappingURL=delon-util-config.js.map
