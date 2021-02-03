import { Pipe, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * Generated from: filter.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FilterPipe {
    /**
     * Filter array
     *
     * 过滤数组
     * @template T
     * @param {?} array
     * @param {?} matcher
     * @param {...?} args
     * @return {?}
     */
    transform(array, matcher, ...args) {
        return array.filter((/**
         * @param {?} i
         * @return {?}
         */
        i => matcher(i, ...args)));
    }
}
FilterPipe.decorators = [
    { type: Pipe, args: [{ name: 'filter' },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const PIPES = [FilterPipe];
class FilterPipeModule {
}
FilterPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: PIPES,
                exports: PIPES,
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: delon-util-pipes-filter.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { FilterPipe, FilterPipeModule };
//# sourceMappingURL=delon-util-pipes-filter.js.map
