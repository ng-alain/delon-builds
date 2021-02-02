import { InjectionToken, ɵɵinject, ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, Optional, Inject } from '@angular/core';
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
/** @nocollapse */ AlainConfigService.ɵfac = function AlainConfigService_Factory(t) { return new (t || AlainConfigService)(ɵɵinject(ALAIN_CONFIG, 8)); };
/** @nocollapse */ AlainConfigService.ɵprov = ɵɵdefineInjectable({ token: AlainConfigService, factory: AlainConfigService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(AlainConfigService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [ALAIN_CONFIG]
            }] }]; }, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { ALAIN_CONFIG, ALAIN_CONFIG_FACTORY, AlainConfigService, AlainSVConfig };
//# sourceMappingURL=delon-util-config.js.map
