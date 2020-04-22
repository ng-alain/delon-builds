/**
 * @fileoverview added by tsickle
 * Generated from: time.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} val
 * @return {?}
 */
function toDate(val) {
    if (val instanceof Date)
        return val;
    if (typeof val === 'number')
        return new Date(val);
    return new Date(val);
}

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: delon-chart-core-time.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { toDate };
//# sourceMappingURL=delon-chart-core-time.js.map
