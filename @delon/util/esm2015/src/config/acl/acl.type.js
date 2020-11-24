/**
 * @fileoverview added by tsickle
 * Generated from: src/config/acl/acl.type.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function AlainACLConfig() { }
if (false) {
    /**
     * Router URL when guard fail, default: `/403`
     * @type {?|undefined}
     */
    AlainACLConfig.prototype.guard_url;
    /**
     * `can` before execution callback
     * @type {?|undefined}
     */
    AlainACLConfig.prototype.preCan;
}
/**
 * @record
 */
export function AlainACLType() { }
if (false) {
    /**
     * 角色
     * @type {?|undefined}
     */
    AlainACLType.prototype.role;
    /**
     * 权限点
     * @type {?|undefined}
     */
    AlainACLType.prototype.ability;
    /**
     * Validated against, default: `oneOf`
     * - `allOf` the value validates against all the roles or abilities
     * - `oneOf` the value validates against exactly one of the roles or abilities
     * @type {?|undefined}
     */
    AlainACLType.prototype.mode;
    /**
     * 是否取反，即结果为 `true` 时表示未授权
     * @type {?|undefined}
     */
    AlainACLType.prototype.except;
    /* Skipping unhandled member: [key: string]: NzSafeAny;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNsLnR5cGUuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vLi4vcGFja2FnZXMvdXRpbC8iLCJzb3VyY2VzIjpbInNyYy9jb25maWcvYWNsL2FjbC50eXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUEsb0NBVUM7Ozs7OztJQU5DLG1DQUFtQjs7Ozs7SUFLbkIsZ0NBQStHOzs7OztBQUdqSCxrQ0F1QkM7Ozs7OztJQW5CQyw0QkFBZ0I7Ozs7O0lBSWhCLCtCQUE4Qjs7Ozs7OztJQU85Qiw0QkFBeUI7Ozs7O0lBS3pCLDhCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWxhaW5BQ0xDb25maWcge1xuICAvKipcbiAgICogUm91dGVyIFVSTCB3aGVuIGd1YXJkIGZhaWwsIGRlZmF1bHQ6IGAvNDAzYFxuICAgKi9cbiAgZ3VhcmRfdXJsPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBgY2FuYCBiZWZvcmUgZXhlY3V0aW9uIGNhbGxiYWNrXG4gICAqL1xuICBwcmVDYW4/OiAoKHJvbGVPckFiaWxpdHk6IG51bWJlciB8IG51bWJlcltdIHwgc3RyaW5nIHwgc3RyaW5nW10gfCBBbGFpbkFDTFR5cGUpID0+IEFsYWluQUNMVHlwZSB8IG51bGwpIHwgbnVsbDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBbGFpbkFDTFR5cGUge1xuICAvKipcbiAgICog6KeS6ImyXG4gICAqL1xuICByb2xlPzogc3RyaW5nW107XG4gIC8qKlxuICAgKiDmnYPpmZDngrlcbiAgICovXG4gIGFiaWxpdHk/OiBudW1iZXJbXSB8IHN0cmluZ1tdO1xuXG4gIC8qKlxuICAgKiBWYWxpZGF0ZWQgYWdhaW5zdCwgZGVmYXVsdDogYG9uZU9mYFxuICAgKiAtIGBhbGxPZmAgdGhlIHZhbHVlIHZhbGlkYXRlcyBhZ2FpbnN0IGFsbCB0aGUgcm9sZXMgb3IgYWJpbGl0aWVzXG4gICAqIC0gYG9uZU9mYCB0aGUgdmFsdWUgdmFsaWRhdGVzIGFnYWluc3QgZXhhY3RseSBvbmUgb2YgdGhlIHJvbGVzIG9yIGFiaWxpdGllc1xuICAgKi9cbiAgbW9kZT86ICdhbGxPZicgfCAnb25lT2YnO1xuXG4gIC8qKlxuICAgKiDmmK/lkKblj5blj43vvIzljbPnu5PmnpzkuLogYHRydWVgIOaXtuihqOekuuacquaOiOadg1xuICAgKi9cbiAgZXhjZXB0PzogYm9vbGVhbjtcblxuICBba2V5OiBzdHJpbmddOiBOelNhZmVBbnk7XG59XG4iXX0=